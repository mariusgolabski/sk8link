import { useRef } from "react";
import Button from "../ui/Button";

export default function EventsSearch({ onSearch }) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    onSearch(selectedYear, selectedMonth);
  }

  return (
    <div className="max-w-2xl mx-auto pt-10 pb-16">
      <form className="flex gap-4 items-end" onSubmit={submitHandler}>
        <div className="flex-1">
          <label htmlFor="year">
            <span className="block text-neutral-800 font-medium text-sm">
              Year
            </span>
            <select
              defaultValue="2024"
              className="block w-full border border-neutral-200 bg-white rounded-lg text-sm font-normal h-11 px-4 py-2 mt-1"
              id="year"
              ref={yearInputRef}
            >
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </label>
        </div>

        <div className="flex-1">
          <label htmlFor="month">
            <span className="block text-neutral-800 font-medium text-sm">
              Month
            </span>
            <select
              className="block w-full border border-neutral-200 bg-white rounded-lg text-sm font-normal h-11 px-4 py-2 mt-1"
              id="month"
              ref={monthInputRef}
            >
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </label>
        </div>
        <Button className="h-11">Find Events</Button>
      </form>
    </div>
  );
}
