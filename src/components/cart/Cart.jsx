/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef } from "react";
import { CartContext } from '../../context/CartContext'
import { Box, Button, Grid } from "@mui/material";
import CardItemCarro from "./CardItemCarro";
import CartForm from "./CartForm";
/* import OrderForm from "../components/OrderForm"; */

function Cart() {
  const {cart, cartItems, fetchCartItems, emptyCart } = useContext(CartContext);

  console.log(cartItems);

  useEffect(()=> {
    if(cart.length > 0) {
      fetchCartItems()
    }
  }, [])

  return (
    <Box sx={{height:'100dvh', marginLeft:'150px', marginTop:'150px'}}>

      <Grid container spacing={4}>
      <Grid item xs={6} >
      {cartItems?.map(item => (
        <div key={item.id} style={{display:'flex', alignItems:'flex-start', justifyContent:'flex-start'}}>
        <CardItemCarro item={item} />
        
        </div>
      ))}
      </Grid>
      <Grid item xs={6} sx={{display:'flex', alignItems:'flex-start', justifyContent:'flex-start'}} >
      <CartForm />
      
      </Grid>
      </Grid>
    </Box>
  );
}

export default Cart;