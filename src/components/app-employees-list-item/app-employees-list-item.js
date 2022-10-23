import "./app-employee-list-item.css"
import { Component } from "react";

class AppEmployeeItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            increase: false
        }
    }

    onChange = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    render(){
        const {name, salary} = this.props;
        const {increase} = this.state;
        const className = increase?"employee__container increase":"employee__container";
        return(
            <li className={className}>
                <p className="employee__name">{name}</p>
                <p className="employee__salary">{salary + "$"}</p>
                <div className="employee__btns">
                    <button onClick={this.onChange} className="btn btn__increase">Increase</button>
                    <button className="btn btn__delete">Delete</button>
                </div>
            </li>
        )
    }
}

export default AppEmployeeItem;