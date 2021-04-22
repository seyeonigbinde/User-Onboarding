import React from 'react';

export default function Form (props) {
  const { values, change, submit, disabled, errors  } = props

  const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  }

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  return (
    <form className='container' onSubmit={onSubmit}>

        <div className="errors">
            <em>
          <div>{errors.first_name}</div>
          <div>{errors.last_name}</div>
          <div>{errors.email}</div>
          <div>{errors.pwd}</div>
          </em>
        </div>
      <div>
        <label>First Name
          <input
            type="text"
            value={values.first_name}
            onChange={onChange}
            name="first_name"
            placeholder="First Name"
            maxLength="30"
          />
        </label>

        <label>Last Name
          <input
            type="text"
            value={values.last_name}
            onChange={onChange}
            name="last_name"
            placeholder="Last Name"
            maxLength="30"
          />
        </label>

        <label>Email
          <input
            type='text'
            value={values.email}
            onChange={onChange}
            name="email"
            placeholder="Email Address"
          />
        </label>

        <label>Password
          <input
            type='password'
            value={values.pwd}
            onChange={onChange}
            name="pwd"
            placeholder="Password"
          />
        </label>

        <label>
         Terms of Service
          <input
            type="checkbox"
            name="tos"
            checked={values.tos}
            onChange={onChange}
          />
        </label>

        <div className='submit'>
          <button disabled={disabled}>submit</button>
        </div>
      </div>
    </form>
  )
}
