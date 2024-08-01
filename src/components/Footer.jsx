import FooterLogos from "./FooterLogos";
import FooterLinks from "./FooterLinks";

function Footer() {
  return (
    <div className="bg-gradient-to-br from-black   to-red-500 p-5 min-[420px]:p-10 flex flex-col">
      <FooterLogos />
      <FooterLinks />
      <p
        className="ml-[2.5%] min-[350px]:ml-[5%] md:ml-[10%]"
        style={{
          color: "white",
          fontSize: "16px",
          marginTop: "10px",
        }}
      >
        <span style={{ color: "#ffbd00", fontSize: "20px" }}>©</span>Elicit
        2024. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
