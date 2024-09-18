import React, { useState, useEffect } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { CAT_ANY, CHARACTER_ANY, CAT_120, CHARACTER_120, SRC_BASE_URL, SMG1 } from './configs';
import { getLbDataReduced } from './api';
import { getCachedData, setCachedData } from './cache'; // Import caching functions

const Leaderboard = ({ categoryId, characterId }) => {
  const [lbData, setLbData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [loading, setLoading] = useState(true);

  const leaderboardType = `${categoryId}-${characterId}`; // Create a unique key for each leaderboard type
  
  function generateQueryParameters() {
    let params = { embed: 'players'};

    if (categoryId === CAT_ANY) {
      params[CHARACTER_ANY] = characterId;
    } else if (categoryId === CAT_120) {
      params[CHARACTER_120] = characterId;
    }

    return params;
  }

  useEffect(() => {
    const queryParams = generateQueryParameters();
    const SMG1_LB_URL = `${SRC_BASE_URL}/leaderboards/${SMG1}/category/${categoryId}`;

    // Check cache first
    const cachedData = getCachedData(leaderboardType);

    if (cachedData) {
      // If cache is available, use cached data and set last updated time
      setLbData(cachedData.data);
      setLastUpdated(new Date(cachedData.timestamp)); // Convert timestamp to Date object
      setLoading(false);
    } else {
      // Fetch fresh data if no cache or cache expired
      const fetchLeaderboardData = async () => {
        setLoading(true);
        try {
          const data = await getLbDataReduced(SMG1_LB_URL, queryParams);
          setLbData(data); // Set the fetched data in state
          setCachedData(leaderboardType, data); // Cache the data
          setLastUpdated(new Date()); // Set the current time as the last updated time
        } catch (error) {
          console.error('Failed to fetch leaderboard data', error);
        } finally {
          setLoading(false);
        }
      };

      fetchLeaderboardData();
    }
  }, [categoryId, characterId, leaderboardType]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (!lbData || lbData.length === 0) {
    return <Typography>No data available.</Typography>;
  }

  return (
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
  );
};

export default Leaderboard;
