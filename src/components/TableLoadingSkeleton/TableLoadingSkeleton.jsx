import DivLoadingSkeleton from "../DivLoadingSkeleton";

const TableLoadingSkeleton = ({
  width,
  height,
  rowsNumber,
  bgColor = "#777",
  fgColor = "#999",
  speedInS,
  typeOfAnimation,
  bRadius,
  bRadiusTop,
  bRadiusBottom,
}) => {
  const renderTable = () => {
    const rows = [];

    for (let i = 0; i < rowsNumber; i++) {
      const isEvenRow = i % 2 === 0;
      const rowBgColor = isEvenRow ? bgColor : fgColor;
      const rowFgColor = isEvenRow ? fgColor : bgColor;

      const rowStyle =
        i === 0 && bRadiusTop
          ? { borderTopLeftRadius: bRadius, borderTopRightRadius: bRadius }
          : i === rowsNumber - 1 && bRadiusBottom
          ? {
              borderBottomLeftRadius: bRadius,
              borderBottomRightRadius: bRadius,
            }
          : {};

      rows.push(
        <DivLoadingSkeleton
          key={i}
          width="100%"
          height={height}
          bgColor={rowBgColor}
          fgColor={rowFgColor}
          speedInS={speedInS}
          typeOfAnimation={typeOfAnimation}
          style={rowStyle}
        />,
      );
    }

    return rows;
  };

  const cardStyle = {
    width,
  };

  return (
    <div className="table" style={cardStyle}>
      {renderTable()}
    </div>
  );
};

export default TableLoadingSkeleton;
