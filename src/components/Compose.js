import React, {Component} from 'react';
import './Compose.css'

export default class Compose extends Component {
    constructor(props){
        super(props);

        this.state={
            text: ''
        };
    }

    updateText=(event)=>{
        this.setState({text: event.target.value});
    }

    // createPost=()=>{
    //     const{text}=this.state;
    //     const{createPostFn}=this.props;

    //     createPostFn(text);
    //     this.setState({text: ''});
    // }
    render(){
        const{text}=this.state;
            console.log(this.state)
        return(
            <div>
                <textarea class='inputbox'
                onChange={this.updateText}
                value={text}
                />
                <br></br>
                <button onClick={()=> {this.props.createPostFn(text)
                    this.setState({text: ''});
                }}>
                    Post</button>
            </div>
        )
    }
}
