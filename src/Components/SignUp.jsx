import React, {useState} from 'react';
import Input from './Input';

function SignUp() {
    const [val, setVal] = useState({
        fname: '',
        email: '',
        password: ''
    })

    function handleChange(event) {
      event.preventDefault();
        const {name, value} = event.target;

        setVal(preValue => {
            return {
                ...preValue,
            [name]: value
            }
        })
      }
  return (
  <div>
    <form style={{margin: '5% 0 0 0'}}>
      <Input
      type="text"
      placeholder="Name"
      value={val.fname}
      name="fname"
      onChange={handleChange} 
      />
    <Input
      type="email"
      placeholder="Email"
      value={val.email}
      name="email"
      onChange={handleChange}
      />  
    <Input 
      type="password"
      placeholder="Password"
      value={val.password}
      name="password"
      onChange={handleChange}
      />  
      </form> 
  </div>
  )
}

export default SignUp;

