import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './locator.css'
export default class Locator extends Component {
    render() { 
        return (
           <div className='container-fluid text-center'>
            <div class="row">
              <div className='locate col-lg-6'>
                  <h1>Locate the Bank</h1>
                  <img class="map" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201808/map-1272165_960_720_0.png?tQdEyUmhu9FhU8KClLqFsfW60yI5QJdY&size=770:433"/>
              </div>
              <div className='col-lg-6 locator'>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15311.846766478699!2d80.44377735!3d16.37591375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1652699557467!5m2!1sen!2sin" width="100%" height="700" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            </div>
        );
    }
}