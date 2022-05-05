import React from "react";
import FilterByName from "./FilterByName";
import FilterByYear from "./FilterByYear";
import "../styles/core/_reset.scss";
function Filters(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <FilterByName search={props.search} setSearch={props.setSearch} />
      <FilterByYear years={props.years} setSelect={props.setSelect} />
    </form>
  );
}

export default Filters;
