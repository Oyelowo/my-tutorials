import React, { FC, useState, useEffect } from "react";

interface IPipeProps {
  height: number;
}

const Pipe: FC<IPipeProps> = ({ height }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setInterval(() => setShow(!show), 600);

  useEffect(() => {
    const timer = toggleShow();
    return () => clearInterval(timer);
  }, [show]);

  const shouldShow = show ? "visible": "hidden";

  return (
    <span
      style={{
        visibility: shouldShow,
        borderLeft: "2px solid #fff",
        height,
        display: "inline-block"
      }}
    />
  );
};

export default Pipe;
