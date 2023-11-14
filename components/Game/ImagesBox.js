import { COUNTRIES } from "@/utils/flags";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useIsomorphicLayoutEffect from "../Animations/UseIsomorphicLayoutEffect";
import { useRef, useContext } from "react";
import AnimationsContext from "@/context/AnimationsContext";

export default function ImagesBox() {
  const element = useRef(null);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let contacts = document.querySelector(".contacts");
      let about = document.querySelector(".about");
      let box = document.querySelector(".images_box");

      gsap.to(box, {
        autoAlpha: 0,
        ease: Power2.out,
        duration: 0.5,
      });

      gsap.to(box, {
        scrollTrigger: {
          trigger: about,
          horizontal: window.innerWidth < 1024 ? false : true,
          start: "left 80%",
          toggleActions: "restart none none reverse",
        },
        autoAlpha: 1,
        ease: Power2.out,
        duration: 0.5,
      });

      gsap.to(box, {
        scrollTrigger: {
          trigger: contacts,
          horizontal: window.innerWidth < 1024 ? false : true,
          start: "left 80%",
          toggleActions: "restart none none reverse",
        },
        autoAlpha: 0,
        ease: Power2.out,
        duration: 0.5,
      });
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <div className="images_box" ref={element}>
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
