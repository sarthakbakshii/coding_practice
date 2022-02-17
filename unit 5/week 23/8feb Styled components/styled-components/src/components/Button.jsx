import React from 'react';

const  Button = ({children, theme}) => {
    console.log(theme);
    
  return (<button style={{
      padding : "5px 10px",
      fontSize : "20px",
       background : theme === 'light'? "black":"white",
       color : theme === 'light'? "white":"black"
  }}>
    {children}
  
  </button>);
}

export default Button;
