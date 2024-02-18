import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
  return (
    <div className='error-center'>
        <h1>Kuch galat hogya !!!</h1>
        <h2>Niche to dekho !!</h2>
        <h3>{err.status}</h3>
        <h3>{err.statusText}</h3>
    </div>
  )
}

export default Error