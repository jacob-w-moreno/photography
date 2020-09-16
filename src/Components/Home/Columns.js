import React from 'react';
import Column from './Column';

const Columns = (props) => {
  return (<div className='main'>
    <h2>Here's How It Works</h2>
    <div className='columns'>
      <Column
        img='https://i.kym-cdn.com/entries/icons/original/000/003/047/omg.jpg'
        title='SEARCH'
        description="Start by adding information like your budget, location, needs, etc., and we'll find a list of photographers who fit what you're looking for."
        button="Let's do this"/>
      <Column
        img='https://i.kym-cdn.com/entries/icons/original/000/003/047/omg.jpg'
        title='FIND'
        description="Browse through all of the photographers until you find one whose style matches your vision."
        button="Let's do this"/>
      <Column
        img='https://i.kym-cdn.com/entries/icons/original/000/003/047/omg.jpg'
        title='CONTACT'
        description="Once you've found the perfect fit, reach out to them! We'll include their email, phone number, and links to their portfolios and social media accounts."
        button="Let's do this"/>
      </div>
  </div>)
}
export default Columns;
