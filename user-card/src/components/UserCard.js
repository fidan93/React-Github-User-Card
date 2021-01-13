import React from 'react';
import Followers from './Followers';

class UserCard extends React.Component{

    render(){
        const {login,followers,following,avatar_url} = this.props.userCard;
        
        return(
            <div className= "container">
            <div className = "usercard">
                <p>login: {login}</p>
                <p>followers: {followers}</p>
                <p>following: {following}</p>
                <img src= {avatar_url} alt = 'avatar'/>
            </div>
            <h2>Followers:</h2>
            {
            this.props.followers.map(follower => {
                return <Followers key={follower.id} followerUser = {follower}/> 
            })
            }
           {/* */}
            </div>
        )
    }
}
export default UserCard;