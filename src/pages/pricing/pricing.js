import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import "./styles.css";

class Pricing extends Component {

    constructor(props) {

        super(props);

    }

    render() {
        return (
            <div>
                <Navigation />
                <Footer />
            </div>
        )
    }

}

export default Pricing;