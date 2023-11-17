import { PrismicLink } from "@prismicio/react";
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
      href={isEmail === true ? "mailto:nunopereirasousa00@gmail.com" : link}
      target={isEmail === true ? "_self" : "_blank"}
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
