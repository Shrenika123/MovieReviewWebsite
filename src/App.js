import Register from './Component/Register'
import Login from './Component/Login'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react'
import history from './Helper/history'
import { Switch,Route,Router} from 'react-router-dom';
import MoviePosts from './Container/Posts/MoviePosts'
import Dropdown from './Component/Dropdown'

class  App extends Component {
  render(){
    return(
      <div>
    <Dropdown/>
  <Router history={history}>
  <Switch>
  <Route exact path='/' component={Login}/>
<Route path='/register'  component={Register}/>
<Route path='/movieposts' component={MoviePosts}/>

</Switch>
</Router >
</div>
    ) 
  }
}


export default App;
