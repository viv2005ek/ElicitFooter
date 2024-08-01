import styles from "./cssModules/FooterAbout.module.css";
function FooterAbout() {
  let text = `Elicit, the annual fest of ACM, run by students, is an enthralling
        kaleidoscope of internally invigorating events. It has something in
        store for all and brings together renowned experts of various spheres of
        academic and the corporate industry`;

  return (
    <div
      className={`${styles.glassEffect} min-[350px]:w-[90%] w-[100%]  md:w-[600px]`}
    >
      <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "white" }}>
        Elicit 20<span style={{ color: "#ffbd00" }}>24</span>
      </h1>
      <p
        style={{ color: "white" }}
        className="min-[400px]:text-[20px] sm:text-[24px] text-[16px]"
      >
        {text}
      </p>
    </div>
  );
}
export default FooterAbout;
