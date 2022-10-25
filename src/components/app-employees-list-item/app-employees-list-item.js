import "./app-employee-list-item.css";

const AppEmployeeItem = (props) => {
  const { name, salary, onDelete, onToggleProp, increase } = props;
  const className = increase
    ? "employee__container increase"
    : "employee__container";

  return (
    <li className={className}>
      <p className="employee__name">{name}</p>
      <p className="employee__salary">{salary + "$"}</p>
      <div className="employee__btns">
        <button
          onClick={onToggleProp}
          className="btn btn__increase"
          data-toggle="increase"
        >
          Increase
        </button>
        <button onClick={onDelete} className="btn btn__delete">
          Delete
        </button>
      </div>
    </li>
  );
};

export default AppEmployeeItem;
