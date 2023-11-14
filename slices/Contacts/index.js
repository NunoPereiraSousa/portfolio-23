import ContactsLink from "@/components/Elements/Links/ContactsLink";
import { PrismicLink, PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.ContactsSlice} ContactsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactsSlice>} ContactsProps
 * @param {ContactsProps}
 */
const Contacts = ({ slice }) => {
  console.log(slice?.items);
  return (
    <section className="contacts" data-scroll-section>
      <div className="contacts_wrapper">
        <div className="contacts_grid">
          <div className="contacts_description">
            <PrismicRichText field={slice?.primary.description} />
          </div>
          {slice?.items.map((contact, index) => (
            <ContactsLink
              key={index}
              isEmail={contact.contacts.uid === "email"}
              link={contact.contacts?.data?.link?.url}
              figureClassName={"contact_figure"}
              imageClassName={"contact_image"}
              url={contact.contacts?.data?.icon.url}
              alt={contact.contacts?.data?.icon.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
