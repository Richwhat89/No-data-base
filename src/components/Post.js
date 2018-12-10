import React from 'react';
import Edit from './Edit'
import './Post.css'

export default function Post(props){
      
        const{text, id, updatePostFn, deletePostFn, showEdit, hideEdit}=props;

        return(
            <section className='mainPost'>
                <div className='mainPostCntr'>
                    <br></br>
                    <div id='edit_delete'>
                        <button onClick={()=>showEdit(id)}>Edit</button>
                        <button onClick={()=>deletePostFn(id)}>Destroy</button>              
                    </div>
                </div>
                <div>
                    <span></span>
                </div>
                <div className='postContent'>
                    {
                        props.editing && props.editId === id?
                            <Edit text={text}
                                id={id}
                                hideEdit={hideEdit}
                                updatePostFn={updatePostFn}/>
                        :
                            <div>
                                <text className='postText'>{text}</text>
                                    <br></br>
                                <div className='quote'>{`"${props.insult}"`}</div>
                            </div>
                    }
                    
                </div>
                
            </section>
        )
    }
