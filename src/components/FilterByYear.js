import React from "react";
import "../styles/layout/_filter_by_year.scss";
import "../styles/core/_reset.scss"
const FilterByYear = (props) => {

  const handleSelect = (ev) => {
    props.setSelect(ev.target.value);
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
      <select 
      className="form_year__select"
      name="year" 
      id="year"
      value= {props.select}
      onChange={handleSelect}>
        <option value="All">All</option>
          {renderYears()}
      </select>
    </section>
  );
};

  export default FilterByYear;