import Figure from "@/components/Elements/Figure";
import Images from "@/components/Game/Images";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.AboutSlice} AboutSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutSlice>} AboutProps
 * @param {AboutProps}
 */
const About = ({ slice }) => {
  return (
    <section className="about" data-scroll-section>
      <div className="about_wrapper">
        <div className="about_content">
          <div className="about_left">
            <div className="about_headline">
              <PrismicRichText field={slice?.primary.headline} />
            </div>
            <div className="about_description">
              <PrismicRichText field={slice?.primary.description} />
            </div>
          </div>

          <div className="about_grid">
            <div className="about_grid_column">
              <div className="about_headline_2">
                <PrismicRichText field={slice?.primary.headline_2} />
              </div>

              <div className="about_grid_figure_text">
                <Figure
                  figureClassName={"about_figure"}
                  imageClassName={"about_image"}
                  url={slice?.primary.image.url}
                  alt={slice?.primary.image.alt}
                />

                <div className="about_description_2">
                  <PrismicRichText field={slice?.primary.description_2} />
                </div>
              </div>
            </div>

            <div className="about_grid_column">
              <div className="about_descriptions">
                <div className="about_description_3">
                  <PrismicRichText field={slice?.primary.description_3} />
                </div>
                <div className="about_description_4">
                  <PrismicRichText field={slice?.primary.description_4} />
                </div>
                <div className="about_description_5">
                  <PrismicRichText field={slice?.primary.description_5} />
                </div>
              </div>
              <div className="about_headline_3">
                <PrismicRichText field={slice?.primary.headline_3} />
              </div>
            </div>
          </div>

          <div className="about_background">
            <Figure
              figureClassName={"about_background_figure"}
              imageClassName={"about_background_image"}
              url={slice?.primary.image.url}
              alt={slice?.primary.image.alt}
            />
          </div>
        </div>
        <Images />
      </div>
    </section>
  );
};

export default About;
