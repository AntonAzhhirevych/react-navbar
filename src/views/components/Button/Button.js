import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export const Button = () => (
  <Link to="sign-up">
    <button className="btn">Sign Up</button>
  </Link>
);
