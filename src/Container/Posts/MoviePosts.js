import React,{Component} from 'react'
import axios from 'axios'
import DisplayPost from '../../Component/DisplayPost/DisplayPost'
import { trackPromise } from 'react-promise-tracker';



class MoviePosts extends Component{

    state={
        posts:[],
        error:false
    }

     headers = {
        'Content-Type': 'application/json',
        'Accept':'*/*',
        'Connection':'Connection'

    };

 manupulate=(response)=>{
    console.log(response.data.result)

}

componentDidMount(){
trackPromise(axios.post('https://cors-anywhere.herokuapp.com/https://hoblist.com/movieList',{
        "category": "movies",
        "language": "kannada", 
        "genre": "all",
        "sort": "voting"},{'Access-Control-Allow-Origin' : '*', 'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS'
    } ).then((response)=>{
                const postsDisplay=response.data.result
                this.setState({
                    posts:postsDisplay
                })
    },(error)=>{
            console.log(error)
            this.setState({
                error:true
            })
        }))
    
    };


render(){
    const Post= {
        width: "auto",
        padding: "16px",
        textalign: "center",
        border: "1px solid #eee",
        boxshadow: "0 2px 3px #ccc",
        margin: "10px",
        boxsizing: "border-box",
        cursor: "pointer",
    }

    let posts1 = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
console.log("hi")
    if(!this.state.error){
       posts1=this.state.posts.map((post)=>{
       return   (  <DisplayPost
                    genre={post.genre}
                    views={post.pageViews}
                    voting={post.voting}
                    title={post.title}
                    director={post.director[0]}
                    stars={post.stars[0]}
                    imp={post.poster}
                    vote={post.totalvoted}
                    
                    style={Post}/>)

        } )}
    return(
        <div>

           {posts1}
        </div>
    )
}

}


export default MoviePosts