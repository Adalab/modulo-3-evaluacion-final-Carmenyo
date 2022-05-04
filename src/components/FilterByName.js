import "../styles/layout/_filter_by_name.scss"

const FilterByName = ({search, setSearch}) => {
    const handleSearch = (ev) => {
    setSearch(ev.target.value);
    };
  
    return (
      <section>
        <form className="form">
          <input
            key="id"
            className="form__input"
            id="film"
            type="search"
            onChange={handleSearch}
            value={search}
            placeholder="Busca una película"
          ></input>
        </form>
      </section>
    );
  };
  
  export default FilterByName;