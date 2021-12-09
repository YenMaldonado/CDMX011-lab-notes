import React from 'react';
import Logo from '../Images/Logo.png';
import Avatar from '../Images/Avatar.png';
import {app} from '../Firebase'; 

function Home(props) {
  const sendForm = (e) => {
    e.preventDefault();
    const mail = e.target.inputEmail.value;
    const password = e.target.inputPassword.value;
    console.log(mail, password);
    
    app
    .auth()
    .createUserWithEmailAndPassword(mail, password)
    .then((userFirebase) => {
      console.log('Usuario Registrado:', userFirebase);
      props.setUser(userFirebase);
    })
    .catch((error)=>{
      console.log(error, 'no entra la credencial');
    });
}

return (
  <><div id='barNav'>
    <img src={Logo} id='logo' alt='LOGO' />
    <img src={Avatar} id='avatar' alt='Avatar Placeholder' />
    <button id='login_btn'>Iniciar Sesión</button> 
  </div>

    <form onSubmit={sendForm} className='register_form'>
      <label>Ingresa tu Correo Electrónico</label>
      <input type="email" id='inputEmail' />

      <label>Ingresa una Contraseña</label>
      <input type="password" id='inputPassword' />

      <button type='submit' id='send_btn' >Registrar</button>
    </form></>
);
};

export default Home;