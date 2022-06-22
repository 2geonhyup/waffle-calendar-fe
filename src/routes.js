import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./main/App";
import Calendar from './eachCalendar/CalendarPage';
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/calendar/:calendarId" element={<Calendar />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;