import React from "react";
import "../styles/layout/_filter_by_year.scss";

const FilterByYear = (props) => {
//  hacer el map para mostrar los años

  const handleSelectSearch = (ev) => {
    props.setYear (ev.target.value)
    };

  return (
    <section>
      <label htmlFor=""></label>
      <select className="form_year__select"
      name="year" 
      id="year" 
      onChange={handleSelectSearch}
      value= {props.year}
      >
        <option value=""> Selecciona
        </option>
      
      </select>
    </section>
  );
};

export default FilterByYear;
