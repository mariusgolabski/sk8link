import Button from "../ui/button";

export default function EventsSearch() {
  function submitHandler(event) {
    event.preventDefault();
    console.log("click");
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label htmlFor="year">Year</label>
          <select id="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div>
          <label htmlFor="month">Month</label>
          <select id="month">
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">Septemper</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">Dezember</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}
