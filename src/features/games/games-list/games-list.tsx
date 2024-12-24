import { games } from '@/data/games';
import React from 'react';
import GameCard from '../game-card/game-card';

const GamesList = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {games.map((game, _) => (
        <GameCard game={game} />
      ))}
    </div>
  );
};

export default GamesList;
