import { PrismicLink, PrismicRichText } from "@prismicio/react";
import Figure from "@/components/Elements/Figure";

export default function ContactsLink({
  isEmail,
  link,
  figureClassName,
  imageClassName,
  url,
  alt,
}) {
  return (
    <PrismicLink
      className="contact"
      href={isEmail === "email" ? "mailto:nunopereirasousa00@gmail.com" : link}
      target={isEmail === "email" ? "_self" : "_blank"}
    >
      <Figure
        figureClassName={figureClassName}
        imageClassName={imageClassName}
        url={url}
        alt={alt}
      />
    </PrismicLink>
  );
}
