import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import "./styles.css";

class Main extends Component {

    constructor(props) {

        super(props);

    }

    render() {
        return (
            <div>
                <Navigation />
                <section className="landing-section">
                    <div className="landing-section-inner-ctr">
                        <div className="landing-section-content-wrapper">
                            <h1>Hello instructors</h1>
                            <h2>This is the next step</h2>
                            <p>Slingshot your career with a custom, modern website that is sure to impress your clients</p>
                            <button className="button-cta">I'm ready</button>
                        </div>
                    </div>
                </section>
                <section className="process-section">
                    <div className="process-section-outer-ctr">
                        <div className="process-info">
                                <h1>Our service</h1>
                                <h2>We know setting up website sounds difficult, so leave it to us. We will create your site from start to finish leaving you with plenty of time to do the things you actually want to do.</h2>
                        </div>
                        <div className="process-section-inner-ctr">
                            <div className="process-step">
                                <i class="fa fa-pen"></i>
                                <h1>Design</h1>
                                <h2>We will design your site from top to bottom with your help to ensure it is exactly what you envisioned.</h2>
                            </div>
                            <div className="process-step">
                                <i class="fas fa-code"></i>
                                <h1>Develop</h1>
                                <h2>We will build your site using modern web technologies to provide peak performance and universal compatibility.</h2>
                            </div>
                            <div className="process-step">
                                <i class="fa fa-globe"></i>
                                <h1>Deploy</h1>
                                <h2>We will handle the deployment of your website the the internet, so you can just keep driving!</h2>
                            </div>
                        </div>
                        <div className="process-price-info">
                                <h2>At <font style={{fontWeight: 'bold'}}>instructorsyte</font>, we offer great prices on our services and we know it's a huge factor when thinking about building a website. Please don't hesitate to check out our plans.</h2>
                                <button className="button-cta">Pricing</button>
                        </div>
                    </div>
                </section>
                <section className="about-section" >
                    <div className="about-section-outer-ctr">
                        <div className="about-section-inner-ctr">
                            <div className="main-img">
                                <img src="/assets/images/selfie.png" alt="" />
                            </div>
                            <div className="about-section-info">
                                <h1>About us</h1>
                                <h2>Based in Crewe, Cheshire and founded by student Callum Fortune, instructorsyte is designed to help driving instructors increase their web presence, without paying extreme prices or needing extensive internet knowhow.</h2>
                                <button className="button-cta">Read more</button>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }

}

export default Main;