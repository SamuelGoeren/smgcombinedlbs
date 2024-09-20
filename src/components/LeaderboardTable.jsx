import React, { useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider
import theme from './../styles/theme'; // Import the custom theme with hover effect

const LeaderboardTable = ({ lbData, lastUpdated }) => {
  const [hoveredRowIndex, setHoveredRowIndex] = useState(null);

  const runRedirect = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <ThemeProvider theme={theme}> {/* Apply the theme here */}
      <div>
        {lastUpdated && (
          <Typography variant="body2">
            Last updated: {lastUpdated.toUTCString()}
          </Typography>
        )}

        {/* Leaderboard Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Place</TableCell>
                <TableCell>Runner</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Mode</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lbData.map((row, index) => (
                <TableRow
                  key={index}
                  onClick={() => runRedirect(row.weblink)}
                >
                  <TableCell>{row.place}</TableCell>
                  <TableCell>{row.runner}</TableCell>
                  <TableCell>{row.time}</TableCell>
                  <TableCell>{row.mode}</TableCell>
                  <TableCell>{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </ThemeProvider>
  );
};

export default LeaderboardTable;
