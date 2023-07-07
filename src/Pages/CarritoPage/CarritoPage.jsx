import React, { useEffect, useState } from 'react'
import './CarritoPage.css'

// DOM
import { Link } from 'react-router-dom'

// Context
import { useContext } from 'react'
import { ItemsContext } from '../../context/ItemsContext/ItemsContext'

// Firebase
import { db } from '../../firebase/firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'

// Component
import Cart from '../../components/Cart/Cart'
import CartTotal from '../../components/CartTotal/CartTotal'


// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const purchases = {
  name: "",
  lastName: "",
  address: "",
  cp: "",
  city: "",
  products: "",
}

const CarritoPage = () => {
  const { cart, setCart } = useContext(ItemsContext);
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = useState(purchases);
  const [month, setMonth] = React.useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const VaciarCarro = () => {
    setCart([]);
  };

  const completarPedido = (event) => {
    const form = document.getElementById('checkout');
    if (form.checkValidity()) {
        
    } else {
        form.reportValidity();
    }
  }

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    values.products = cart
    setValues({ ...values, [name]: value, products: cart})
  }

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "purchasesCheckout"), {
      values,
    });
    setValues(purchases);
    setCart([])
    setTimeout(() => {
      document.getElementById('checkout-confirm').style.display= 'block';
      const addElement = document.getElementById('checkout-confirm');
      addElement.innerHTML = `
        <p>Gracias por la compra. ID del pedido: ${docRef.id}</p>
      `;
    }, "1000");
    handleClose()
    setTimeout
  }

  return cart.length > 0 ? (
    <div>
        <h1 className='title'>Carrito</h1>
        <Cart />
        <CartTotal name="products" />
        <Link to="/">
            <button className='btn-normal btn-inicio'>Volver a inicio</button>
        </Link>
        <button onClick={ () => VaciarCarro() } className='btn-normal btn-vaciar'>Vaciar carrito</button>
        <button onClick={ () => handleOpen() } className='btn-normal btn-finalizar'>Finalizar pago</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Checkout
            </Typography>
            <Typography id="modal-modal-description" component={'span'} sx={{ mt: 2 }}>
            <form id='checkout' onSubmit={onSubmit}>
              <div className='position-form form'>
                <div className="nombreModal form-width">
                  <label className='input_label' htmlFor="nombre">Nombre:</label>
                  <TextField
                    placeholder='Ingresa tu nombre'
                    className='input_position'
                    inputProps={{ pattern:"[a-zA-Z ]+", minLength:"3", maxLength:"20" }}
                    name="name"
                    value={values.name}
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <div className="apellidoModal form-width">
                  <label className="input_label" htmlFor="apellido">Apellido:</label>
                  <TextField
                    placeholder='Ingresa tu apellido'
                    className='input_position'
                    inputProps={{ pattern:"[a-zA-Z ]+", minLength:"3", maxLength:"20" }}
                    name="lastName"
                    value={values.lastName}
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <div className="tarjetaModal form-width">
                  <label className="input_label tarjeta" htmlFor="tarjeta"> Tarjeta de debito/credito:</label>
                  <TextField
                    placeholder='Ingresa la tarjeta (todo junto)'
                    className='input_position' 
                    inputProps={{ pattern:"[0-9 ]+", minLength:"16", maxLength:"16" }}
                    required
                  />
                </div>
                <div className="cvvModal form-width">
                  <label className="input_label cvvt" htmlFor="CVV" >CVV:</label>
                  <TextField
                    placeholder='Ingrese el CVV'
                    className='input_position'
                    inputProps={{ pattern:"[0-9 ]+", minLength:"3", maxLength:"4"  }}
                    required
                  />
                </div>
                <div className="vencimientoModal form-width">
                  <label className="input_label" htmlFor="fecha">Vencimiento:</label>
                  <div className='margin-ven'>
                  <Select
                  placeholder='1'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    className='"input_sector mespad"'
                    value={month}
                    label="month"
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                  </Select>
                  <TextField
                    placeholder='Año'
                    className='input_position aniowidth'
                    inputProps={{ pattern:"[0-9 ]+", minLength:"2", maxLength:"2"  }}
                    required
                  />
                  </div>
                </div>
                <div className="direccionCliente form-width">
                  <div className="direcCliente">
                    <label className="input_label" htmlFor="direccion">Direccion:</label>
                    <TextField
                      placeholder='Ingresa su direccion'
                      className='input_position'
                      inputProps={{ pattern:"[a-zA-Z1-9 ]+", minLength:"3", maxLength:"40" }}
                      name='address' 
                      value={values.address} 
                      onChange={handleOnChange}
                      required
                    />
                  </div>
                  <div className="CPCliente">
                    <label className="input_label cp" htmlFor="direccion">Codigo postal:</label>
                    <TextField
                      placeholder='Ingresa su CP'
                      className='input_position cp-width'
                      inputProps={{ pattern:"[0-9 ]+", minLength:"3", maxLength:"4"  }}
                      name='cp' 
                      value={values.cp} 
                      onChange={handleOnChange}
                      required
                    />
                  </div>
                  <div className="localidadCliente">
                    <label className="input_label" htmlFor="direccion">Localidad:</label>
                    <TextField
                      placeholder='Ingresa su localidad'
                      className='input_position'
                      inputProps={{ pattern:"[a-zA-Z ]+", minLength:"3", maxLength:"20" }}
                      name='city' 
                      value={values.city} 
                      onChange={handleOnChange}
                      required
                    />
                  </div>
                  </div>
                    <button type='submit' onClick={(e) => completarPedido(e)} className='btn-pagar btnposition'>Pagar</button>
                    <button onClick={handleClose} className='btn-close'>Cerrar</button>
              </div>
            </form>
            </Typography>
          </Box>
        </Modal>
    </div>
  ) : (
    <div>
      <h1 className='title'>Carrito</h1>
      <h2 className='cart-info'> No hay productos en el carrito... </h2>
      <CartTotal />
      <Link to="/">
            <button className='btn-normal btn-inicio'>Volver a inicio</button>
      </Link>
      <div id='checkout-confirm'>
        
      </div>
    </div>
  );
}

export default CarritoPage