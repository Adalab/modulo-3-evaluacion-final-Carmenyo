import React from "react";
import FilterByName from "./FilterByName";
import FilterByYear from "./FilterByYear";
import "../styles/core/_reset.scss"
function Filters(props) {
return (
    <>
    <form className="form">
    <FilterByName search={props.search} setSearch={props.setSearch}/>
    <FilterByYear year={props.year} setYear={props.setYear}/>
    </form>
    </>
);
};

export default Filters;