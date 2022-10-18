import "./app-employee-list-item.css"

const AppEmployeeItem = ({name,salary}) => {
    return(
        <li className="employee__container">
            <p className="employee__name">{name}</p>
            <p className="employee__salary">{salary + "$"}</p>
            <div className="employee__btns">
                <button className="btn btn__increase">Increase</button>
                <button className="btn btn__delete">Delete</button>
            </div>
        </li>
    )
}

export default AppEmployeeItem;