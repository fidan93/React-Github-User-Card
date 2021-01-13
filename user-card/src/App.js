import React from 'react';
import './App.css';
import axios from 'axios'
import UserCard from './components/UserCard'

class App extends React.Component{
state = {
  user:{},
  followers:[],
  username: ''
}

componentDidMount(){
axios
.get('https://api.github.com/users/wycats')
.then(res=>{
  this.setState({user:res.data})
  axios.get(res.data.followers_url)
      .then(res=>{
      this.setState({followers:res.data})
      })
      .catch(err=>{
        console.log(err)
      })
})
.catch(err=>{
  console.log(err)
})

}

changeHandler = (e) =>{
this.setState({username: e.target.value})
}

componentDidUpdate(prevProps,prevState){

  
  if(prevState.username !== this.state.username){
    axios
    .get(`https://api.github.com/users/${this.state.username}`)
    .then(res => {
      console.log(res)
      this.setState({user:res.data})
      
    })
    .catch(err=>{
      console.log(err)
    })

  
}
  
}

search = (e) => {
  e.preventDefault()
  axios
  .get(`https://api.github.com/users/${this.state.username}`)
  .then(res => {
    console.log(res)
    this.setState({user:res.data})

    axios.get(res.data.followers_url)
      .then(res=>{
      this.setState({followers:res.data})
      })
      .catch(err=>{
        console.log(err)
      })
  })
  .catch(err=>{
    console.log(err)
  })

}
  render(){
    console.log(this.state.username)
    return(
      <div>
        <form>
          <input name = 'search' type = "text" onChange={this.changeHandler} placeholder='search for user'/>
          <button onClick= {this.search}>Search</button>
        </form>
       <UserCard userCard = {this.state.user} followers={this.state.followers}/>
      </div>
    )
  }
}

export default App;
