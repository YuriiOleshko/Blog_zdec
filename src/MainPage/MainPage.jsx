import React, { Component } from 'react'
import './MainPage.css'
import {NavLink} from 'react-router-dom';
import {fetchData} from '../redux/action/requestAction';
import {openMes} from '../redux/action/messageAction'

import {connect} from 'react-redux';

 class MainPage extends Component {
    componentDidMount () {
        // axios.get('http://content.guardianapis.com/search?api-key=test')
        //   .then(data => console.log(data))
        //   .catch(err=> console.log(err))
        this.props.fetch();
        // this.props.openMes()
        console.log('asasa')
      }
      showPosts = (event) => {
        let id=event.target.id
        this.props.openMes(id)
        // this.props.clearValue()
        console.log(id)
      }
  render() {
    return (
        <div >
        { this.props.blog.length === 0 ? <div>Loading</div> :
                  <div className='wrap'>
                    { this.props.blog.map(el => 
                      <div className='card'  key={el.title}>
  
                          <h3>{el.title}</h3>
                          <h5>{el.userName}</h5>
                          <p>{el.body}</p>
                            <p>{el.author}</p>
                            <p>{el.date}</p>    
                            <NavLink  to={`/Blog_zdec/post/:${el.id}`} ><p id={el.id} className='viePost' onClick={this.showPosts}>View messenge</p></NavLink>
                          </div>)
                    }
          
        </div>
        
      
      
        }
        </div>
      
                    
      
    )
  }
}
function mapStateToProps (state) {
    return {
        blog: state.blog,
        message:state.message
    }
  }

MainPage.protoTypes = {

}
  
  function mapDispatchToProps (dispatch) {
    return {
        fetch: function() {
          dispatch(fetchData())
        },
        openMes: function(id) {
            dispatch(openMes(id))
          },
     
        // clearValue: function() {
        //   dispatch(clearValue())
        // },
        // findPosts: function(blog, text) {
        //   dispatch(findPosts(blog, text))
        // },
        // cleanPaint: function() {
        //   dispatch(cleanPaint())
        // }
    }
  }
  
  export default connect( mapStateToProps, mapDispatchToProps) ( MainPage)