import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerProxy = () => {
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (scroll) {
      const element = scroll?.el;

      scroll.on("scroll", () => {
        ScrollTrigger.update();
        ScrollTrigger.refresh();
      });
      ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
        },
        scrollLeft(value) {
          return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.x;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: element.style.transform ? "transform" : "fixed",
      });

      // window.addEventListener("resize", () => {
      //   scroll?.update();
      //   ScrollTrigger.refresh();
      // });
    }

    return () => {
      ScrollTrigger.addEventListener("refresh", () => scroll?.update());
      // ScrollTrigger.defaults({ scroller: ".page" });
      ScrollTrigger.refresh();
    };
  }, [scroll]);

  return null;
};

export default ScrollTriggerProxy;
