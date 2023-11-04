"use client";

import clsx from "clsx";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";
import { SplitText } from "gsap/dist/SplitText";
import { useRef, useContext } from "react";
import useIsomorphicLayoutEffect from "../Animations/UseIsomorphicLayoutEffect";
import AnimationsContext from "@/context/AnimationsContext";

export default function Heading({ as: Comp = "h1", size = "xxl", children }) {
  const { completed } = useContext(AnimationsContext);
  gsap.registerPlugin(ScrollTrigger, SplitText, CSSRulePlugin);

  const element = useRef(null);
  let parentSplit;
  let childSplit;

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (completed === true) {
        if (size !== "xl" && size !== "xxl" && size !== "lg") {
          parentSplit = new SplitText(".heading", {
            type: "lines",
            linesClass: "line-parent",
          });

          childSplit = new SplitText(".heading", {
            type: "lines",
            linesClass: "line-child",
          });
        } else {
          parentSplit = new SplitText(".heading", {
            type: "lines",
            linesClass: "line-parent",
          });
          childSplit = new SplitText(".heading", {
            type: "chars",
            charsClass: "line-child",
          });
        }

        gsap.set(
          size !== "xl" && size !== "xxl" && size !== "lg"
            ? parentSplit.lines
            : childSplit.chars,
          {
            yPercent: -100,
          }
        );

        gsap.to(
          size !== "xl" && size !== "xxl" && size !== "lg"
            ? parentSplit.lines
            : childSplit.chars,
          {
            yPercent: 0,
            stagger: 0.025,
            ease: "back.out(1.25)",
            scrollTrigger: {
              trigger: element.current,
              start: "left 90%",
              horizontal: window.innerWidth < 1024 ? false : true,
            },
            duration: 1,
            delay: 0.5,
          }
        );

        return () => {
          childSplit.revert();
          parentSplit.revert();
        }; // context cleanup
      }
    }, element); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, [completed]);

  return (
    <div ref={element}>
      <Comp
        className={clsx(
          "heading",
          size === "xxl" && "xxl",
          size === "xl" && "xl",
          size === "lg" && "lg",
          size === "md" && "md"
        )}
      >
        {children}
      </Comp>
    </div>
  );
}
