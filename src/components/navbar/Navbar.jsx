
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuMaxHeight from "./Menu";
import { IconShoppingCart } from "@tabler/icons-react";
import { Link } from "react-router-dom";


const Navbar = () => {
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
      <IconShoppingCart color="white" size={28}/>
      </Link>
      </IconButton>
    </Toolbar>
  </AppBar>
  );
};

export default Navbar;
