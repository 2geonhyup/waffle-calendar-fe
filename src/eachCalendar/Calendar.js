import React, { useState } from "react";
import { default as CalendarModel } from "react-calendar";
import moment from "moment";

const getDateList = (eventList) => {
  let dateList = [];
  eventList.forEach((e) => {
    dateList.push([e.start.date, e.summary]);
  });

  return dateList;
};

const Calendar = ({ eventList }) => {
  const [value, onChange] = useState(new Date());
  const dateList = getDateList(eventList);
  return (
    <CalendarModel
      className="cal-model"
      onChange={onChange}
      formatDay={(locale, date) => moment(date).format("DD")}
      value={value}
      minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
      maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
      navigationLabel={null}
      showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
      tileContent={({ date, view }) => {
        let html = [];
        const mark = dateList.find(
          (x) => x[0] === moment(date).format("YYYY-MM-DD")
        );
        if (mark) {
          html.push(
            <div className="tile-content" key={mark[0]}>
              {mark[1]}
            </div>
          );
        }
        return <div>{html}</div>;
      }}
    />
  );
};

export default Calendar;
