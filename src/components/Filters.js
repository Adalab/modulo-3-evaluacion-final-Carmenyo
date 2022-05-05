import React from "react";
import FilterByName from "./FilterByName";
import FilterByYear from "./FilterByYear";

function Filters(props) {
return (
    <>
    <form className="form">
    <FilterByName search={props.search} setSearch={props.setSearch}/>
    <FilterByYear />
    </form>
    </>
);

};

export default Filters;