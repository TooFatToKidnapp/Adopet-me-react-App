import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  return (
    <div className="Search-params">
      <form>
        <label htmlFor="Location">
          Location
          <input onChange= {e => setLocation(e.target.value)} id="location" value={location} placeholder="Location" />
        </label>
		<button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
