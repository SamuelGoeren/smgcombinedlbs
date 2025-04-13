import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './../styles/theme';
import { TABLE_HEADER } from '../util/configs';

const LeaderboardTable = ({ lbData, lastUpdated }) => {

  const runRedirect = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        {lastUpdated && (
          <Typography variant="body2">
            Last updated: {lastUpdated.toUTCString()}
          </Typography>
        )}

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {TABLE_HEADER.map((t) => (
                  <TableCell>{t}</TableCell>
                ))}
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
