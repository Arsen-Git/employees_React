import "./app-header.css";

const AppHeader = ()=>{
    return(
        <div className="header">
            <h1 className="header__text">Учет сотрудников в компании SATcompany</h1>
            <h2 className="header__text">Общее количество сотрудников:</h2>
            <h2 className="header__text">Премию получат:</h2>
        </div>
    )
}

export default AppHeader;