import moment from "moment";
import React from "react";
import classes from "../CalendarGrid/CalendarGrid.module.css";

function CalendarGrid({ startDay, today }) {
  const totalDays = 42;
  const day = startDay.clone().subtract(1, "day");
  const daysMap = [...Array(totalDays)].map(() => day.add(1, "day").clone());

  const isCurrentDay = (day) => moment().isSame(day, "day");
  const isSelectedMonth = (day) => today.isSame(day, "month");

  return (
    <>
      <div className={classes.weekContainer}>
        {[...Array(7)].map((_, i) => (
          <div className={classes.cellWrapperHeader}>
            {moment()
              .day(i + 1)
              .format("ddd")}
          </div>
        ))}
      </div>

      <div className={classes.container}>
        {daysMap.map((dayItem) => (
          <div
            // key={dayItem.format("DDMMYYYY")}
            isWeekend={true}
            className={classes.cellWrapper}
            key={dayItem.unix()}
            isSelectedMonth={isSelectedMonth(dayItem)}
            style={{
              color: isSelectedMonth(dayItem) ? "#DDDDDD" : "#555759",
              backgroundColor:
                dayItem.day() === 6 || dayItem.day() === 0
                  ? "#272829"
                  : "#1E1F21",
            }}
          >
            <div className={classes.rowInCell}>
              <div className={classes.dayWrapper}>
                {isCurrentDay(dayItem) && (
                  <div className={classes.currentDay}>
                    {dayItem.format("D")}
                  </div>
                )}

                {!isCurrentDay(dayItem) && dayItem.format("D")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CalendarGrid;
