import React from 'react';

function Input(props) {
    const {
        name,
        type='text',
        value,
        onChange,
        placeholder
    } = props;

  return (
    <form>
          <div className='form'>
                <input size="40"
                    type={type}
                    name={name} 
                    value={value} 
                    onChange={onChange}
                    placeholder={placeholder}
                />
          </div>
    </form> 
    
  )
}

export default Input;
