import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
      switch(this.props.auth){
        case null:
            return 'Still deciding';
        case false:
            return <li><a href="/auth/google">Login With Google</a></li>
        default:
          return [
            <li key="1"><Payments /></li>,
            <li key="3" style={{margin: '0 10px'}}>
              Credits: {this.props.auth.credits}
            </li>,
            <li key="2"><a href ="/api/logout">Logout</a></li>
          ];
      }
  }


//if there is this.props.user go to /surveys else go to /
  render(){
    console.log(this.props);
    return (
    <nav>
      <div className="nav-wrapper">
        <Link  to = {this.props.user ? '/surveys' : '/'} className="left brand-logo">
          Mail-Ask
        </Link>
        <ul className="right">
          {this.renderContent()}
        </ul>
      </div>
    </nav>
    );
  }
}

function mapStateToProps(state){
  return { auth: state.auth };
}
export default connect(mapStateToProps)(Header);
