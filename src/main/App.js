import "../App.css";
// import appData from "../jsonData/appData.json";

import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
import CalendarList from "./CalendarList";
import LoginBtn from "../component/LoginBtn";
import CalendarBtn from "./CalendarBtn";
import axios from "axios";

//이 부분을 get요청으로 바꾸면 됨
const setData = async () => {
  let userName = "";
  let response;

  // get 요청
  try {
    response = await axios.get("http://localhost:3005/");
  } catch {
    console.log("app.js get failed!");
  }

  const appData = response.data;
  console.log(response);
  console.log(appData);
  const calendarList = appData.masterCal_list;
  if ("profile" in appData) {
    userName = appData.profile.displayName;
    console.log(userName);
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
      console.log(data.userName);
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
