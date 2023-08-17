import { useState, useEffect } from "react";

export default function Data() {
  const [realTime, setRealTime] = useState("");
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const D = new Date();
  const getDay = weekday[D.getDay()];
  const getDate = D.getDate();
  const hour = D.getHours().toString().padStart(2, "0");
  const min = D.getMinutes().toString().padStart(2, "0");
  let fullHour = `${hour}:${min}`;
  const fullDateDay = `${getDay} ${getDate}`;


   useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hour = date.getHours().toString().padStart(2, "0");
      const min = date.getMinutes().toString().padStart(2, "0");
      let timeNow = `${hour}:${min}`;
      if (parseInt(hour, 10) <= 12) {
        timeNow = `${hour}:${min} AM`;
      } else {
        timeNow = `${hour}:${min} PM`;
      }
      return setRealTime(timeNow);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function handleDate() {
    if (parseInt(hour, 10) <= 12) {
      fullHour = `Today at ${hour}:${min} AM`;
    } else {
      fullHour = `Today at ${hour}:${min} PM`;
    }
    return fullHour;
  }

  const allDate = {
    fullHour: handleDate(),
    fullDateDay: fullDateDay,
    realTime: realTime,
  };

  return allDate;
}
