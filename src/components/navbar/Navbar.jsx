
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import MenuMaxHeight from "./Menu";
import { IconShoppingCart } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const Navbar = () => {

  const {cart} = useContext(CartContext)

  return (
    <AppBar
    sx={{
      width: '100%',
      backgroundColor: '#24586e',
      color: '#white'
    }}
  >
    <Toolbar>
      <MenuMaxHeight />
      
      <Typography
        variant="h5"
        color="inherit"
        sx={{ flexGrow: 1, marginLeft: '16px' }} 
      >
        ByteShop
      </Typography>
      <Link to={'/'} style={{ marginRight: '45%' }}> 
      <img height={90} width={90} alt="logoByteShop" src="/logoByteShopNoBg.png"  /> 
      </Link>
      <IconButton sx={{ marginLeft: '16px' }}> 
      <Link to={'/cart'}>
        <Badge badgeContent={cart.length} color="error">
      <IconShoppingCart color="white" size={28}/>
      </Badge>
      </Link>
      </IconButton>
    </Toolbar>
  </AppBar>
  );
};

export default Navbar;
