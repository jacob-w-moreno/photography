import React from 'react';

const Template = (props) => {
  const button = props.button
    ? <button>{props.button}</button>
    : null;

  return (<div className='column'>
    <img className='column__img' src={props.img} alt={props.alt}/>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    {button}
  </div>)
}
export default Template;
