import { useState, useEffect } from "react";
import ColorConverter from "cie-rgb-color-converter";

const Color = (props) => {
  let xy = ColorConverter.rgbToXy(props.r, props.g, props.b);
  const [color, setColor] = useState([]);

  useEffect(() => {
    fetch(
      "https://192.168.8.100/api/Yz2vBQatFKW7rIu7wA30jUFIXlgTef0fVIi3fwD7/groups/21/action",
      {
        method: "PUT",
        body: JSON.stringify({
          xy: [color.x, color.y],
        }),
      }
    );
  }, [color]);

  return (
    <>
      <div
        onMouseOver={() => {
          setColor(xy);
        }}
        style={{
          width: "2rem",
          height: "2rem",
          borderRadius: "50%",
          backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        }}
      ></div>
    </>
  );
};

export default Color;
