import styles from "./styles.module.css";

const DivLoadingSkeleton = ({
  width,
  height,
  bgColor,
  fgColor,
  speedInS,
  typeOfAnimation,
  bRadius,
  style
}) => {
  const parentStyle = {
    width,
    height,
    background: bgColor,
    borderRadius: bRadius,
    ...style
  };

  const getAnimationStyle = () => {
    if (typeOfAnimation === "wave") {
      if (bRadius === "50%") {
        return {
          animation: `${styles.waveAnimationCircle} ${speedInS}s infinite`,
          width: `${width / 4}px`,
          background: fgColor,
          background: `linear-gradient(90deg, transparent, ${fgColor}, transparent)`,
        };
      }
      return {
        animation: `${styles.waveAnimation} ${speedInS}s infinite`,
        width: `${width / 4}px`,
        // background: fgColor,
        background: `linear-gradient(90deg, transparent, ${fgColor}, transparent)`,
        // borderRadius: bRadius,
      };
    } else if (typeOfAnimation === "pulse") {
      return {
        animation: `pulseAnimation ${speedInS}s infinite`,
        width: "100%",
        background: fgColor,
        borderRadius: bRadius,
      };
    }
  };

  const childStyle = {
    ...getAnimationStyle(),
  };

  return (
    <div className={styles.skeletonParent} style={parentStyle}>
      <div
        className={styles.skeletonChild}
        style={childStyle}></div>
    </div>
  );
};

export default DivLoadingSkeleton;
