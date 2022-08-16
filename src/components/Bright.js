import { useState, useEffect } from "react";
// import _ from "lodash";

const Bright = () => {
  const [bright, setBright] = useState(50);

  useEffect(() => {
    fetch(
      "https://192.168.8.100/api/Yz2vBQatFKW7rIu7wA30jUFIXlgTef0fVIi3fwD7/lights/50/state",
      {
        method: "PUT",
        body: JSON.stringify({
          bri: bright,
        }),
      }
    );
  }, [bright]);

  // const changeBri = (value) => {
  //   setBrightness(value);
  //   console.log(value);
  // };

  // const throttle = useMemo(() => _.throttle(changeBri, 100), []);

  return (
    <>
      <input
        type="range"
        min="0"
        max="255"
        step="5"
        defaultValue="50"
        onChange={(event) => {
          setBright(parseInt(event.target.value));
        }}
        style={{
          width: "4rem",
          height: "4rem",
          borderRadius: "50%",
          border: "rgb(228, 192, 39",
        }}
      ></input>
    </>
  );
};

export default Bright;
