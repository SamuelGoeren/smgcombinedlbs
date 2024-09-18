import './App.css';
import { Typography, Box } from '@mui/material';
import CategorySelection from './CategorySelection';

function App() {
  return (
    <div id="maincontent">
      <Typography variant="h2" align="center" color="primary" sx={{ fontWeight: "bold", margin: "20px 0" }}>
        Super Mario Galaxy <br />
        Combined Leaderboards
      </Typography>

      <Box
        sx={{
          width: '50vw',
          boxShadow: 3,
          textAlign: 'center',
          backgroundColor: '#151B23',
          padding: '20px',
        }}
      >
        <CategorySelection />
      </Box>
    </div>
  );
}

export default App;
