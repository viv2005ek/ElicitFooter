/* eslint-disable no-unused-vars */
import NewsLetter from "./NewsLetter";
import EventsFooterLink from "./EventsFooterLink";
import LinkLeftFooter from "./LinksLeftFooter";
import AlsoVisitFooter from "./AlsoVisitFooter";
import FooterAbout from "./FooterAbout";

function FooterLinks() {
  return (
    <div className="flex flex-col border-b-4 pb-8  w-[100%] min-[350px]:w-[90%] md:w-[80%] ml-[2.5%]  min-[350px]:ml-[5%] md:ml-[10%] gap-y-20">
      <div className="flex flex-col lg:flex-row lg:justify-between	gap-x-10 gap-y-10 mt-10  ">
        <FooterAbout />
        <div className="flex justify-between gap-20">
          <LinkLeftFooter />
          <AlsoVisitFooter />
          {/* <EventsFooterLink /> */}
        </div>
      </div>
      <div className="self-end	">
        <NewsLetter />
      </div>
    </div>
  );
}
export default FooterLinks;
