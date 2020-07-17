import React, {Component} from 'react';
import Profile from '../../Components/Profile';
//import Repositories from '../../Components/Repositories'
import api from '../../Services/api';
import "./styles.css";

class Result extends Component{
    constructor(){
        super();
        this.state = {
            repos: [],
            user: {}
        };
    }

    componentDidMount = async () => {
        const {user, data} = this.props.history.location.state;

        //console.log(data)
        const repos = await api.get(`/users/${user}/repos`);
        const {data: dataRepos} = repos;

        this.setState({ repos: dataRepos, user: data })
    }


    render(){
        const {repos, user} = this.state;
        //const {user} = this.props.history.location.state;
        console.log({repos, user})
        return(
            <div className='content'>
                <Profile
                    avatar_url={user.avatar_url}
                    name={user.name}
                    bio={user.bio}
                    company={user.company}
                    location={user.location}
                    public_repos={user.public_repos}
                    followers={user.followers}
                    following={user.following}
                />
                <h1>pagina renderizou</h1>
            </div>
        )
    }

}

export default Result;