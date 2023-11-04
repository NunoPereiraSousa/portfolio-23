import Figure from "../Figure";
import { PrismicRichText } from "@prismicio/react";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useIsomorphicLayoutEffect from "../../Animations/UseIsomorphicLayoutEffect";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Award({ image, name, description, i }) {
  const element = useRef(null);
  const border = useRef(null);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        border.current,
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          stagger: 0.04,
          scrollTrigger: {
            trigger: element.current,
            horizontal: window.innerWidth < 1024 ? false : true,
            start: "left 90%",
          },
          transformOrigin: "bottom bottom",
          ease: Power2.easeOut,
          duration: 1,
          delay: i * 0.015,
        }
      );
    }, element); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);
  return (
    <div className="award" ref={element}>
      <span className="award_border" ref={border}></span>

      <div className="award_info">
        <Figure
          figureClassName={"award_figure"}
          imageClassName={"award_image"}
          url={image.url}
          alt={image.alt}
          speed={0.5}
        />

        <div className="award_descriptions">
          <div className="award_name">
            <PrismicRichText field={name} />
          </div>
          <div className="award_description">
            <PrismicRichText field={description} />
          </div>
        </div>
      </div>
    </div>
  );
}
