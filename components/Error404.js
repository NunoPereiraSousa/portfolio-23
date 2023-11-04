import { PrismicLink, PrismicRichText } from "@prismicio/react";
import Link from "./Elements/Links/Link";

export default function Error404({
  descriptions,
  labels,
  buttonLabel,
  buttonLink,
}) {
  return (
    <section className="error" data-scroll-section>
      <div className="error_wrapper">
        <div className="error_descriptions">
          {descriptions?.map((d, index) => (
            <div className="error_description" key={index}>
              <PrismicRichText field={d.description} />
            </div>
          ))}
        </div>

        <div className="error_bottom">
          <div className="error_label">
            <PrismicRichText field={labels[0].label} />
          </div>

          <Link
            className={"error_button"}
            link={buttonLink.url}
            text={buttonLabel}
          />

          <div className="error_label">
            <PrismicRichText field={labels[1].label} />
          </div>
        </div>
      </div>
    </section>
  );
}
