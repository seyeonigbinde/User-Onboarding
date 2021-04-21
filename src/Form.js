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
          <div>{errors.fullName}</div>
          <div>{errors.email}</div>
          <div>{errors.pwd}</div>
          </em>
        </div>
      <div>
        <label>Name
          <input
            type="text"
            value={values.fullName}
            onChange={onChange}
            name="fullName"
            placeholder="Full Name"
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
          <button disabled={!values.fullName || !values.email || !values.role}>submit</button>
        </div>
      </div>
    </form>
  )
}
