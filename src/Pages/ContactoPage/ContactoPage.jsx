import React from 'react'
import './ContactoPage.css'
import { useState } from 'react';

// MUI
import { TextField } from '@mui/material';

// Firebase
import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const peticion = {
  name: "",
  lastName: "",
  email: "",
  reason: ""
}

const confirmacion = {
  email: ""
}

const ContactoPage = () => {
  const [contact, setContact] = useState(peticion);
  const [confirm, setConfirm] = useState(confirmacion);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setContact({ ...contact, [name]: value})
  }

  const handleOnChangeConfirm = (e) => {
    const { value, name } = e.target;
    setConfirm({ ...confirm, [name]: value})
  }

  const onSubmit = async (e) => {
    if(contact.email === confirm.email){
      e.preventDefault();
      const docRef = await addDoc(collection(db, "contactRequest"), {
        contact,
      });
      console.log("Document written with ID", docRef.id);
      setContact(peticion);
      setConfirm(confirmacion)
      document.getElementById('confirmation').style.display= 'block';
      document.getElementById('refuse').style.display= 'none';
      const addElement = document.getElementById('confirmation');
      addElement.innerHTML = `
        <p>Numero de contacto: ${docRef.id}</p>
      `;
    }else{
      e.preventDefault();
      document.getElementById('refuse').style.display= 'block';
      document.getElementById('confirmation').style.display= 'none';
      const refuseElement = document.getElementById('refuse');
      refuseElement.innerHTML = `
        <p>El correo es incorrecto, vuelva a intentarlo.</p>
      `;
    }
  }

  return (
    <div>
      <h1 className='title'>Contacto</h1>
      <form action="" className='contact-form' onSubmit={onSubmit}>
        <div className='content-field'>
          <TextField 
            placeholder='Ingrese su nombre'
            className='textfield'
            inputProps={{ pattern:"[a-zA-Z ]+", minLength:"3", maxLength:"20" }}
            name='name'
            value={contact.name}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className='content-field'>
          <TextField 
            placeholder='Ingrese su apellido'
            className='textfield'
            inputProps={{ pattern:"[a-zA-Z ]+", minLength:"3", maxLength:"20" }}
            name='lastName'
            value={contact.lastName}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className='content-field'>
          <TextField 
            type='email'
            placeholder='Ingrese su correo'
            className='textfield'
            name='email'
            value={contact.email}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className='content-field'>
          <TextField
            type='email'
            placeholder='Confirmar correo'
            className='textfield'
            name='email'
            value={confirm.email}
            onChange={handleOnChangeConfirm}
            required
          />
        </div>
        <div className='content-field'>
          <TextField
            className='textfield'
            placeholder='Ingrese el motivo del contacto'
            name='reason'
            value={contact.reason}
            onChange={handleOnChange}
            required
          />
        </div>
        <button className='btn-sendcontact' type='submit'>Enviar</button>
        <div id='confirmation'></div>
        <div id='refuse'></div>
      </form>
    </div>
  )
}

export default ContactoPage;