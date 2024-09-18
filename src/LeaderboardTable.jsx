import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const LeaderboardTable = ({lbData, lastUpdated}) => {

    return(
        <div>
        {/* Display last updated time in UTC */}
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
                <TableRow key={index}>
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
    )
}

export default LeaderboardTable;