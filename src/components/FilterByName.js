import "../styles/layout/_filter_by_name.scss"

const FilterByName = (props) => {
    const handleSearch = (ev) => {
    props.setSearch(ev.target.value);
    };
  
    return (
      <section>
          <input
            key="id"
            className="form__input"
            id="film"
            type="search"
            onChange={handleSearch}
            value={props.search}
            placeholder="Busca una película"
          />
      </section>
    );
  };
  
  export default FilterByName;