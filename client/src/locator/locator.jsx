import React,{Component} from 'react';
import ReactDOM from 'react-dom';
export default class Locator extends Component {
    render() { 
        return (
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15311.846766478699!2d80.44377735!3d16.37591375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1652699557467!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        );
    }
}