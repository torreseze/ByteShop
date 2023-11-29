import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{ bgcolor: "#24586e", color: "white", mt: 5, py: 5, width: "1935px" }}
    >
      <Container maxWidth="xl" sx={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
        <img
          height={90}
          width={90}
          alt="logoByteShop"
          src="/logoByteShopNoBg.png"
          style={{marginLeft:'750px'}}
        />

        <Typography variant="body1" sx={{marginLeft:'630px', marginTop:'2rem'}} >
          © 2023 Mi Sitio Web. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
