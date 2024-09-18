import './App.css';
import { Typography, Box, Stack } from '@mui/material';
import CategoryButton from './CategoryButton';
import CategorySelection from './CategorySelection';

function App() {
  return (
    <body id="maincontent">
      <div>
        <Typography variant="h2" align="center" color="primary" sx={{ fontWeight: "bold" }}>
          Super Mario Galaxy <br />
          Combined Leaderboards
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Box
            sx={{
              width: '50vw',
              height: '100%',
              border: '1px solid red',
              boxShadow: 3,
              textAlign: 'center',
            }}
          >
            <CategorySelection></CategorySelection>
          </Box>
        </Box>


      </div>
    </body>
  );
}

export default App;
