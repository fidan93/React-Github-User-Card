import React from 'react';
import FollowersCard from "./Followers";
const UserCard = props => {
    

    console.log(props)
        return(
            <div>
                <p>Login: {props.userCard}</p>
                <img src = {props.avatar} alt = {props.avatar}/>
                <h4 onClick={props.clickHandler}>Followers:{props.followers}</h4>
              {props.followersCard.map(card => {
                  console.log(card)
              return <FollowersCard  key = {card.id} fLogin ={card.login}/>
                             })}
            </div>
        )
    
}
export default UserCard;