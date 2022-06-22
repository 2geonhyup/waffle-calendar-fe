import "../App.css";
import appData from "../jsonData/appData.json";

import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import CalendarList from "./CalendarList";
import dummyCalendarList from "../dummy";
import LoginBtn from "../component/LoginBtn";
import CalendarBtn from "./CalendarBtn";

//이 부분을 get요청으로 바꾸면 됨
const setData = async () => {
  let userName = "";

  const calendarList = appData.masterCal_list;
  if ("profile" in appData) {
    userName = appData.profile.displayName;
  }

  return { userName: userName, calendarList: calendarList };
};

function App() {
  console.log("hi");

  const [searchTerm, setSearchTerm] = useState("");
  const [loginState, setLoginState] = useState("");
  const [calendarList, setCalendarList] = useState([]);

  // 로그인 될 때마다 호출되어야 함
  useEffect(() => {
    async function ex() {
      const data = await setData();
      if (data.userName === "") {
        setLoginState("로그인");
      } else {
        setLoginState(`로그아웃`);
      }
      setCalendarList(data.calendarList);
    }
    ex();
  }, []);

  return (
    <div className="App">
      <LoginBtn loginState={loginState} />
      <CalendarBtn />
      <div className="title">
        <div className="sub-title">calendar</div>
        <div className="main-title">waffle</div>
      </div>

      <div className="search-bar">
        <input
          type="search"
          placeholder="추가할 일정 찾아보기"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <AiOutlineSearch className="logo" />
      </div>
      <CalendarList
        calendarList={calendarList}
        searchTerm={searchTerm}
      ></CalendarList>
    </div>
  );
}

export default App;
