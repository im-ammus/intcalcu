import { useState } from 'react'
import { TextField,Stack,Button} from '@mui/material';
function App() {

  const [interest,setInterest] =useState(0)
  const [principle,setPrinciple]=useState(0)
  const[rate,setRate]=useState(0)
  const[year,setYear]=useState(0)
  const[isprincipleInvalid,setIsprincipleInvalid]=useState(false)
  return (
    <div style={{minHeight:'100vh'}} className="d-flex justify-content-center align-items-center bg-dark">

<div style={{width:'600px'}} className="bg-light rounded p-5 text-center">    
  <h1>Simple Interest Calculator</h1>
<p>Calculate your simple interest Easily!!</p>
<div className="d-flex flex-column justify-content-center align-items-center bg-warning shadow p-3 rounded 
text-light ">
  <h1> ₹ 100</h1>
  <p className="fw-bolder text-dark">Total simple Interest</p>
</div>
{/* {form} */}
<form className="mt-3">
  {/* {principle} */}
  <div className="mb-3">
  <TextField  className='w-100' id="outlined-basic" label="Principle ₹" variant="outlined" />
  </div>
  <div className="mb-3 fw-bolder text-danger ">*Invalid principle input</div>
  <div className="mb-3">
  <TextField  className='w-100' id="outlined-basic" label="Rate of Interest(%)" variant="outlined" />
  </div>
  <div className="mb-3">
  <TextField  className='w-100' id="outlined-basic" label="Time Period (yr)" variant="outlined" />
  </div>
  <Stack direction="row" spacing={2}>
  <Button style={{width:'50%',height:'70px'}} className='bg-dark' variant="contained">Calculate</Button>
  <Button style={{width:'50%',height:'70px'}}  variant="outlined" className='border border-dark text-dark'>Reset</Button>
</Stack>
</form>
</div>
    
    </div>
  )
}

export default App