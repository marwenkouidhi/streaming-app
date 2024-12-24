import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { IGameCardProps } from './game-card.types';
import { StarIcon } from 'lucide-react';

const GameCard = (props: IGameCardProps) => {
  const { game } = props;

  return (
    <Card className="max-w-lg bg-card/20 border-none">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="bg-white/20 flex items-center space-x-2 p-2 rounded-full">
            <img
              src={game.homeTeamLogo}
              alt={game.homeTeam}
              className="h-10 w-10 object-contain"
            />
            <p>VS</p>
            <img
              src={game.awayTeamLogo}
              alt={game.awayTeam}
              className="h-10 w-10 object-contain"
            />
          </div>
          <StarIcon className="text-white inline-block" />
        </div>
      </CardHeader>
      <CardContent></CardContent>
      <pre>{JSON.stringify(game, null, 2)}</pre>
    </Card>
  );
};

export default GameCard;
