  "use client";
  import { Calendar, momentLocalizer, View, Views, Navigate } from 'react-big-calendar';
  import moment from 'moment';
  import { calendarEvents } from '@/lib/data';
  import "react-big-calendar/lib/css/react-big-calendar.css";
  import { useState } from 'react';
  console.log(new Date(new Date().getTime() + 60 * 60 * 1000))
  const localizer = momentLocalizer(moment);
  const events = [
    {
      title: 'Current Date Event',
      start: new Date(2024, 7, 16, 11, 8),
      end: new Date(2024, 7, 16, 13, 45),
    },
  ];
  const BigCalendar = () => {
      const [view, setView] = useState<View>(Views.WORK_WEEK);
      const [date, setDate] = useState<Date>(new Date());
      const [todayDate, setTodayDate] = useState(
        new Date().toISOString().substring(0, 10).replace(/-/g, "-")
      );
      const handleOnChangeView = (selectedView: View) => {
          setView(selectedView);
      };
      const handleCalendarNavigate = (currdate:Date) => {
        setDate(new Date(currdate));
    }; 

      return (
          <Calendar
              localizer={localizer}
              events={calendarEvents}
              startAccessor="start"
              endAccessor="end"
              views={["work_week", "day"]}
              view={view}
              onView={handleOnChangeView}
              date={date}
              onNavigate={handleCalendarNavigate}
              style={{ height: "98%" }}
              min={new Date(1970, 1, 1, 8, 0, 0)} // Start time set to 3:00 AM
              max={new Date(1970, 1, 1, 17, 59, 59)} // End time set to 11:59 PM
              step={30} // Minutes per slot
              timeslots={2} // Number of slots per hour
          />
      );
  };

  export default BigCalendar;
