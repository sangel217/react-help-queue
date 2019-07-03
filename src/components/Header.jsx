import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
          div {
            background-color: #C11BA6;
            font-family: cursive; 
            padding-bottom: 15px;
          }
        `}</style>
      <h1>Help Queue!</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;