import { useState, useEffect } from "react";
import PowerOff from "../subcomponents/PowerOff";

const OnOff = () => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    fetch(
      "https://192.168.8.100/api/Yz2vBQatFKW7rIu7wA30jUFIXlgTef0fVIi3fwD7/groups/21/action",
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
        >
        <PowerOff />
      </div>
    </>
  );
};

export default OnOff;
