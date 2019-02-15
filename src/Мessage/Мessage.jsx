import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Мessage.css'
import{pushComment} from '../redux/action/messageAction';
import  uuid4 from 'uuid4'
import {NavLink} from 'react-router-dom';
class Messenge extends Component {
    state={
        isLoading:true,
        value:'',
        Load:true
    }
    componentDidMount(){
        console.log(this.props.message)
        if(this.props.message) {
            this.setState({
                Load:false,
            })
        }
    }
    showComment=()=>{
        this.setState(prev=>({
            isLoading:!prev.isLoading
        }))
    }
    handelChange=(ev)=>{
        ev.preventDefault();
        this.setState({value: ev.target.value});
    }
    addCommet=(ev)=>{
        ev.preventDefault();
        let val=this.state.value
    
       let pop=new Date();
       let newDate=pop.toLocaleString()
       console.log(String(pop))
       console.log(String(newDate))
        let comment={body:val,
                        date: String(newDate),
                    id:String(newDate)}
        console.log(comment);
        this.props.comments(comment);
        this.setState({value: ''});
    }
    openArea=()=>{

    }
    render() {
        const{isLoading,Load,value}=this.state
        return (
            
            <div>
                {Load ? <p>LOading</p> :
                // {console.log(this.props.message)}
                <div className='wrap'>
                      <div className='cardPost'  key={this.props.message.title}>
                      <NavLink to='/Blog_zdec/' > <button className='btn'>Latest Posts</button></NavLink>
  
                          <h3>{this.props.message.title}</h3>
                          <h5>{this.props.message.userName}</h5>
                          <p>{this.props.message.body}</p>
                            <p>{this.props.message.author}</p>
                            <p>{this.props.message.date}</p>
                            <div>
                            <p className='openComents' onClick={this.showComment}> Open comments </p>
                            { isLoading ? null:
                            this.props.message.comments.map(el=> <div key={uuid4()} className='coments'><p>{el.body}</p><p className='date'>{el.date}</p></div>)}
                            </div>
                         
                             <form action="">
                            <textarea name="" id="" cols="30" rows="10" onChange={this.handelChange} value={value}  ></textarea>
                            <button className='btnAdd' onClick={this.addCommet} >Add commit</button>
                            </form>
                           
                          </div>
                         
                        
                          </div>
                }
                </div>
        );
    }
}
function mapStateToProps (state) {
    return {
        blog: state.blog,
        message:state.message
    }
  }
  function mapDispatchToProps (dispatch) {
    return {
        comments: function(comment) {
            dispatch(pushComment(comment))
          },
    }}
export default connect( mapStateToProps, mapDispatchToProps) (Messenge);