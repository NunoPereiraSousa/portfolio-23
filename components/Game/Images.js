import { COUNTRIES } from "@/utils/flags";

import { useRef, useState, useContext } from "react";
import gsap, {Power2} from "gsap";
import useIsomorphicLayoutEffect from "../Animations/UseIsomorphicLayoutEffect";
import AnimationsContext from "@/context/AnimationsContext";

export default function Images() {
  const { completed } = useContext(AnimationsContext);

  const element = useRef(null);
  const [elements, setElements] = useState([]);
  const [flags, setFlags] = useState([]);

  let clickAmount = 0;

  const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const setImagesPosition = (innerWidth, innerHeight) => {
    for (let i = 0; i < flags.length; i++) {
      let flag = flags[i];

      let randomTop = getRandomNumber(
        0,
        innerHeight < 100 ? innerHeight - 10 : innerHeight - 50
      );
      let randomLeft = getRandomNumber(0, innerWidth);

      flag.style.top = randomTop + "px";
      flag.style.left = randomLeft + "px";
    }
  };

  const onClickHandler = (index) => {
    clickAmount++;

    let tl = gsap.timeline();
    tl.to(elements[index], {
      ease: "expo.out",
      filter: "grayscale(0)",
      transform: "scale(2)",
      duration: 1,
    });
    tl.to(
      elements[index],
      {
        ease: "expo.out",
        transform: "scale(1)",
        duration: 1,
      },
      "-=0.2"
    );
    tl.to(
      flags[index],
      {
        ease: "expo.out",
        autoAlpha: 0,
        duration: 1,
      },
      "-=3"
    );

    if (clickAmount === COUNTRIES.length) {
      document.querySelector(".images_box_headline").innerHTML =
        "Great job! My favorites  are: Finland, Poland, Norway, and the USA!";

      gsap.to(".locked_flag", {
        scale: 1.25,
        yoyo: true,
        repeat: 3,
        stagger: 0.1,
        duration: 0.15,
        ease: Power2.easeOut,
        delay: 1.25,
      });
    }
  };

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let lockedBalls = document.querySelectorAll(".locked_flag");
      setElements(lockedBalls);

      let f = document.querySelectorAll(".flags");
      setFlags(f);

      let page = document.querySelector(".hero");
      let pageWidth = page.getBoundingClientRect().width;
      let pageHeight = page.getBoundingClientRect().height;
      setImagesPosition(pageWidth, pageHeight);
    }, element);

    return () => ctx.revert();
  }, [completed]);

  return (
    <>
      {COUNTRIES.map((img, index) => (
        <img
          key={index}
          src={img}
          className="flags"
          onClick={() => onClickHandler(index)}
          ref={element}
        />
      ))}
    </>
  );
}
