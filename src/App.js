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
          width: {
            xs: '90vw',
            sm: '50vw',
          },
          textAlign: 'center',
          backgroundColor: '#151B23',
          padding: '20px',
          border: '1px solid #2A2F3E'
        }}
      >
        <CategorySelection />
      </Box>
    </div>
  );
}

export default App;
