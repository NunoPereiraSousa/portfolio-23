import { COUNTRIES } from "@/utils/flags";
import gsap from "gsap";

export default function ImagesBox() {
  return (
    <div className="images_box">
      <p className="images_box_headline">
        Collect all the 12 countries I&apos;ve visited this year in the
        &apos;ABOUT ME&apos; section!
      </p>
      <div className="images_box_grid">
        {COUNTRIES.map((img, index) => (
          <img key={index} src={img} alt="" className="locked_flag" />
        ))}
      </div>
    </div>
  );
}
