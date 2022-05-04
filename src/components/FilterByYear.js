import React from "react";
import "../styles/layout/_filter_by_year.scss";

const FilterByYear = ({ search, setSearch }) => {
  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };

  return (
    <section>
      <form className='form_year'>
        <label htmlFor=''></label>
        <select className='form_year__select' name='' id=''>
          <option value=''></option>
        </select>
      </form>
    </section>
  );
};

export default FilterByYear;
