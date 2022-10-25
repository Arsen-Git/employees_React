import AppEmployeeItem from "../app-employees-list-item/app-employees-list-item"

import "./app-employees-list.css"

const AppEmployeeList = ({data, onDelete})=>{

    const items = data.map(item=>{
        const {id, ...itemProps} = item;
        return(
            <AppEmployeeItem onDelete={()=>onDelete(id)} key={id} {...itemProps}/>
        )
    })

    return(
        <ul className="employees__list">
            {items}
        </ul>
        )
}
export default AppEmployeeList;