import { useRef } from "react";
import useIsomorphicLayoutEffect from "../../Animations/UseIsomorphicLayoutEffect";
import gsap from "gsap";

export default function Bar({ backgroundColor, i }) {
  const barEl = useRef(null);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        barEl.current,
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          stagger: 0.04,
          scrollTrigger: {
            trigger: barEl.current,
            horizontal: window.innerWidth < 1024 ? false : true,
            start: "left 90%",
          },
          transformOrigin: "bottom bottom",
          ease: "back.out(1.25)",
          duration: 1,
          delay: i * 0.015,
        }
      );
    }, barEl); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);
  return (
    <span
      className="bar"
      style={{
        backgroundColor: backgroundColor === "red" ? "#ee7d3d" : "#ee7d3d",
      }}
      ref={barEl}
    ></span>
  );
}
