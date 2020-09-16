import React from 'react';

const Template = (props) => {
  return (<div className='header'>
    <div className='header__icon'/>
    <header>{props.header}</header>
    <div className='header__icon'/>
  </div>)
}
export default Template;
