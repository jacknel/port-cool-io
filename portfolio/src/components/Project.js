import React from 'react';

const Project = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '300px',
      height: '400px',
      backgroundColor: '#eee',
      borderRadius: '10px',
      padding: '20px'
    }}>
      <img
        src="https://via.placeholder.com/150"
        alt="profile picture"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%'
        }}
      />
      <h3 style={{ marginTop: '20px' }}>Your Name</h3>
      <p>Your Job Title</p>
      <p>Your location</p>
    </div>
  );
};

export default Project;
