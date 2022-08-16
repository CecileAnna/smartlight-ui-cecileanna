import { useState, useEffect } from "react";

const OnOff = () => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    fetch(
      "https://192.168.8.100/api/Yz2vBQatFKW7rIu7wA30jUFIXlgTef0fVIi3fwD7/lights/50/state",
      {
        method: "PUT",
        body: JSON.stringify({
          on: toggle,
        }),
      },
      [toggle]
    );
  });

  return (
    <>
      <div
        onClick={() => {
          setToggle(!toggle);
        }}
        style={{
          width: "4rem",
          height: "4rem",
          borderRadius: "50%",
          backgroundColor: "rgb(228, 192, 39)",
        }}
      ></div>
    </>
  );
};

export default OnOff;
