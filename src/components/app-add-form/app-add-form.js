import "./app-add-form.css";

const AppAddForm = ()=>{
    return(
        <div className="form__container">
            <h2 className="form__title">Добавьте нового сотрудника!</h2>
            <form action="#" className="form">
                <input className="form__input" type="text" name="name" id="name" placeholder="Введите имя..."/>
                <input className="form__input" type="number" name="salary" id="salary" placeholder="Введите зарплату..."/>
                <button className="form__btn" type="submit">Добавить</button>
            </form>
        </div>
    )
}

export default AppAddForm;