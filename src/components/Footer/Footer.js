import React, { Component } from 'react';
import "./styles.css";

class Footer extends Component {

    constructor(props) {

        super(props);

    }

    render() {
        return (
            <div>
                <footer className="footer-outer-ctr">
                    <div className="footer-inner-ctr">
                        <div className="footer-seperation">
                            <span>Built by Callum</span>
                            <span>Property of instructorsyte LTD</span>
                            <span>&copy; 2022</span>
                        </div>
                        <div className="footer-seperation">
                            <span>Testing 1</span>
                            <span>Testing 2</span>
                            <span>Testing 3</span>
                        </div>
                        <div className="footer-seperation">
                            <span>Testing 1</span>
                            <span>Testing 2</span>
                            <span>Testing 3</span>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }

}

export default Footer;