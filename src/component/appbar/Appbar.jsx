
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
const Appbar = () => {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'white'}}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} style={{backgroundColor:'magenta'}}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div" style={{color:'magenta'}}>
            Otorrinolaringologo
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Appbar