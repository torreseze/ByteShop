/* eslint-disable react/prop-types */
import { Box, Card, CardContent, TextField, Typography } from '@mui/material';

import ItemCounter from './ItemCounter';



const ItemDetail = ({item}) => {
  

  return (
    <Card sx={{width:'750px', height:'100vph', display: 'flex', justifyContent: 'center', marginLeft:'500px', marginTop:'3rem' }}>
      <CardContent>
        <Typography variant="h4" component="div">
          {item.name ? item.name : 'ITEM 1'}
        </Typography>
        <Box
          sx={{
            width:'100%',
            height:'430px',
            borderRadius: '1rem',
            backgroundColor: '#f4f4f499',
            position:'relative',
            marginBottom:'2rem',
            marginTop:'2rem'
          }}
        >
          <img width={'100%'} height={'100%'} src={item.img} style={{objectFit:'contain', borderRadius:'1rem'}} loading="lazy"/>
        </Box>
         
        <Typography variant="h5" sx={{marginTop:'20px'}}>
          Precio: ${item.price ? item.price : '10000'}
        </Typography>

        <ItemCounter id={item.id} />

        <Typography variant="h5" sx={{marginTop:'20px'}}>
          Descripción:
        </Typography>

        <TextField
          maxRows={8}
          multiline
          sx={{width:'100%', marginTop:'15px'}}
          variant='filled'
          id='textarea-filled-static'
          defaultValue={item.desc}
          disabled
        />
      </CardContent>
    </Card>
  );
};

export default ItemDetail;