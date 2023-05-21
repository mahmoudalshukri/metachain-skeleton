import styles from "./yourTELV.module.css";
import DivLoadingSkeleton from "../DivLoadingSkeleton";

const YourTELVLoadingSkeleton = ({
  width,
  height,
  bgColor,
  fgColor,
  typeOfAnimation,
  speedInS,
  bRadius,
  theme,
  lineW,
  lineH,
  btnW,
  btnH,
}) => {
  const cardStyle = {
    width,
    height,
    background: theme === "dark" ? "#232330" : "#F9FBE7",
    borderRadius: bRadius,
  };
  return (
    <div className={styles.card} style={cardStyle}>
      
    </div>
  );
};

export default YourTELVLoadingSkeleton;
