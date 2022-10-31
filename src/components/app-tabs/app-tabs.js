import "./app-tabs.css";

const AppTabs = (props) => {
  const btnsData = [
    { name: "All", label: "Все сотрудники" },
    { name: "Increase", label: "На повышение" },
    { name: "MoreThan1000", label: "Зп больше 1000$" },
  ];

  const Buttons = btnsData.map((btn) => {
    const clazz =
      props.filter === btn.name ? "tabs__btn btn-light" : "tabs__btn";
    return (
      <button
        onClick={(e) => props.onEmplFilter(e.target.name)}
        key={btn.name}
        className={clazz}
        name={btn.name}
      >
        {btn.label}
      </button>
    );
  });

  return <div className="tabs__group">{Buttons}</div>;
};

export default AppTabs;
