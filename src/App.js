import React from 'react'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Button from '@mui/material/Button';

function App() {

  const [name, setName] = React.useState('saqlain')
  const [pw, setPw] = React.useState(8)
  return (
    <div>
      {/* how pick value in any input box */}

      <h1>{name} & {pw}</h1>


      <br></br>
      <label htmlFor='name'>Name:{name}</label>

      <input type='text' placeholder='enter your name' name='name' value={name}
      onChange={(e)=>setName(e.target.value)}
      
      ></input>
      <label htmlFor='pw'>Pw:{pw}</label>

      <input type='range' placeholder='enter your age' name='pw' value={pw}
      onChange={(e)=>setPw(e.target.value)} max={200} minx={6}
      
      ></input>

       <TextField id="outlined-basic" label="name" variant="outlined" placeholder='Enter your name' />
        <TextField id="outlined-basic" label="pw" variant="outlined" placeholder='Enter your password' />
      <Button variant="contained" style={{backgroundColor:'yellow', color:'black'}}>copy</Button>

        <Grid size={4}>
          <Typography>Outlined</Typography>
        </Grid>
        <Grid size={8}>
          <DeleteOutlinedIcon />
          <DeleteForeverOutlinedIcon />
        </Grid>
        
        


      
    </div>
  )
}

export default App