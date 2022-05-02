import React,{Component} from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import 'font-awesome/css/font-awesome.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Create1 } from "./create1";
// import { Button, Card, Row, Col } from 'react-materialize';
export class Create extends Component{
    render(){
        return(
           <div class="container body">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                    <form>
                    <div class="card">
                    <div class="input-field col s12">
                        <h6>{this.props.id}</h6>
                        <input placeholder={this.props.place} id="first_name" type={this.props.txt} class="validate"/>
                    </div>
                    </div>
                    </form>
                    </div>
                </div>
           </div>
        );
    }
}