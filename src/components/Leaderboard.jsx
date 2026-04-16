import React, { useState, useEffect } from 'react';
import { Typography, CircularProgress } from '@mui/material';
import { SRC_BASE_URL } from '../util/configs';
import { getLbDataReduced } from '../util/api';
import { getCachedData, setCachedData } from '../util/cache';
import LeaderboardTable from './LeaderboardTable';

const Leaderboard = ({ currentGameData, category, characterId }) => {
  const [lbData, setLbData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [loading, setLoading] = useState(true);

  const categoryData = currentGameData.categories[category];
  const categoryId = categoryData?.id;
  const modeData = currentGameData.modes;

  const leaderboardType = `${categoryId}-${characterId}`;
  
  function generateQueryParameters() {
    let params = { embed: 'players'};
    
    if(categoryData?.characters?.id){
      params[categoryData.characters.id] = characterId;
    }

    return params;
  }

  useEffect(() => {
    const queryParams = generateQueryParameters();
    const LB_URL = `${SRC_BASE_URL}/leaderboards/${currentGameData.id}/category/${categoryId}`;

    const cachedData = getCachedData(leaderboardType);

    if (cachedData) {
      setLbData(cachedData.data);
      setLastUpdated(new Date(cachedData.timestamp));
      setLoading(false);
    } else {
      const fetchLeaderboardData = async () => {
        setLoading(true);
        try {
          const data = await getLbDataReduced(LB_URL, queryParams, currentGameData.id, modeData);
          setLbData(data);
          setCachedData(leaderboardType, data);
          setLastUpdated(new Date());
        } catch (error) {
          console.error('Failed to fetch leaderboard data', error);
        } finally {
          setLoading(false);
        }
      };

      fetchLeaderboardData();
    }
  }, [category, characterId, leaderboardType]);

  if (loading) {
    return (
      <>
        <CircularProgress/>
        <Typography>Loading...</Typography>
      </>
  )

  }

  if (!lbData || lbData.length === 0) {
    return <Typography>No data available. SRC may not be reachable or there is a problem with your internet connection.</Typography>;
  }

  return (
    <LeaderboardTable lbData={lbData} lastUpdated={lastUpdated}/>
  );
};

export default Leaderboard;
