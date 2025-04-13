import './../styles/App.css';
import { Typography, Box, Stack } from '@mui/material';
import CategorySelection from './CategorySelection';
import React, { useState } from 'react';
import CategoryButton from './CategoryButton';

function App() {
  const [selectedGame, setSelectedGame] = useState("smg1");

  return (
    <div id="maincontent">
      <Typography variant="h2" align="center" color="primary" sx={{ fontWeight: "bold", margin: "20px 0" }}>
        Super Mario Galaxy <br />
        Combined Leaderboards
      </Typography>

      <Stack direction="row" spacing={10}>
        <CategoryButton category="Super Mario Galaxy" isSelected={selectedGame === "smg1"} onClick={() => setSelectedGame("smg1")}/>
        <CategoryButton category="Super Mario Galaxy 2" isSelected={selectedGame === "smg2"} onClick={() => setSelectedGame("smg2")}/>
      </Stack>

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
        <CategorySelection game={selectedGame}/>
      </Box>
    </div>
  );
}

export default App;
