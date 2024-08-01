import styles from "./cssModules/listMaker.module.css";

// eslint-disable-next-line react/prop-types
function ListMaker({ data }) {
  return (
    <div className={styles.listMakerCss} to={`/${data}`} key={`${data}`}>
      <p>
        <span
          style={{
            color: "#D1CFC5",
            position: "relative",
            top: "-2px",
            cursor: "default",
          }}
          className="fw-bolder fs-5"
        >{`>`}</span>
      </p>
      <p
        className={`${styles.listItemP} ${styles.underlineHover} leading-[20px]`}
      >{` ${data}`}</p>
    </div>
  );
}
export default ListMaker;
