import Bars from "@/components/Elements/Bars/Bars";
import Figure from "@/components/Elements/Figure";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import { useRef } from "react";
import { gsap } from "gsap";
import Link from "@/components/Elements/Links/Link";
import useIsomorphicLayoutEffect from "@/components/Animations/UseIsomorphicLayoutEffect";
/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */
const Hero = ({ slice }) => {
  const elementRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero_headline > path",
        {
          yPercent: -100,
        },
        {
          yPercent: 0,
        }
      );
    }, elementRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" data-scroll-section ref={elementRef}>
      <div className="hero_wrapper">
        <div className="hero_content">
          <div className="hero_top">
            <div className="hero_top_left">
              <div className="hero_role">
                <PrismicRichText field={slice?.primary.role} />
              </div>

              <div className="hero_top_left_bottom">
                <div className="hero_description">
                  <PrismicRichText field={slice?.primary.description} />
                </div>

                <Link
                  link={"mailto:nunopereirasousa00@gmail.com"}
                  text={slice?.primary.button_text}
                  className={"hero_button"}
                />
              </div>
            </div>

            <div className="hero_top_middle">
              <Figure
                figureClassName={"hero_figure"}
                imageClassName={"hero_image"}
                url={slice?.primary.image.url}
                alt={slice?.primary.image.alt}
              />
            </div>

            <div className="hero_top_right">
              <div className="hero_location">
                <PrismicRichText field={slice?.primary.location} />
              </div>
              <div className="hero_label">
                <PrismicRichText field={slice?.primary.label} />
              </div>
            </div>
          </div>

          <div className="hero_bottom">
            <div className="hero_headline">
              <PrismicRichText field={slice?.primary.headline} />
            </div>
          </div>
        </div>
        <Bars color={"red"} />
      </div>
    </section>
  );
};

export default Hero;
