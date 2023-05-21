import styles from "./teamMember.module.css";
import DivLoadingSkeleton from "../DivLoadingSkeleton";

const TeamMemberLoadingSkeleton = ({
  height,
  width,
  bgColor = "#777",
  fgColor = "#999",
  speedInS,
  typeOfAnimation,
  bRadius,
  theme,
  imageH,
  imageW,
  nameH,
  nameW,
  positionH,
  positionW,
  descriptionH,
  descriptionW,
  iconH,
  iconW,
}) => {
  const cardStyle = {
    width,
    height,
    background: theme === "dark" ? "#232330" : "#F9FBE7",
    borderRadius: bRadius,
  };

  return (
    <div className={styles.memberCard} style={cardStyle}>
      <div className={styles.memberImage}>
        <DivLoadingSkeleton
          width={imageW}
          height={imageH}
          bgColor={bgColor}
          fgColor={fgColor}
          bRadius="50%"
          typeOfAnimation={typeOfAnimation}
          speedInS={speedInS}
        />
      </div>
      <div className={styles.memberInfo}>
        <div className={`${styles.memberName} ${styles.memberInfoM}`}>
          <DivLoadingSkeleton
            width={nameW}
            height={nameH}
            bgColor={bgColor}
            fgColor={fgColor}
            bRadius={bRadius}
            typeOfAnimation={typeOfAnimation}
            speedInS={speedInS}
          />
        </div>
        <div className={`${styles.memberPosition} ${styles.memberInfoM}`}>
          <DivLoadingSkeleton
            width={positionW}
            height={positionH}
            bgColor={bgColor}
            fgColor={fgColor}
            bRadius={bRadius}
            typeOfAnimation={typeOfAnimation}
            speedInS={speedInS}
          />
        </div>
        <div className={`${styles.memberDescription} ${styles.memberInfoM}`}>
          {[...Array(2)].map((_, index) => (
            <div className={styles.line} key={index}>
              <DivLoadingSkeleton
                width={descriptionW}
                height={descriptionH}
                bgColor={bgColor}
                fgColor={fgColor}
                bRadius={bRadius}
                typeOfAnimation={typeOfAnimation}
                speedInS={speedInS}
              />
            </div>
          ))}
        </div>
        <div className={`${styles.memberAccounts} ${styles.memberInfoM}`}>
          {[...Array(3)].map((_, index) => (
            <div className={styles.icon} key={index}>
              <DivLoadingSkeleton
                width={iconW}
                height={iconH}
                bgColor={bgColor}
                fgColor={fgColor}
                bRadius="50%"
                typeOfAnimation={typeOfAnimation}
                speedInS={speedInS}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberLoadingSkeleton;
