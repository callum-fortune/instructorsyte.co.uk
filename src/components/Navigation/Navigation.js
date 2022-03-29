import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleOpen : false
        }
    }

    toggleNav = () => {
        return this.setState({toggleOpen: !this.state.toggleOpen});
    }

    render() {
        return (
            <header className={'nav nav-outer-ctr '+`${window.scrollY > 5 ? 'nav-scrolled' : ''}`}>
                <div className="nav-inner-ctr">
                <h1>instructorsyte<font style={{fontSize: "0.7em"}}>.co.uk</font></h1>
                <button className="toggle-nav" onClick={this.toggleNav}>{this.state.toggleOpen ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}</button>
                    <ul className={`${this.state.toggleOpen ? 'nav-mobile-open' : ''}`}>
                        <Link className="react-link" to="/">
                            <li><span>Home</span></li>
                        </Link>
                        <Link className="react-link" to="/about">
                            <li><span>About</span></li>
                        </Link>
                        <Link className="react-link" to="/pricing">
                            <li><span>Pricing</span></li>
                        </Link>
                        <Link className="react-link" to="/contact">
                            <li><button className="button-cta"><span>Contact</span></button></li>
                        </Link>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Navigation;