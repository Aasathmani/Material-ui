import { Container, Grid, Typography } from '@mui/material';
import MyAppBar from './Components/MyAppBar';
import MyButton from './Components/MyButton';

const App = ()=>{
  return (
    <>
      <MyAppBar />
      <Container>
        <Grid container spacing={3} justifyContent="center" alignItems="center" style={{ marginTop: '20px' }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4">Welcome to My App</Typography>
            <Typography variant="body1">
              This is a basic example of a responsive layout using Material-UI's Grid system.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <MyButton />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
