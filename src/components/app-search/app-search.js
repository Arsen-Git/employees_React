import "./app-search.css";

const AppSearch = (props) => {
  return (
    <input
      onChange={(e) => props.onEmplSearch(e.target.value)}
      type="text"
      className="filter__search"
      placeholder="Найти сотрудника..."
    />
  );
};

export default AppSearch;
