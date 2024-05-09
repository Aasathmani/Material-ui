import { Button } from '@mui/material';

const MyButton =()=>{
  return (
    <Button variant="contained" color="primary" onClick={()=>alert("Submitted successfullly")}>
      Submit
    </Button>
  );
};

export default MyButton;
