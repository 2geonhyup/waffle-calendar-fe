import React from "react";
import { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";

const CalendarBtn = () => {
    function loginOrLogout() {

    }


    return (
        <button className="float-btn" onClick={loginOrLogout}>
            <AiOutlineCalendar className="logo" />
        </button>
    );
};

export default CalendarBtn;