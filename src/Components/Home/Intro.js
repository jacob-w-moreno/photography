import React from 'react';
import {Link} from 'react-router-dom';

const Intro = (props) => {
  return (<div className='intro'>
    <h1>{props.primary}</h1>
    <h2>{props.description}</h2>
    <Link to={props.link1}>GET STARTED</Link>
    <h2>{props.secondary}</h2>
    <Link to={props.link2}>CLICK HERE</Link>
  </div>)
}
export default Intro;
