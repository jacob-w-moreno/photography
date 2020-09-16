import React from 'react';
// import Header from '../Header/Header';
import Intro from './Intro';
import Columns from './Columns';

const Home = (props) => {
  return (<div className='home'>
    <Intro
      primary="LET'S GET YOU FOUND"
      description="CREATE AN ACCOUNT."
      link1="create account"/>
    <Columns/>
  </div>)
}
export default Home;
