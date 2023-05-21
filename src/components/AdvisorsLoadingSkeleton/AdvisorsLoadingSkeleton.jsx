import styles from "./advisors.module.css";
import DivLoadingSkeleton from "../DivLoadingSkeleton";

const AdvisorsLoadingSkeleton = ({
  height,
  width,
  imageH,
  imageW,
  nameH,
  nameW,
  positionH,
  positionW,
  descriptionH,
  descriptionW,
  bgColor = "#777",
  fgColor = "#999",
  speedInS,
  typeOfAnimation,
  bRadius,
}) => {
  const cardStyle = {
    width,
    height,
  };

  const renderDivLoadingSkeleton = (width, height) => {
    return (
      <DivLoadingSkeleton
        width={width}
        height={height}
        bgColor={bgColor}
        fgColor={fgColor}
        speedInS={speedInS}
        typeOfAnimation={typeOfAnimation}
        bRadius={bRadius}
      />
    );
  };

  const renderDescriptionLines = () => {
    return [...Array(3)].map((_, index) => (
      <div className={`${styles.line} ${styles.mt75}`} key={index}>
        {renderDivLoadingSkeleton(descriptionW, descriptionH)}
      </div>
    ));
  };

  return (
    <div className={styles.advisor} style={cardStyle}>
      <div className={`${styles.image} ${styles.mt75}`}>
        {renderDivLoadingSkeleton(imageW, imageH)}
      </div>
      <div className={`${styles.name} ${styles.mt75}`}>
        {renderDivLoadingSkeleton(nameW, nameH)}
      </div>
      <div className={`${styles.position} ${styles.mt75}`}>
        {renderDivLoadingSkeleton(positionW, positionH)}
      </div>
      <div className={`${styles.description} ${styles.mt75}`}>
        {renderDescriptionLines()}
      </div>
    </div>
  );
};

export default AdvisorsLoadingSkeleton;
