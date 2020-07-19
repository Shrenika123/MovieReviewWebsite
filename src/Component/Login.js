import React, { Component } from 'react';
import {Link} from 'react-router-dom'

 



 class Login extends Component {

    constructor(props) {
        super(props);

     

        this.state = {
            name: '',
            password:'',
            redirect:false
        }
    }


   

    onChangeName=(e)=> {
        this.setState({ name: e.target.value })
    }

    onChangePassword=(e)=> {
        this.setState({ password: e.target.value })
    }

      onSubmit=async (e)=> {
        e.preventDefault()
       const userData = JSON.parse(localStorage.getItem('user'));
        await((this.state.name===userData.name && this.state.name!=="") && (this.state.password===userData.password && this.statepassword!==""))?(this.setState({
                redirect:true
            })):this.setState({
                redirect:false
            })
            
if(this.state.redirect)
{
         
        this.props.history.push('/movieposts')
        
}

else{
window.alert("Invalid credentions!!! New user  Please register")
}

        }
    



    

   

    render() {
        return (
            <div className="container">
                <form onSubmit={(e)=>this.onSubmit(e)}>
                    
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={(event)=>this.onChangeName(event)} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" value={this.state.password} onChange={(event)=>this.onChangePassword(event)} />
                    </div>
                    <button type="submit" className="btn btn-primary bte-block" >Login</button> 
                                       {!this.state.redirect && <Link to="/register" className="btn btn-link">Register</Link>}
                                      {/*{this.state.redirect && <MoviePosts/>}*/}
                </form>
                
            </div>
        )
    }

}
export default Login ;