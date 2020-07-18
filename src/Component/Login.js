import React, { Component } from 'react';
import {Link} from 'react-router-dom'

 



 class Login extends Component {

    constructor(props) {
        super(props);

     

        this.state = {
            email: '',
            password:'',
            redirect:false
        }
    }


   

    onChangeEmail=(e)=> {
        this.setState({ email: e.target.value })
    }

    onChangePassword=(e)=> {
        this.setState({ password: e.target.value })
    }

      onSubmit=async (e)=> {
        e.preventDefault()
       const userData = JSON.parse(localStorage.getItem('user'));
        await((this.state.email===userData.email) && (this.state.password===userData.password))?(this.setState({
                redirect:true
            })):this.setState({
                redirect:false
            })
            
if(this.state.redirect)
{
         
        this.props.history.push('/movieposts')
        
}


        }
    



    

   

    render() {
        return (
            <div className="container">
                <form onSubmit={(e)=>this.onSubmit(e)}>
                    
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={(event)=>this.onChangeEmail(event)} />
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