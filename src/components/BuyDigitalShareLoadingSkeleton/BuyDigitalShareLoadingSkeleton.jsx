import styles from "./buyDigital.module.css";
import DivLoadingSkeleton from "../DivLoadingSkeleton";

const BuyDigitalShareLoadingSkeleton = ({
  width,
  height,
  fgColor,
  bgColor,
  bRadius,
  typeOfAnimation,
  speedInS,
  theme,
  titleW,
  titleH,
  lineW,
  lineH,
  bnbAdressW,
  bnbAdressH,
  maxBtnW,
  maxBtnH,
  submitW,
  submitH,
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
        bRadius={bRadius}
        fgColor={fgColor}
        bgColor={bgColor}
        typeOfAnimation={typeOfAnimation}
        speedInS={speedInS}
      />
    );
  };

  return (
    <div className={styles.card} style={cardStyle}>
      <div className={styles.title}>
        {renderLoadingSkeleton(titleW, titleH)}
      </div>
      <div className={styles.bnb}>
        <div className={styles.number}>
          <div className={styles.line}>
            {renderLoadingSkeleton(lineW, lineH)}
          </div>
          <div className={styles.line}>
            {renderLoadingSkeleton(lineW, lineH)}
          </div>
        </div>
        <div className={styles.address}>
          {renderLoadingSkeleton(bnbAdressW, bnbAdressH)}
        </div>
      </div>
      <div className={styles.amountToBuy}>
        <div className={styles.number}>
          <div className={styles.line}>
            {renderLoadingSkeleton(lineW, lineH)}
          </div>
          <div className={styles.line}>
            {renderLoadingSkeleton(lineW, lineH)}
          </div>
        </div>
        <div className={styles.address}>
          {renderLoadingSkeleton(maxBtnW, maxBtnH)}
        </div>
      </div>
      <div className={styles.data}>
        <div className={styles.price}>
          <div className={styles.line}>
            {renderLoadingSkeleton(lineW, lineH)}
          </div>
          <div className={styles.line}>
            {renderLoadingSkeleton(lineW, lineH)}
          </div>
        </div>
        <div className={styles.amount}>
          <div className={styles.line}>
            {renderLoadingSkeleton(lineW, lineH)}
          </div>
          <div className={styles.line}>
            {renderLoadingSkeleton(lineW, lineH)}
          </div>
        </div>
      </div>
      <div className={styles.submit}>
        {renderLoadingSkeleton(submitW, submitH)}
      </div>
    </div>
  );
};

export default BuyDigitalShareLoadingSkeleton;
