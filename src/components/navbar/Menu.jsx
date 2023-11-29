// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import { IconMenu2 } from '@tabler/icons-react'
import { NavLink } from 'react-router-dom'

// ** Icon Imports
/* import Icon from 'src/@core/components/icon' */

const options = [
  'Home',
  'Componentes de PC',
  'Videojuegos y Consolas',
  'PC Armadas',
  'Sillas Gamer',
  'Periféricos',
]
const ITEM_HEIGHT = 500

const MenuMaxHeight = () => {
  // ** State
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      {/* <IconButton aria-label='more' aria-controls='long-menu' aria-haspopup='true' onClick={handleClick}>
        
      </IconButton> */}
      <IconButton
          color="inherit"
          aria-label='more' 
          aria-controls='long-menu' 
          aria-haspopup='true'
          onClick={handleClick}
        >
          <IconMenu2 />
        </IconButton>
      <Menu
        keepMounted
        id='long-menu'
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200
          }
        }}
      >
        {options.map(option => (
          <MenuItem key={option} /* selected={option === 'Pyxis'} */ onClick={handleClose}>
            <NavLink to={option === 'Home' ? '/' : `/category/${option}`} style={{color:'#000'}}>
            {option}
            </NavLink>
          </MenuItem>

        ))}
      </Menu>
    </div>
  )
}

export default MenuMaxHeight

