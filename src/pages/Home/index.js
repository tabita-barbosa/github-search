import React, { Component } from 'react';
import SearchBar from '../../Components/SearchBar'
import api from '../../Services/api';
import './styles.css';

class Home extends Component {
    constructor (){
        super();
        this.state={
            inputValue: "",
            user: ""
        };
    }

    setUser = e => {
        this.setState({inputValue: e.target.value})
    }

    searchUser = async () => {
        const user = this.state.inputValue; 
        const getUser = await api.get(`/users/${user}`);
        console.log(getUser, user)
    }

    changeUser = (e) => {
        const inputValue = e.target.value;
        this.setState({inputValue});
    }

    render(){
        return (
        <>
        <h1>GitHub Search</h1>
        <SearchBar 
            placeholder={'Digite um usuário para encontrar seus repositórios'}
            value={this.state.inputValue}
            onChange={this.changeUser}
            onClick={this.searchUser}
        />
        </>
        )
    }
}

export default Home;
