import {useState} from 'react'
import arrow from "../assets/calendar-left.svg"
const CustomCalendar = () => {
    const daysOfWeek = [{
        init: 'S',
        full: 'Sun',
    }, {
        init: 'M',
        full: 'Mon',
    }, {
        init: 'T',
        full: 'Tue',
    }, {
        init: 'W',
        full: 'Wed',
    }, {
        init: 'T',
        full: 'Thur',
    }, {
        init: 'F',
        full: 'Fri',
    }, {
        init: 'S',
        full: 'Sat'
    },];

    const currentDate = new Date();
    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    const handlePrevMonth = () => {
        setCurrentMonth(prevMonth => (prevMonth === 0 ? 11 : prevMonth - 1));
        setCurrentYear(prevYear => (currentMonth === 0 ? prevYear - 1 : prevYear));
    }

    const handleNextMonth = () => {
        setCurrentMonth(prevMonth => (prevMonth === 11 ? 0 : prevMonth + 1));
        setCurrentYear(prevYear => (currentMonth === 11 ? prevYear + 1 : prevYear));
    }

    return (
        <div className="CALENDAR duration-150 ease-out max-h-0 custom-calendar left-1/2 -translate-x-1/2 scale-95 min-w-max absolute p-5 bg-white border shadow-lg md:scale-100 top-14 md:top-16">
            <div className="calendar-header">
                <h2 className="text-[.9rem] font-medium">{new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}</h2>

                <div className="flex items-center gap-2">
                    <img onClick={handlePrevMonth} src={arrow} className='p-1.5 w-7 border rounded h-7 cursor-pointer hover:bg-gray-50 duration-100' alt="&larr;" />
                    <img onClick={handleNextMonth} src={arrow} className='p-1.5 w-7 border rounded h-7 cursor-pointer hover:bg-gray-50 duration-100 rotate-180' alt="&rarr;" />
                </div>
            </div>
            <div className="days-of-week w-full grid grid-cols-7 gap-1 my-4">
                {daysOfWeek.map(day => (
                    <div key={day.full} className="day-of-week">{day.init}</div>
                ))}
            </div>
            <div className="calendar-days gap-1">
                {[...Array(firstDayOfMonth).keys()].map(() => (
                    <div key={`empty-${Math.random()}`} className="empty-cell"></div>
                ))}
                {[...Array(daysInMonth).keys()].map(day => {
                    const date = new Date(currentYear, currentMonth, day + 1);
                    const isPassed = date < currentDate || (date.getDate() === currentDate.getDate() && currentDate.getDate() && currentMonth === currentDate.getMonth() &&
                        currentYear === currentDate.getFullYear());
                    return (
                        <div tabIndex={1}
                            key={day}
                            className={
                                day + 1 === currentDate.getDate() && currentMonth === currentDate.getMonth() &&
                                    currentYear === currentDate.getFullYear() ? 'current-date line-through cursor-not-allowed' : isPassed ? 'calendar-day line-through text-[#999] passed cursor-not-allowed' : 'calendar-day hover:bg-gray-100'}
                        >
                            {day + 1}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CustomCalendar;
