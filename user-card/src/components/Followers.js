import React from 'react';

class Followers extends React.Component{
render(){
    const {login,avatar_url} = this.props.followerUser;
    return(
        <div className = "usercard">
        <p>login: {login}</p>
        <img src= {avatar_url} alt = 'avatar'/>
    </div>
    )
}
}
export default Followers;