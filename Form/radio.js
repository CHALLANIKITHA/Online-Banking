import React,{Component} from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import 'font-awesome/css/font-awesome.min.css';
import 'materialize-css/dist/css/materialize.min.css';
export class Radio extends Component{
    render(){
        return(
           <div class="container body">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="card">
                        <h6>Type of Bank account*</h6>
                        <form action="#">
                            <p>
                            <label>
                                <input name="group1" type="radio"/>
                                <span>Savings Account</span>
                            </label>
                            </p>
                            <p>
                            <label>
                                <input name="group1" type="radio" />
                                <span>Current Account</span>
                            </label>
                            </p>
                            <p>
                            <label>
                                <input  name="group1" type="radio"  />
                                <span>Fixed deposit account</span>
                            </label>
                            </p>
                            <p>
                            <label>
                                <input name="group1" type="radio" />
                                <span>Salary account</span>
                            </label>
                            </p>
                        </form>
                    </div>
                    </div>
                </div>
           </div>
        );
    }
}