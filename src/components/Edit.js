import React, {Component} from 'react';
import './Edit.css';

export default class Edit extends Component{
    constructor(props){
        super(props);

        this.state={
            text: props.text
        };
    }

    updateText=(value)=>{
        this.setState({text: value});
    }

    updatePost=()=>{
        const{text}=this.state;
        const{id, updatePostFn, hideEdit}=this.props
        updatePostFn(id,text);
        hideEdit();
    }

    render(){
        const{hideEdit}=this.props;
        const{text}=this.state;
        console.log(this.props)

        return(
            <section>
                <textarea className='inputbox'value={text} 
                onChange={(e)=>this.updateText(e.target.value)}></textarea>
                <div>
                    <button id='edit_cancel' onClick={this.updatePost}>Update</button>
                    <button id='edit_cancel' onClick={hideEdit}>Cancel</button>
                </div>
            </section>
        )
    }

}