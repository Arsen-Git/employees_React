import "./app-header.css";

const AppHeader = ({ data }) => {
  const incrCount = data.filter((item) => item.increase);
  return (
    <div className="header">
      <h1 className="header__text">Учет сотрудников в компании SATcompany</h1>
      <h2 className="header__text">
        Общее количество сотрудников: {data.length}
      </h2>
      <h2 className="header__text">Премию получат: {incrCount.length}</h2>
    </div>
  );
};

export default AppHeader;
