import React from 'react';

import './Card.css';

const Card = (props) => {
  // to add all the classes which are wrapped by card
  const classes = 'card ' + props.className;

    // to wrap our built in elements insdie the card we use the props.children
  return <div className={classes}>{props.children}</div>;
};

export default Card;

// we can't use our custom component as a wrapper around our custom component  
// to build such wrapper we use a special props, which we never set but we set it now as props.children
// value of this children props is the context between the wrapper 