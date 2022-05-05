import React from "react";
import "../styles/layout/_filter_by_year.scss";
import "../styles/core/_reset.scss"
const FilterByYear = (props) => {

  const handleChange = (ev) => {
    props.handleFilterByYear(ev.target.value);
  };
  
  const renderYears = () => {
  return props.years.map ((year, i) => {
    return (
    <option 
    value={year}
    key = {i}> 
    {year}
    </option>
    );
  });
};
return (
    <section>
      <label htmlFor="year"></label>
      <select className="form_year__select"
      name="year" 
      id="year">
        <option value="All">All</option>
          {renderYears()}
      </select>
    </section>
  );
};

  export default FilterByYear;