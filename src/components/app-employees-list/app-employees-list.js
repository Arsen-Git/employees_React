import AppEmployeeItem from "../app-employees-list-item/app-employees-list-item"

import "./app-employees-list.css"

const AppEmployeeList = ({data, onDelete, onToggleProp})=>{

    const items = data.map(item=>{
        const {id, ...itemProps} = item;
        return(
            <AppEmployeeItem onToggleProp={(e)=>onToggleProp(id,e.currentTarget.getAttribute("data-toggle"))} onDelete={()=>onDelete(id)} key={id} {...itemProps}/>
        )
    })

    return(
        <ul className="employees__list">
            {items}
        </ul>
        )
}
export default AppEmployeeList;