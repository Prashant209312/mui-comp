import './App.css';
import { Grid } from '@mui/material';
import LeftbarComp from './components/LeftbarComp';
import RightCard from './components/RightCard';

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2} sx={{ bgcolor: '#f2f2f2' }}>
        <LeftbarComp />
      </Grid>
      <Grid item xs={10}>
        <RightCard />
      </Grid>

    </Grid>
  );
}

export default App;
