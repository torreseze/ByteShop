import  { useContext, useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import { Box, Button, TextField, Typography } from "@mui/material";
import toast from "react-hot-toast";


function CartForm() {
  
    const [name, setName] = useState(null)
    const [mail, setMail] = useState(null)
    const {cartItems, totalPrice, emptyCart} = useContext(CartContext)


    const handleNameChange = (e) => {
      setName(e.target.value)
    }

    const handleMailChange = (e) => {
      setMail(e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
  
      const db = getFirestore();
  
      const collectionRef = collection(db, "orders");
  
      const order = {
        userName: name,
        userEmail: mail,
        items: cartItems,
        totalPrice: totalPrice
      }

      addDoc(collectionRef, order)
       .then((res)=> toast.success(`La orden ha sido enviada con éxito, su orden es: ${res.id}`))
       .catch((err) => toast.error( `Hubo un error generando la orden. Intente de nuevo : ${err}`))
    };
  
    return (
      <Box > 
        <form
          onSubmit={handleSubmit}
          style={{display:'flex', flexDirection:'column', gap:'6', alignItems:'center'}}
        >
          <TextField
            label='Nombre'
            value={name}
            type="text"
            sx={{width:'400px'}}
            required
            onChange={handleNameChange}
          />
          <TextField
            value={mail}          
            label='Email'
            type="email"
            sx={{width:'400px', marginTop:'1rem'}}
            required
            onChange={handleMailChange}
          />

          <Typography sx={{ fontWeight: 500, mb: 1, color:'#000', mt:3, fontSize:'1.2rem' }}>
              Precio final:{' '}
              <Box component='span' sx={{ fontWeight: 'bold' }}>
                ${totalPrice}
              </Box>
            </Typography>

          <Button size="large" type="submit" sx={{background:'#24586e', color:'#fff', marginTop:'1rem'}}  variant="contained">Enviar orden</Button>
          
        </form>
        <Button size="large" variant="contained" onClick={emptyCart} sx={{background:'#24586e', color:'#fff', marginLeft:'130px', marginTop:'1rem'}}  >Vaciar carrito</Button>
      </Box>
    );
  }
  
  export default CartForm;
  