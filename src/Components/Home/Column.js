import React from 'react';
import {Link} from 'react-router-dom';

const Template = (props) => {
  const button = props.button
    ? <button>{props.button}</button>
    : null;

  return (<div className='column'>
    <img className='column__img' src={props.img} alt={props.alt}/>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    <Link to={props.link}>Let's Get Started</Link>
  </div>)
}
export default Template;
