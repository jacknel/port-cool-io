import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio Page</h1>
        <div style = {
            {
                display: 'flex',
                alignItems: 'center',
                padding: '9px'
            }
        }>
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default Portfolio;
