import React, { useState } from 'react';
import CategoryButton from './CategoryButton';
import { Stack, Typography } from '@mui/material';
import * as config from './configs';
import Leaderboard from './Leaderboard';

const CategorySelection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [characterId, setCharacterId] = useState(null);

  const handleCategoryClick = (category) => {
    setCategoryId(config.CAT_NAME_TO_ID[category]);
    setSelectedCharacter(null);
    setSelectedCategory(category);
  };

  const handleCharacterClick = (character) => {
    if(selectedCategory === 'any'){
        setCharacterId(config.CHAR_NAME_TO_ID_ANY[character]);
    }
    else if(selectedCategory === '120'){
        setCharacterId(config.CHAR_NAME_TO_ID_120[character]);
    }

    setSelectedCharacter(character);
  }

  return (
    <div>
    <Stack spacing={2} direction="row" sx={{"justifyContent": "space-evenly"}}>
      <CategoryButton
        category="any%"
        isSelected={selectedCategory === 'any'}
        onClick={() => handleCategoryClick('any')}
      />
      <CategoryButton
        category="120"
        isSelected={selectedCategory === '120'}
        onClick={() => handleCategoryClick('120')}
      />
      <CategoryButton
        category="242"
        isSelected={selectedCategory === '242'}
        onClick={() => handleCategoryClick('242')}
      />
    </Stack>

    {(selectedCategory && selectedCategory !== '242') && (
        <Stack spacing={2} direction="row" sx={{"justifyContent": "space-evenly"}}>
            <CategoryButton 
            category="Mario"
            isSelected={selectedCharacter === 'mario'}
            onClick={() => handleCharacterClick('mario')}
            />
            <CategoryButton 
            category="Luigi"
            isSelected={selectedCharacter === 'luigi'}
            onClick={() => handleCharacterClick('luigi')}
            />
        </Stack>
    )}

    {(selectedCategory && (selectedCharacter || selectedCategory === '242')) && (
        <Leaderboard categoryId={categoryId} characterId={characterId}/>
    )}
    </div>
  );
};

export default CategorySelection;
