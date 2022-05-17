import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link}  from 'react-router-dom';
import './blogs.css'
class Blog extends Component {
    state = {  } 
    render() { 
        return (
            <div className='container-fluid blog'>
            <div className='row d-flex flex-row'>
                <div className='blog1 d-flex flex-column col-lg-3 col-md-6 col-sm-12'>
                <Link to="/compliments">
                <div className='d-flex icon m-auto align-self-center' id='icon'>
                   <img className=' m-auto' src="https://img.icons8.com/external-others-iconmarket/64/000000/external-smiley-valentines-day-others-iconmarket-5.png"/>
                </div>
                </Link>
                <div style={{"text-align":"center"}} className="mb-5">Compliments</div>
                </div>
                <div className='blog1 col-lg-3 col-md-6 col-sm-12'>
                <Link to="/services">
                <div className='d-flex icon m-auto' id='icon'>
                    <img className=' m-auto' src="https://img.icons8.com/ios/50/000000/talk-male.png"/>
                </div>
                </Link>
                <div style={{"text-align":"center"}} className="mb-5">Services</div>
                </div>
                <div className='blog1 col-lg-3 col-md-6 col-sm-12'>
                <Link to="/complaints">
                <div className='d-flex icon m-auto' id='icon'>
                    <img className=' m-auto' src="https://img.icons8.com/ios/50/000000/sad.png"/>
                </div>
                </Link>
                <div style={{"text-align":"center"}} className="mb-5">Complaints</div>
                </div>
                <div className='blog1 col-lg-3 col-md-6 col-sm-12'>
                <Link to="/Location">
                <div className='d-flex icon m-auto' id='icon'>
                    <img className=' m-auto' src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-google-maps-social-media-justicon-flat-justicon.png"/>
                </div>
                </Link>
                {/* </div> */}
                <div style={{"text-align":"center"}} className="mb-5">Locator</div>
                </div>
                
            </div>
            </div>
        );
    }
}
 
export default Blog;