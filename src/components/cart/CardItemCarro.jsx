/* eslint-disable react/prop-types */

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { Button, CardActions } from '@mui/material'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { IconTrash } from '@tabler/icons-react'

/* // ** Icon Imports
import Icon from 'src/@core/components/icon' */

// Styled Grid component
const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  [theme.breakpoints.up('md')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

const CardItemCarro = ({item}) => {

  const { removeItem } = useContext(CartContext);

  return (
    <Card sx={{mb:3, width:800}}>
      <Grid container spacing={6}>
        <StyledGrid item md={5} xs={12}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img width={137} height={176} style={{objectFit:'contain'}} alt={item.name} src={item.img} />
          </CardContent>
        </StyledGrid>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            pt: ['0 !important', '0 !important', '1.5rem !important'],
            pl: ['1.5rem !important', '1.5rem !important', '0 !important']
          }}
        >
          <CardContent>
            <Typography variant='h6' sx={{ mb: 2, mt:2 }}>
              {item.name}
            </Typography>
            <Typography variant='body2' sx={{ mb: 3.5, fontSize:'1rem'}}>
              Cantidad items x{item.quantity}
            </Typography>
            <Typography sx={{ fontWeight: 500, mb: 3 }}>
              Precio por unidad:{' '}
              <Box component='span' sx={{ fontWeight: 'bold' }}>
                ${item.price}
              </Box>
            </Typography>
            <Typography sx={{ fontWeight: 500, mb: 1 }}>
              Precio total producto:{' '}
              <Box component='span' sx={{ fontWeight: 'bold' }}>
                ${item.price * item.quantity}
              </Box>
            </Typography>
            
          </CardContent>
          <CardActions>
          
          <Button variant='contained' sx={{ '& svg': { mr: 1 } , fontSize:'15px', background:'#24586e'}} onClick={() => removeItem(item.id)}>
          
          <IconTrash/>
          Quitar del carrito
        </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardItemCarro