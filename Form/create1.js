import React,{Component} from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import 'font-awesome/css/font-awesome.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Create } from "./create";
// import { Button, Card, Row, Col } from 'react-materialize';
export class Create1 extends Component{
    state={
        counters:[
            {id:"First Name*",placeholder:"First Name",type:"text"},
            {id:"Last name*",placeholder:"Last Name",type:"text"},
            {id:"Date Of Birth*",placeholder:"DOB",type:"text"},
            {id:"Gender*",placeholder:"Gender",type:"text"},
            {id:"Email",placeholder:"Email",type:"text"},
            {id:"Marital Status(Married-Y/UnMarried-N)",placeholder:"Y/N",type:"text"},
            {id:"Father/Husband/Guardian Name*",placeholder:"Name",type:"text"},
            {id:"Mother name*",placeholder:"Mother Name",type:"text"},
            {id:"Mobile number*",placeholder:"Mobile No",type:"text"},
            {id:"Aadhar Number*",placeholder:"Aadhar No",type:"text"},
            {id:"Occupation/Education",placeholder:"Study",type:"text"},
            {id:"Monthly Salary",placeholder:"Salary",type:"text"},
            {id:"Permanent Address*",placeholder:"Address",type:"text"},
            {id:"Residential Address*",placeholder:"Address",type:"text"},
            {id:"Photo*",placeholder:"photo",type:"file"},
            {id:"Aadhar*",placeholder:"aadhar",type:"file"},
            {id:"Pan card*",placeholder:"Pan card",type:"file"},
            {id:"E-Signature*",placeholder:"Signature",type:"file"},
             
        ],
    };
    render(){
        return(
            <div>
            {this.state.counters.map((counter) => (
                <div>
                  <Create
                     key={counter.id}
                     id={counter.id}
                     place={counter.placeholder}
                     txt={counter.type}
                  ></Create>
                </div>
            ))}
            </div>
        );
    }
}