import React, { Component } from "react";
import { useEffect, useState } from "react";
import Calendar from "./Calendar.js";
import calendarData from "../jsonData/calendarData.json";
import LoginBtn from "../component/LoginBtn.js";
import SubscribeBtn from "./SubscribeBtn.js";
import SubscribeCancelBtn from "./SubscribeCancelBtn.js";
import EventAddBtn from "./EventAddBtn.js";

const setData = async () => {
  //TODO: get으로 calendarData 받아오기
  const calName = calendarData.eventList.summary;

  let userName = "";
  if ("profile" in calendarData) {
    userName = calendarData.profile.displayName;
  }

  const subscribe = calendarData.subscribed;

  const itemList = calendarData.eventList.items;
  //summary: 일정 이름, start: 시작 날짜, end: 끝 날짜
  return {
    calName: calName,
    userName: userName,
    subscribe: subscribe,
    itemList: itemList,
  };
};

function CalendarPage() {
  const [calName, setCalName] = useState("");
  const [loginState, setLoginState] = useState("");
  const [eventList, setEventList] = useState([]);
  const [subscribe, setSubscribe] = useState(false);
  useEffect(() => {
    async function ex() {
      const data = await setData();
      if (data.userName === "") {
        setLoginState("로그인");
      } else {
        setLoginState(`로그아웃`);
      }
      setCalName(data.calName);
      setEventList(data.itemList);
      setSubscribe(data.subscribe);
    }
    ex();
  }, []);

  return (
    <div className="cal-page">
      <div className="cal-title">{calName}</div>
      <LoginBtn loginState={loginState} />
      <Calendar eventList={eventList} />
      {subscribe ? (
        <div className="btn-div">
          <EventAddBtn />
          <SubscribeCancelBtn />
        </div>
      ) : (
        <SubscribeBtn />
      )}
    </div>
  );
}

export default CalendarPage;
