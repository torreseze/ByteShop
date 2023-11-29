// ** MUI Imports

import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

const AppLoader = () => {
  // ** Hook


  return (
    <Box
      sx={{
        height: '100dvh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <img
        src='/logoByteShop.png'
        alt='ByteShopLogoSpinner'
        style={{ width: '150px', height: '150px' }}
      />

      <CircularProgress disableShrink sx={{ mt: 6, color: '#24586e' }} />
    </Box>
  )
}

export default AppLoader