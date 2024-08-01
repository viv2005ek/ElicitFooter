import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import styles from "./cssModules/Footer.module.css";
import openSocialMedia from "./socialMediaLink";

function FooterLogos() {
  return (
    <div
      className={`${styles.footerLogos} flex justify-evenly flex-col	lg:flex-row gap-y-5 md:gap-x-20 lg:gap-x-20`}
    >
      <div className="flex order-1 gap-5 min-[420px]:gap-10 lg:gap-20 items-center justify-around ">
        <div className={`${styles.acmChapterLogo} order-1   `}>
          <img
            src="./acmStudentChapter.png"
            alt="ACM Logo"
            style={{ width: "150px" }}
          />
        </div>
        <div className={`${styles.acmChapterLogo} order-2 `}>
          <img
            src="./acmSigaiChapter.png"
            alt="ACM Logo"
            style={{ width: "150px" }}
          />
        </div>
      </div>

      <div className={`${styles.acmLogo} order-3 self-center  `}>
        <img src="./elicit_logo.png" alt="ACM Logo" />
      </div>
      <div className="flex order-3 gap-10 min-[420px]:gap-20 items-center  justify-around">
        <div className={`${styles.acmChapterLogo} order-4   `}>
          <img
            src="./acmSigbedChapter.png"
            alt="ACM Logo"
            style={{ width: "150px" }}
          />
        </div>

        <div className=" flex flex-col gap-y-3 min-[280px]:gap-y-5 min-[320px]:gap-y-7 min-[370px]:gap-y-10 order-5">
          <div className="order-2 md:order-1 flex justify-evenly items-center gap-x-3 min-[280px]:gap-5 min-[320px]:gap-x-7 min-[370px]:gap-x-10">
            <FaFacebookSquare
              className={`${styles.socialIcon} order-1 hover:text-blue-400 transition-colors duration-300`}
              onClick={() => openSocialMedia("facebook")}
            />

            <FaInstagram
              className={`${styles.socialIcon} order-2 hover:text-pink-600 transition-colors duration-300`}
              onClick={() => openSocialMedia("instagram")}
            />
          </div>
          <div className="order-3 flex justify-evenly items-center gap-x-3 min-[280px]:gap-x-5 min-[320px]:gap-x-7 min-[370px]:gap-x-10">
            <FaLinkedin
              className={`${styles.socialIcon} order-1  hover:text-blue-600 transition-colors duration-300`}
              onClick={() => openSocialMedia("linkedin")}
            />
            <FaYoutube
              className={`${styles.socialIcon} order-2 hover:text-red-700 transition-colors duration-300`}
              onClick={() => openSocialMedia("youtube")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterLogos;
