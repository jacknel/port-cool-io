import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>
        Follow me on{' '}
        <a href="{}">GitHub</a>,{' '}
        <a href="mailto:{}">Email</a>, and{' '}
        <a href="{}">Instagram</a>
      </p>
      <p>&copy; {new Date().getFullYear()} jacknel </p>
    </footer>
  );
};

export default Footer;
