import "./app-tabs.css";

const AppTabs = ()=>{
    return(
        <div className="tabs__group">
            <button className="tabs__btn btn-light">Все сотрудники</button>
            <button className="tabs__btn">На повышение</button>
            <button className="tabs__btn">Зп больше 1000$</button>
        </div>
    )
}

export default AppTabs;