import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import moment from 'moment';
import Compose from './components/Compose';
import Post from './components/Post';
import Timestamp from './components/Timestamp';
import YouTubePlayer from 'react-player/lib/players/YouTube'


class App extends Component {
  constructor(props){
  super(props)

    this.state={
      posts: [],
      insult: '',
      editing: false,
      editId: '',
      timeStamp: ''
    };
  }
  
  createPost=(text)=>{
    console.log(text)
    axios
      .post('/api/post', {text, timeStamp: moment().format('LLLL')})
      .then(response=>{console.log(response)
       this.setState({timeStamp: moment(), posts: response.data})
    });
  }

  showEdit=(id)=>{
    this.setState({editId: id, editing: true, showMenu: false});
}

  hideEdit=()=>{
    this.setState({editing: false});
}

  updatePost=(id,text)=>{
    axios
      .put(`/api/post/${id}`, {text})
      .then(response=>{this.setState({posts: response.data});
    });
  }

  deletePost=(id)=>{
    axios
    .delete(`/api/post/${id}`)
    .then(response=>{this.setState({posts: response.data});
  });
  }


  render() {
    const{posts}=this.state;
    console.log(this.state.timeStamp._d)
    
    return (
      <div>
        <header>
          <h1>Rude Journal</h1>
          <audio src='./Balktalk.m4a' autoPlay= 'true'/>
        </header>
          <div className="App">
          <YouTubePlayer
                url='https://www.youtube.com/watch?v=tQblSS2kl4Q'
                playing
                controls
              />
            <Compose createPostFn={this.createPost}/>
            {posts[0] && posts.map(post=>(
            <div>
              <Post key={post.id}
                text={post.text}
                date={post.date}
                id={post.id}
                updatePostFn={this.updatePost}
                deletePostFn={this.deletePost}
                insult={post.insult}
                showEdit={this.showEdit}
                hideEdit={this.hideEdit}
                editing={this.state.editing}
                editId={this.state.editId}
              />
              <Timestamp
                timeStamp={post.timeStamp}/>
              </div>
            ))}          
          </div><br></br><br></br>
          <footer>X_X Have a good life X_X</footer>
        </div>
      );
    }
  }

export default App;
