import React from 'react';
import PropTypes from 'prop-types';
import './Scroll.css';

const Scroll = ({ children }) => <div className="scroll">{children}</div>;

Scroll.propTypes = {
  children: PropTypes.object,
};
export default Scroll;
