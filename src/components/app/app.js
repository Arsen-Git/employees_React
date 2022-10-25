import { Component } from "react";

import AppHeader from "../app-header/app-header"
import AppSearch from "../app-search/app-search"
import AppTabs from "../app-tabs/app-tabs"
import AppEmployeeList from "../app-employees-list/app-employees-list"
import AppAddForm from "../app-add-form/app-add-form";

import "./app.css"

export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            data :[
                {name: "Alex J.", salary: 700, increase: true, id: 1},
                {name: "Sofiia M.", salary: 900, increase: false, id: 2},
                {name: "Vlad K.", salary: 1100, increase: false, id: 3},
                {name: "Arturio F.", salary: 1400, increase: true, id: 4},
                {name: "Ihor H.", salary: 1900, increase: true, id: 5},
                {name: "Danil R.", salary: 450, increase: false, id: 6},
            ]
        }
        this.maxId = 6
    }

    deleteItem = (id)=>{
        this.setState(({data})=>({
            data: data.filter(item=>item.id !== id)
        }))
    }

    createItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: ++this.maxId
        }
        this.setState(({data})=>{
            const newData = [...data, newItem]
            return{
                data: newData
            }
        })
    }

    render(){
        const {data} = this.state;
        return(
            <div className="app">
                <AppHeader/>
                <div className="app__filter">
                    <AppSearch/>
                    <AppTabs/>
                </div>
                <AppEmployeeList onDelete = {this.deleteItem} data={data}/>
                <AppAddForm onCreate = {this.createItem}/>
            </div>
        )
    }
}