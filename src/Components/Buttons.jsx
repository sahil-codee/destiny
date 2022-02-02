import { color, style } from '@mui/system';
import React, { useState } from 'react';

function Buttons() {
    const [col, setCol] = useState(false)
   function handleMouseOver() {
       setCol(true);
    }
    function handleMouseOut() {
        setCol(false);
     }

  return (
  <div>
      <button style={{backgroundColor: col ? '#FBFF00' : '#FFD400'}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Sign Up</button>
      <p style={{textAlign: 'center', fontSize: '0.6rem'}}>By signing up, I agree to the <strong>Terms of Service</strong> and <strong>Privacy Policy</strong>.</p>
  </div>
    )
}

export default Buttons;
