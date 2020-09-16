import React from 'react';
// import Header from '../Header/Header';
import Intro from './Intro';
import Columns from './Columns';

const Home = (props) => {
  return (<div className='home'>
    <Intro/>
    <Columns/>
  </div>)
}
export default Home;
