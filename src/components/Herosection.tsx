import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoCircleRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const videoCircle = videoCircleRef.current;
      const placeholder = placeholderRef.current;

      if (!container || !videoCircle || !placeholder) return;

      const q = gsap.utils.selector(container);

      // Ensure video is visible from the start and optimize for transforms
      gsap.set(videoCircle, {
        opacity: 1,
        scale: 0.95,
        willChange: 'transform,width,height,border-radius,left,top,opacity',
      });

      // Dynamically position video circle based on placeholder
      const setInitialPosition = () => {
        const placeholderRect = placeholder.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        const initialLeft = placeholderRect.left - containerRect.left;
        const initialTop = placeholderRect.top - containerRect.top;
        const initialSize = Math.min(placeholderRect.width, placeholderRect.height);

        gsap.set(videoCircle, {
          width: initialSize,
          height: initialSize,
          borderRadius: '50%',
          left: initialLeft,
          top: initialTop,
          x: 0,
          y: 0,
        });
      };

      // Recompute on refresh and after fonts load
      setInitialPosition();
      ScrollTrigger.addEventListener('refreshInit', setInitialPosition);

      if ((document as any).fonts && (document as any).fonts.ready) {
        (document as any).fonts.ready.then(() => ScrollTrigger.refresh());
      }

      ScrollTrigger.normalizeScroll({ allowNestedScroll: true });
      ScrollTrigger.config({ ignoreMobileResize: true });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=180%',
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
          onRefresh: setInitialPosition,
          snap: { snapTo: [0, 1], duration: 0.3, ease: 'power1.inOut', directional: true },
        },
      });

      // Expand video circle to full screen (main animation)
      tl.to(
        videoCircle,
        {
          width: '100vw',
          height: '100vh',
          borderRadius: 0,
          left: 0,
          top: 0,
          ease: 'sine.inOut',
          duration: 1,
        },
        0
      );

      // Fade out text smoothly (opacity only to avoid layout thrash)
      tl.to(
        q('h1, span:not(.video-placeholder)'),
        {
          opacity: 0,
          ease: 'sine.inOut',
          duration: 1.1,
        },
        0
      );

      // Subtle inner video zoom - slower and natural
      tl.to(
        q('video'),
        {
          scale: 1.05,
          ease: 'sine.inOut',
          duration: 1,
        },
        0
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full  overflow-hidden flex items-center justify-center">
      {/* Text content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none px-4">
        <div className="text-center max-w-full">
          <h1 className="text-[11vw] sm:text-[10vw] md:text-[9vw] lg:text-[8.5vw] xl:text-[8vw] 2xl:text-[7.5vw] font-bold text-black tracking-tight leading-none flex items-center justify-center flex-wrap gap-1 sm:gap-2 md:gap-3 lg:gap-4">
            EXCEPTI
            <span
              ref={placeholderRef}
              className="inline-block w-[11vw] h-[11vw] sm:w-[10vw] sm:h-[10vw] md:w-[9vw] md:h-[9vw] lg:w-[8.5vw] lg:h-[8.5vw] xl:w-[8vw] xl:h-[8vw] 2xl:w-[7.5vw] 2xl:h-[7.5vw] video-placeholder"
            ></span>
            NAL
          </h1>
          <h1 className="text-[11vw] sm:text-[10vw] md:text-[9vw] lg:text-[8.5vw] xl:text-[8vw] 2xl:text-[7.5vw] font-bold text-black tracking-tight leading-none mt-2 sm:mt-3 md:mt-4 lg:mt-5">
            DIGITAL
          </h1>
          <h1 className="text-[11vw] sm:text-[10vw] md:text-[9vw] lg:text-[8.5vw] xl:text-[8vw] 2xl:text-[7.5vw] font-bold text-black tracking-tight leading-none mt-2 sm:mt-3 md:mt-4 lg:mt-5">
            EXPERIENCES
          </h1>
        </div>
      </div>

      {/* Video circle */}
      <div
        ref={videoCircleRef}
        className="absolute overflow-hidden flex items-center justify-center"
        style={{ willChange: 'width, height, border-radius, left, top, opacity, transform' }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/src/assets/vid1.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;