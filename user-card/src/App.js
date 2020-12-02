
import './App.css';
import React from 'react';
import fetchUser from "./services/fetchUser"
import UserCard from './components/UserCard'
import axios from 'axios';
class App extends React.Component {
  state = {
    user: [],
    followers: []
  }

  componentDidMount(){
     fetchUser("mojombo")
     .then((res)=>{
       console.log(res)
       this.setState({
         user: res.data
       });
      
     })
     .catch((err)=>console.log(err))
     
  }
//  componentDidUpdate(){
// console.log(this.state.user)

//   return axios
//     .get(`https://api.github.com/users/${this.state.user.login}/followers`)
//     .then(suc=>{
//       console.log(suc)
//       this.setState({
//         followers: suc
//       })
//       .catch(err=>
//         console.log(err))
//     })
   
//  }
clickHandler = ()=>{
  axios 
  .get(`https://api.github.com/users/${this.state.user.login}/followers`)
  .then((suc)=>{
    console.log(suc)
    this.setState({
      followers: suc.data
    })
  })
}
  render(){
    console.log(this.state.followers)
  return (
    <div className="App">
      {/* {this.state.user.map(us=>{
        return <UserCard key={us.id} userCard = {us.login} avatar={us.avatar_url}/>
      })} */}
      <UserCard userCard = {this.state.user.login} avatar={this.state.user.avatar_url} followers = {this.state.user.followers} clickHandler={this.clickHandler} followersCard={this.state.followers}/>
    </div>
  );
  }
}

export default App;
