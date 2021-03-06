import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Contact from '../Home/Contract/Contract';
import Footer from '../Home/Footer/Footer';
import Banner from '../../Resorce/Img/Img1.jpg';
import './Care.css';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';

const Care = () => {
    return (
        <div className="care-container">
            <Navbar/>
            <div className="care-items-container text-white py-5">
                <div className="care-about py-3">
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus tellus lorem, a auctor dui rutrum eget. Nulla facilisi. Vivamus consequat neque at nisl facilisis convallis. Sed ut imperdiet massa. Aenean a aliquam justo. Vivamus blandit ipsum non risus dignissim iaculis. Donec posuere vehicula nunc vel lacinia</p>
                </div>
                <div>
                    <iframe className="care-video"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                </div>
                <div className="py-4">
                    <h1 className="text-center">Our Services</h1>
                    <div className="row care-service-container py-3">
                        <div className="col-md-4">
                            <div className="service-item">
                                <p><AddBusinessIcon  className="service-icon"/></p>
                                <h4 className="py-2 service-h4">REPEARING</h4>
                                <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus tellus lorem, a auctor dui rutrum eget. Nulla facilisi. Vivamus consequat neque at nisl facilisis convallis. </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-item">
                                <p><AddBusinessIcon  className="service-icon"/></p>
                                <h4 className="py-2 service-h4">REPEARING</h4>
                                <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus tellus lorem, a auctor dui rutrum eget. Nulla facilisi. Vivamus consequat neque at nisl facilisis convallis. </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-item">
                                <p><AddBusinessIcon  className="service-icon"/></p>
                                <h4 className="py-2 service-h4">REPEARING</h4>
                                <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus tellus lorem, a auctor dui rutrum eget. Nulla facilisi. Vivamus consequat neque at nisl facilisis convallis. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-3 text-center">
                        <input className="btn btn-primary gears-sell-button" type="submit" value="Booked Now"/>
                </div>
            </div>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Care;