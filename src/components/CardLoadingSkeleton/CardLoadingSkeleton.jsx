/*
  bgColor => background (static)
  fgColor => foreground (animated)
  typeOfAnimation => pulse or wave
  speedInS => animation duration
  bRadius => border radius
  height => height
  width => width
  theme => dark or light
  coverH => height of the image
  titleH => height of the title
  titleW => width of the title
  userImageH => height of the user image
  userImageW => width of the user image
  userRankH => height of the rank
  userRankW => width of the rank
  userNameH => height of the user name
  userNameW => width of the user name
  iconH => height of the icon
  iconW => width of the icon
  priceH => height of the price
  priceW => width of the price
  buttonH => height of the button
  buttonW => width of the button
*/
import DivLoadingSkeleton from "../DivLoadingSkeleton";
import styles from "./card.module.css";

const CardLoadingSkeleton = ({
  bgColor = "#777",
  fgColor = "#999",
  typeOfAnimation,
  speedInS,
  bRadius,
  height,
  width,
  theme,
  coverH,
  titleH,
  titleW,
  userImageH,
  userImageW,
  userRankH,
  userRankW,
  userNameH,
  userNameW,
  iconH,
  iconW,
  priceH,
  priceW,
  buttonH,
  buttonW,
}) => {
  const cardStyle = {
    width,
    height,
    background: theme === "dark" ? "#232330" : "#F9FBE7",
    borderRadius: bRadius,
  };

  return (
    <div className={styles.card} style={cardStyle}>
      <DivLoadingSkeleton
        width={width}
        height={coverH}
        bgColor={bgColor}
        fgColor={fgColor}
        bRadius={bRadius}
        typeOfAnimation={typeOfAnimation}
        speedInS={speedInS}
      />
      <div className={styles.space}>
        <div className={styles.title}>
          <DivLoadingSkeleton
            width={titleW}
            height={titleH}
            bgColor={bgColor}
            fgColor={fgColor}
            bRadius={bRadius}
            typeOfAnimation={typeOfAnimation}
            speedInS={speedInS}
          />
        </div>
      </div>
      <div className={`${styles.space} ${styles.user}`}>
        <DivLoadingSkeleton
          width={userImageH}
          height={userImageW}
          bgColor={bgColor}
          fgColor={fgColor}
          typeOfAnimation={typeOfAnimation}
          speedInS={speedInS}
          bRadius="50%"
        />
        <div className={styles.name}>
          {[...Array(2)].map((_, index) => (
            <div className={styles.line} key={index}>
              <DivLoadingSkeleton
                width={index === 0 ? userRankW : userNameW}
                height={index === 0 ? userRankH : userNameH}
                bgColor={bgColor}
                fgColor={fgColor}
                bRadius={bRadius}
                typeOfAnimation={typeOfAnimation}
                speedInS={speedInS}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.space} ${styles.price}`}>
        <div className={styles.priceText}>
          <div className="icon">
            <DivLoadingSkeleton
              width={iconW}
              height={iconH}
              bgColor={bgColor}
              bRadius="50%"
              fgColor={fgColor}
              typeOfAnimation={typeOfAnimation}
              speedInS={speedInS}
            />
          </div>
          <div className={styles.text}>
            <DivLoadingSkeleton
              width={priceW}
              height={priceH}
              bgColor={bgColor}
              fgColor={fgColor}
              bRadius={bRadius}
              typeOfAnimation={typeOfAnimation}
              speedInS={speedInS}
            />
          </div>
        </div>
        <DivLoadingSkeleton
          width={buttonW}
          height={buttonH}
          bgColor={bgColor}
          fgColor={fgColor}
          bRadius={bRadius}
          typeOfAnimation={typeOfAnimation}
          speedInS={speedInS}
        />
      </div>
    </div>
  );
};

export default CardLoadingSkeleton;
