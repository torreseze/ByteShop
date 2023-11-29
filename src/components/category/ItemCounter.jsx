/* eslint-disable react/prop-types */
import { useContext, useState } from "react";

import { Box, Button, Fab } from "@mui/material";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { CartContext } from "../../context/CartContext";

function ItemCounter({id}) {
  const [counter, setCounter] = useState(1);
  const { addItem } = useContext(CartContext);

  const handleAddCounter = () => setCounter((prev) => prev + 1);
  const handleRemoveCounter = () => counter > 1 && setCounter((prev) => prev - 1);
  return (
    <Box>
      <Box  
      sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:4
        }}>
       
        <Fab variant='extended' sx={{ '& svg': { mr: 1 }, marginTop:'20px' }} onClick={handleRemoveCounter}>
          <IconMinus/>
          {/* Quitar del carrito */}
        </Fab>
          <p style={{fontSize: '1.5rem'}}>{counter}</p>
        <Fab variant='extended' sx={{ '& svg': { mr: 1 }, marginTop:'20px' }} onClick={handleAddCounter}>
          <IconPlus/>
         {/*  Agregar al carrito */}
        </Fab>
      </Box>
      <Button variant="contained" size="large" sx={{background:'#24586e', marginLeft:'270px', marginTop:'20px'}} onClick={()=> addItem(id, counter)}>Añadir al carrito</Button>
    </Box>
  );
}

export default ItemCounter;