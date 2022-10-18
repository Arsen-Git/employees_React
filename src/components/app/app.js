import AppHeader from "../app-header/app-header"
import AppSearch from "../app-search/app-search"
import AppTabs from "../app-tabs/app-tabs"
import AppEmployeeList from "../app-employees-list/app-employees-list"
import AppAddForm from "../app-add-form/app-add-form";

import "./app.css"

export default function App(){

    const data= [
        {name: "Alex J.", salary: 700, id: 1},
        {name: "Sofiia M.", salary: 900, id: 2},
        {name: "Vlad K.", salary: 1100, id: 3},
        {name: "Arturio F.", salary: 1400, id: 4},
        {name: "Ihor H.", salary: 1900, id: 5},
        {name: "Danil R.", salary: 450, id: 6},
    ]

    return(
        <div className="app">
            <AppHeader/>
            <div className="app__filter">
                <AppSearch/>
                <AppTabs/>
            </div>
            <AppEmployeeList data={data}/>
            <AppAddForm/>
        </div>
    )
}