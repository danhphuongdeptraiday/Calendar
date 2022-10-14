import "./App.css";
import moment from "moment";
import Title from "./components/Title/Title";
import CalendarGrid from "./components/CalendarGrid/CalendarGrid";
import Monitor from "./components/Monitor/Monitor";
import { useState } from "react";

function App() {
  // window.moment = moment;
  moment.updateLocale("en", { week: { dow: 1 } });

  const [today, setToday] = useState(moment());

  const startDay = today.clone().startOf("month").startOf("week");

  const prevHandler = () =>
    setToday((prev) => prev.clone().subtract(1, "month"));
  const todayHandler = () => setToday(moment());
  const nextHandler = () => setToday((prev) => prev.clone().add(1, "month"));

  return (
    <div className="App">
      <div className="main">
        <Title />
        <Monitor
          prevHandler={prevHandler}
          todayHandler={todayHandler}
          nextHandler={nextHandler}
          today={today}
        />
        <CalendarGrid startDay={startDay} today={today} />
      </div>
    </div>
  );
}

export default App;
