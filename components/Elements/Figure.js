import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useIsomorphicLayoutEffect from "../Animations/UseIsomorphicLayoutEffect";
import { useRef, useContext } from "react";
import AnimationsContext from "@/context/AnimationsContext";

export default function Figure({
  figureClassName,
  imageClassName,
  url,
  alt,
  revealFrom,
  speed = 1,
}) {
  const element = useRef(null);
  const reveal = useRef(null);
  const figure = useRef(null);

  const { completed } = useContext(AnimationsContext);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (completed) {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: element.current,
            horizontal: window.innerWidth < 1024 ? false : true,
            start: "left 80%",
          },
          delay: 0.5,
        });

        tl.set(reveal.current, { autoAlpha: 1 });
        if (revealFrom === "top") {
          tl.from(reveal.current, {
            yPercent: -100,
            ease: Power2.out,
            duration: speed,
          });
          tl.from(
            figure.current,
            {
              yPercent: 100,
              ease: Power2.out,
              duration: speed,
            },
            0
          );
        } else {
          tl.from(reveal.current, {
            xPercent: -100,
            ease: Power2.out,
            duration: speed,
          });
          tl.from(
            figure.current,
            {
              xPercent: 100,
              ease: Power2.out,
              duration: speed,
            },
            0
          );
        }
      }
    }, element);

    return () => ctx.revert();
  }, [completed]);

  return (
    <div className="container" ref={element}>
      <div className="reveal" ref={reveal}>
        <figure className={figureClassName} ref={figure}>
          <img src={url} alt={alt} className={imageClassName} />
        </figure>
      </div>
    </div>
  );
}
