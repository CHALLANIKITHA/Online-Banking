import React,{Component} from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import 'font-awesome/css/font-awesome.min.css';
import 'materialize-css/dist/css/materialize.min.css';
// import { Button, Card, Row, Col } from 'react-materialize';
export class Account extends Component{
    render(){
        return(
           <div class="container head text-center mt-5">
                <div class="row text-center">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="card heading">
                        {/* <div class="card-image"> */}
                        <span><i class="fa fa-globe"></i>Nesla Bank</span>
                        {/* </div> */}
                        <div class="card-content">
                        <h4>Account Opening Form</h4>
                        <h6>* Required</h6>
                        </div>
                    </div>
                    </div>
                </div>
           </div>
        );
    }
}


