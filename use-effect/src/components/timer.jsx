import { useEffect, useState } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState(50);
  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div>
      <div>Timer :- {timer}</div>
    </div>
  );
  return;
};
