import React from 'react';
import Avatar from '../Images/Avatar.png';

function Login() {
    return (
      <><div id='loginScreen'>
        <img src={Avatar} id='avatar' alt='Avatar Placeholder' />
        <button id='login_btn'>Iniciar Sesión</button>
      </div>
      </>
    );
}

export default Login;