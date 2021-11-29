import "./App.css";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";

function App() {
  // const startValue: Date = new Date(
  //   new Date().getFullYear(),
  //   new Date().getMonth(),
  //   14
  // );
  // const endValue: Date = new Date(
  //   new Date().getFullYear(),
  //   new Date().getMonth() + 1,
  //   15
  // );

  const minDate: Date = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    1
  );

  const maxDate: Date = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    15
  );
  return (
    <div className="App">
      <DateRangePickerComponent
        id="daterangepicker"
        placeholder="Select a range"
        // startDate={startValue}
        // endDate={endValue}
        min={minDate}
        max={maxDate}
        minDays={4}
        maxDays={7}
        format="dd-MMM-yy"
      />
    </div>
  );
}

export default App;
