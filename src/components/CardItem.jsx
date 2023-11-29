/* eslint-disable react/prop-types */

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

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

const CardMobile = ({item}) => {

  return (
    <Card>
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
            <Typography variant='body2' sx={{ mb: 3.5, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
              {item.desc}
            </Typography>
            <Typography sx={{ fontWeight: 500, mb: 3 }}>
              Precio:{' '}
              <Box component='span' sx={{ fontWeight: 'bold' }}>
                ${item.price}
              </Box>
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardMobile