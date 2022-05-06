import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Blog from './HomePage/Blogs/blogs'
import Footer from './HomePage/Footer/footer.js';
import Transactions from './UserPage/TransactionHistory/Transactions';
import { Service } from './services/service';
import Register from './user_registeration/register'
import Car1 from './carousel/carousel1'; 
import Stat from './stat/stat';
import Header from './navbar/navbar';
import Compliment from './compliments/compliment'
import compliment1 from './compliments/compliments1'
import Compliment1 from './compliments/compliments1';
import Slider from './swiper/slider';
import Offer from './offer/offer';
export default class Home extends Component{
    render() { 
        return (
            <div><Header/><Car1/><Stat/><Slider/><Offer /><Blog/><Footer />
            {/* <Compliment/><Compliment1/><Service/><Register/> */}
            </div>
        );
    }
}