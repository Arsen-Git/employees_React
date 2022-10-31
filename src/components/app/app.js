import { Component } from "react";

import AppHeader from "../app-header/app-header";
import AppSearch from "../app-search/app-search";
import AppTabs from "../app-tabs/app-tabs";
import AppEmployeeList from "../app-employees-list/app-employees-list";
import AppAddForm from "../app-add-form/app-add-form";

import "./app.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Alex J.", salary: 700, increase: true, id: 1 },
        { name: "Sofiia M.", salary: 900, increase: false, id: 2 },
        { name: "Vlad K.", salary: 1100, increase: false, id: 3 },
        { name: "Arturio F.", salary: 1400, increase: true, id: 4 },
        { name: "Ihor H.", salary: 1900, increase: true, id: 5 },
        { name: "Danil R.", salary: 450, increase: false, id: 6 },
      ],
      search: "",
      filter: "All",
    };
    this.maxId = 6;
  }

  filterEmpl = (data, filter) => {
    switch (filter) {
      case "MoreThan1000":
        return data.filter((item) => item.salary > 1000);
      case "Increase":
        return data.filter((item) => item.increase);
      default:
        return data;
    }
  };

  onEmplFilter = (filter) => {
    this.setState({ filter });
  };

  searchEmloyee = (data, search) => {
    if (search === "") {
      return data;
    }
    return data.filter((item) => item.name.includes(search));
  };

  onEmplSearch = (search) => {
    this.setState({ search });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }));
  };

  createItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: ++this.maxId,
    };
    this.setState(({ data }) => {
      const newData = [...data, newItem];
      return {
        data: newData,
      };
    });
  };

  render() {
    const { data, search, filter } = this.state;
    const visibleData = this.filterEmpl(
      this.searchEmloyee(data, search),
      filter
    );
    return (
      <div className="app">
        <AppHeader data={data} />
        <div className="app__filter">
          <AppSearch onEmplSearch={this.onEmplSearch} />
          <AppTabs onEmplFilter={this.onEmplFilter} filter={filter} />
        </div>
        <AppEmployeeList
          onToggleProp={this.onToggleProp}
          onDelete={this.deleteItem}
          data={visibleData}
        />
        <AppAddForm onCreate={this.createItem} />
      </div>
    );
  }
}
