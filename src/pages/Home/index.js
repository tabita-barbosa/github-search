import React, { Component } from 'react';
import SearchBar from '../../Components/SearchBar'
import api from '../../Services/api';
import './styles.css';

class Home extends Component {
    constructor (){
        super();
        this.state={
            inputValue: "",
            user: "",
            error: ""
        };
    }

    setUser = e => {
        this.setState({inputValue: e.target.value})
    }

    searchUser = async () => {
        const user = this.state.inputValue; 
        if (user){ 
            try{
            const getUser = await api.get(`/users/${user}`);
            const {data} = getUser;
            // console.log(getUser, user)
            this.setState({user: data, error:''})

            this.props.history.push({
                pathname: '/result',
                state: {user, data}
            })

            } catch (e){
                this.setState({error: 'nenhum usuario encontrado!', inputValue: ''})
            }

        } else {
            this.setState({error: 'Por favor insira um usuário'})
        }
    }


    changeUser = (e) => {
        const inputValue = e.target.value;
        this.setState({inputValue});
    }

    render(){
        const {error} = this.state;

        return (
        <>
        <h1>GitHub Search</h1>
        <SearchBar 
            placeholder={'Digite um usuário para encontrar seus repositórios'}
            value={this.state.inputValue}
            onChange={this.changeUser}
            onClick={this.searchUser}
        />
        {error && <h3>{error}</h3>}
        </>
        )
    }
}

export default Home;
