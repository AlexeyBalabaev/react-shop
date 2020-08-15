import React from 'react';
import classNames from 'classnames';

function Button(props) {
  return (
    <button 
      className={classNames(
        'button', 
        {
          'button--outline': props.outline,
        },
        {
          'button--filled': props.test,
        },
      )}>
      {props.children}
    </button>
  );
}

export default Button;
