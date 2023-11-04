import Award from "@/components/Elements/Awards/Award";
import Bars from "@/components/Elements/Bars/Bars";
import Figure from "@/components/Elements/Figure";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.AwardsSlice} AwardsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AwardsSlice>} AwardsProps
 * @param {AwardsProps}
 */
const Awards = ({ slice }) => {
  return (
    <section className="awards" data-scroll-section>
      <div className="awards_wrapper">
        <div className="awards_content">
          <div className="awards_left">
            <div className="awards_headline">
              <PrismicRichText field={slice?.primary.headline} />
            </div>
            <div className="awards_description">
              <PrismicRichText field={slice?.primary.description} />
            </div>
          </div>

          <div className="awards_grid">
            {slice?.items.map((award, index) => (
              <Award
                key={index}
                i={index}
                name={award.awards.data?.name}
                image={award.awards.data?.image}
                description={award.awards.data?.description}
              />
            ))}
          </div>
        </div>

        <Bars color={"white"} />
      </div>
    </section>
  );
};

export default Awards;
