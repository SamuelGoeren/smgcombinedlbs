import React, { useState } from 'react';
import CategoryButton from './CategoryButton';
import { Stack } from '@mui/material';
import Leaderboard from './Leaderboard';
import { GAME_DATA } from '../util/configs';

const CategorySelection = ({game}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [characterId, setCharacterId] = useState(null);
  const [showCharacterChoices, setShowCharacterChoices] = useState(false);

  const currentGameData = GAME_DATA[game];

  const handleCategoryClick = (category) => {
    setSelectedCharacter(null);
    setSelectedCategory(category);

    if(currentGameData.categories[category]?.characters){
      setShowCharacterChoices(true);
    } else {
      setShowCharacterChoices(false);
    }
  };

  const handleCharacterClick = (character) => {

    const categoryData = currentGameData.categories[selectedCategory];

    if(categoryData?.characters?.id){
      setCharacterId(categoryData.characters[character])
    }

    setSelectedCharacter(character);
  }

  return (
    <div>
    <Stack spacing={2} direction="row" sx={{"justifyContent": "space-evenly"}}>
      {(currentGameData.categoryOrder.map((catIdent) => {
        const categoryData = currentGameData.categories[catIdent]
        return(
          <CategoryButton
            category={categoryData.name}
            isSelected={selectedCategory === catIdent}
            onClick={() => handleCategoryClick(catIdent)}
          />
        )
      }))}
    </Stack>

    {(showCharacterChoices) && (
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

    {(selectedCategory && (selectedCharacter || !showCharacterChoices)) && (
        <Leaderboard currentGameData={currentGameData} category={selectedCategory} characterId={characterId}/>
    )}
    </div>
  );
};

export default CategorySelection;
