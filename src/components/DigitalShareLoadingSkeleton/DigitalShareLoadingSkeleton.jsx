import React from "react";
import styles from "./digitalShare.module.css";
import DivLoadingSkeleton from "../DivLoadingSkeleton";

const DigitalShareLoadingSkeleton = ({
  width,
  height,
  bgColor,
  fgColor,
  bRadius,
  typeOfAnimation,
  speedInS,
  theme,
  lineH,
  lineW,
  imageH,
  imageW,
}) => {
  const cardStyle = {
    width,
    height,
    background: theme === "dark" ? "#232330" : "#F9FBE7",
    borderRadius: bRadius,
  };

  const renderLoadingSkeleton = (width, height) => {
    return (
      <DivLoadingSkeleton
        width={width}
        height={height}
        bgColor={bgColor}
        fgColor={fgColor}
        bRadius={bRadius}
        typeOfAnimation={typeOfAnimation}
        speedInS={speedInS}
      />
    );
  };

  return (
    <div className={styles.card} style={cardStyle}>
      <div className={styles.title}>
        <div className={styles.text}>
          <div className={styles.line}>{renderLoadingSkeleton(lineW, lineH)}</div>
          <div className={styles.line}>{renderLoadingSkeleton(lineW, lineH)}</div>
        </div>
        <div className={styles.text}>
          <div className={styles.line}>{renderLoadingSkeleton(lineW, lineH)}</div>
          <div className={styles.line}>{renderLoadingSkeleton(lineW, lineH)}</div>
        </div>
      </div>
      <div className={styles.image}>
        {renderLoadingSkeleton(imageW, imageH)}
      </div>
    </div>
  );
};

export default DigitalShareLoadingSkeleton;
