
// ** MUI Components
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// ** Demo Imports

import { Link } from 'react-router-dom'

// ** Styled Components
const BoxWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw'
  }
}))

const Img = styled('img')(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    height: 450,
    marginTop: theme.spacing(10)
  },
  [theme.breakpoints.down('md')]: {
    height: 400
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: theme.spacing(20)
  }
}))

const Error404 = () => {
  return (
    <Box className='content-center'>
      <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop:'150px' }}>
        <BoxWrapper>
          <Typography variant='h4' sx={{ mb: 1.5, color:'#000' }}>
            Página no encontrada :(
          </Typography>
          <Typography sx={{ mb: 6 , color:'#000'}}>
            Oops! 😖 La URL solicitada no se encuentra en este server.
          </Typography>
          <Button variant='contained' sx={{backgroundColor:'#24586e'}}>
          <Link to='/' style={{color:'#fff'}}>
            Volver a la página principal
          </Link>
          </Button>
          
        </BoxWrapper>
        <Img height='500' alt='error-illustration' src='ups-error-404-ilustracion-concepto-robot-roto.avif ' />
      </Box>
     
    </Box>
  )
}


export default Error404