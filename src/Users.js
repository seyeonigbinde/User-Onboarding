import React from 'react';

function Users({ details }) {
  if (!details) {
    return <h3>Working fetching your user&apos;s details...</h3>
  }

  return (
    <div className='container'>
      <h2>{details.first_name} {details.last_name}</h2>
      <p>Email: {details.email}</p>
    </div>
  )
}

export default Users
