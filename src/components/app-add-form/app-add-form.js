import "./app-add-form.css";
import { Component } from "react";

class AppAddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            salary: ""
        }
    }

    onValueChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state.name, this.state.salary);
        this.setState({
            name: "", salary: ""
        })
    }

    render(){
        const {name, salary} = this.state;
        return(
            <div className="form__container">
                <h2 className="form__title">Добавьте нового сотрудника!</h2>
                <form onSubmit={this.onSubmit} action="#" className="form">
                    <input onChange={this.onValueChange} className="form__input" type="text" value={name} name="name" id="name" placeholder="Введите имя..."/>
                    <input onChange={this.onValueChange} className="form__input" type="number" value={salary} name="salary" id="salary" placeholder="Введите зарплату..."/>
                    <button className="form__btn" type="submit">Добавить</button>
                </form>
            </div>
        )
    }
}

export default AppAddForm;