import React, {useEffect, useRef} from 'react'
import * as THREE from 'three'

const FluidBackground: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!containerRef.current) return

		const container = containerRef.current
		const scene = new THREE.Scene()
		const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
		camera.position.z = 1

		const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true})
		renderer.setSize(container.clientWidth, container.clientHeight)
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
		container.appendChild(renderer.domElement)

		const uniforms = {
			uTime: {value: 0},
			uResolution: {
				value: new THREE.Vector2(container.clientWidth, container.clientHeight),
			},
			uColor1: {value: new THREE.Color(0xff007f)},
			uColor2: {value: new THREE.Color(0x00ffff)},
			uColor3: {value: new THREE.Color(0x9d00ff)},
			uColor4: {value: new THREE.Color(0xff1493)},
			uMouse: {value: new THREE.Vector2(0.5, 0.5)},
		}

		const vertexShader = `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `

		const fragmentShader = `
            uniform float uTime;
            uniform vec2 uResolution;
            uniform vec3 uColor1;
            uniform vec3 uColor2;
            uniform vec3 uColor3;
            uniform vec3 uColor4;
            uniform vec2 uMouse;

            varying vec2 vUv;

            // Simplex/Perlin noise function
            vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

            float snoise(vec2 v) {
                const vec4 C = vec4(0.211324865405187,  
                                    0.366025403784439,  
                                    -0.577350269189626, 
                                    0.024390243902439); 
                vec2 i  = floor(v + dot(v, C.yy) );
                vec2 x0 = v -   i + dot(i, C.xx);
                vec2 i1;
                i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                vec4 x12 = x0.xyxy + C.xxzz;
                x12.xy -= i1;
                i = mod289(i);
                vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
                    + i.x + vec3(0.0, i1.x, 1.0 ));
                vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                m = m*m ;
                m = m*m ;
                vec3 x = 2.0 * fract(p * C.www) - 1.0;
                vec3 h = abs(x) - 0.5;
                vec3 ox = floor(x + 0.5);
                vec3 a0 = x - ox;
                m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
                vec3 g;
                g.x  = a0.x  * x0.x  + h.x  * x0.y;
                g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                return 130.0 * dot(m, g);
            }

            void main() {
                vec2 uv = vUv;
                float aspect = uResolution.x / uResolution.y;
                vec2 uvCorrected = vec2(uv.x * aspect, uv.y);

                // Mouse influence
                vec2 mouse = uMouse * vec2(aspect, 1.0);
                float distMouse = distance(uvCorrected, mouse);
                
                // Softer mouse interaction: larger radius (0.8), softer falloff
                float mouseInteraction = smoothstep(0.8, 0.0, distMouse) * 0.15;

                // Diagonal Line Definition
                float centerVal = 0.5 * aspect + 0.5;
                float distMetric = (uvCorrected.x + uvCorrected.y) - centerVal;

                // Noise Flow
                float time = uTime * 0.1;
                vec2 flowDir = vec2(1.0, -1.0); 
                
                // Add mouse interaction to the flow UV to "push" the fluid slightly
                vec2 pushedUV = uvCorrected - flowDir * mouseInteraction * 0.5;

                vec2 flowUV = pushedUV * 0.6 - flowDir * time;
                float noise1 = snoise(flowUV);
                float noise2 = snoise(pushedUV * 1.2 - flowDir * time * 1.2 + noise1 * 0.4);

                // Distort distance with noise + extra softness from mouse
                float distortedDist = abs(distMetric + (noise1 * 0.2) + (noise2 * 0.1) - mouseInteraction * 0.2);

                // ADJUST WIDTH HERE
                float stripWidth = 0.25; // Decreased from 0.8. Try 0.3 for thin, 0.9 for wide. 
                float stripFade = 0.4;
                
                float cloudMask = 1.0 - smoothstep(stripWidth, stripWidth + stripFade, distortedDist);

                // Color Mixing
                vec3 col = mix(uColor1, uColor2, noise1 * 0.5 + 0.5);
                col = mix(col, uColor3, noise2 * 0.5 + 0.5);
                col = mix(col, uColor4, smoothstep(0.3, 0.7, noise1));
                
                // Highlight where mouse is
                col += mouseInteraction * 0.2;
                col += 0.08; 

                // Grain
                float grain = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
                col += (grain - 0.5) * 0.07; 

                float alpha = cloudMask; 
                
                gl_FragColor = vec4(col, alpha);
            }
        `

		const material = new THREE.ShaderMaterial({
			uniforms,
			vertexShader,
			fragmentShader,
			transparent: true,
		})

		const geometry = new THREE.PlaneGeometry(2, 2)
		const plane = new THREE.Mesh(geometry, material)
		scene.add(plane)

		// Smooth Mouse State
		const mouseState = {
			current: new THREE.Vector2(0.5, 0.5),
			target: new THREE.Vector2(0.5, 0.5),
		}

		const animate = () => {
			uniforms.uTime.value += 0.01

			// Lerp mouse
			mouseState.current.lerp(mouseState.target, 0.05) // 0.05 factor for smooth lag
			uniforms.uMouse.value.copy(mouseState.current)

			renderer.render(scene, camera)
			requestAnimationFrame(animate)
		}
		animate()

		const handleResize = () => {
			if (!container) return
			const width = container.clientWidth
			const height = container.clientHeight
			renderer.setSize(width, height)
			uniforms.uResolution.value.set(width, height)
		}

		const handleMouseMove = (e: MouseEvent) => {
			if (!container) return
			const rect = container.getBoundingClientRect()
			const x = (e.clientX - rect.left) / rect.width
			const y = 1.0 - (e.clientY - rect.top) / rect.height
			mouseState.target.set(x, y) // Update target, not uniform directly
		}

		window.addEventListener('resize', handleResize)
		window.addEventListener('mousemove', handleMouseMove)

		return () => {
			window.removeEventListener('resize', handleResize)
			window.removeEventListener('mousemove', handleMouseMove)
			if (container.contains(renderer.domElement)) {
				container.removeChild(renderer.domElement)
			}
			renderer.dispose()
			geometry.dispose()
			material.dispose()
		}
	}, [])

	return (
		<div
			ref={containerRef}
			className='fixed inset-0 -z-10 w-full h-full pointer-events-none'
		/>
	)
}

export default FluidBackground
