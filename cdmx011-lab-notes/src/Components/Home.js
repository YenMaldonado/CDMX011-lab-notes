import React from 'react';
import Logo from '../Images/Logo.png';
import Avatar from '../Images/Avatar.png';

function Home() {
    return (
      
      <><div id = 'barNav'>
        <img src = {Logo} id = 'logo' alt = 'LOGO' />
        <img src = {Avatar} id = 'avatar' alt = 'Avatar Placeholder'/>
        <button id = 'login_btn'>Iniciar Sesión</button>
      </div>

    <form className = 'register_form'>
      <label>Ingresa tu Correo Electrónico</label>
        <input type="email" className ='registerInput'/>
        
      <label>Ingresa una Contraseña</label>
        <input type="password" className ='registerInput' />
        
      <button type = 'submit' id = 'send_btn' >Registrar</button>  
      </form></>
    );
  }
  
  export default Home;