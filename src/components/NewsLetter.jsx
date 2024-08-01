import styles from "./cssModules/newsLetter.module.css";
import { useState } from "react";

function NewsLetter() {
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setMessage(" 🥳Congratulations! You have Registered");
    setShow(true);
    setTimeout(() => {
      setShow(false);
      setMessage("");
    }, 4000);
  };

  return (
    <>
      <div className={styles.newsLetterCss}>
        <h1 className={styles.newsLetterCssH1}>News Letter</h1>
        <div>
          <p>Get recent news and updates regarding Events</p>
          <input
            className={styles.newsLetterCssInput}
            placeholder="Email Address"
            type="text"
          />
          <div className={styles.outerButton}>
            <button className={styles.innerButton} onClick={handleClick}>
              Subscribe
            </button>
          </div>
        </div>
        {/* popUpMsg */}
        {show && (
          <div className="fixed bottom-4 right-4 p-3 bg-[#C90A37] text-white rounded-lg shadow-lg transition-opacity duration-500 opacity-100 font-medium">
            {message}
          </div>
        )}
      </div>
    </>
  );
}
export default NewsLetter;
