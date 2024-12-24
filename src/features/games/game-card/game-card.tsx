import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { IGameCardProps } from './game-card.types';
import { Monitor, StarIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const GameCard = (props: IGameCardProps) => {
  const { game } = props;
  const {
    awayTeam,
    awayTeamLogo,
    awayTeamScore,
    competition,
    date,
    homeTeam,
    homeTeamLogo,
    homeTeamScore,
  } = game;

  return (
    <Card className="max-w-[300px] border-none">
      <div className="space-y-3 p-4">
        {/* Header with teams and favorite */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={homeTeamLogo} alt={homeTeam} className="h-6 w-6" />
            <span className="text-sm text-gray-400">vs</span>
            <img src={awayTeamLogo} alt={awayTeam} className="h-6 w-6" />
          </div>
          <button className="text-foreground transition-colors hover:text-white">
            <StarIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Competition and time */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">{competition}</span>
          <span className="ml-auto rounded bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-500">
            54'
          </span>
        </div>

        {/* Teams and scores */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-semibold">{homeTeam}</span>
            <span className="font-semibold">{homeTeamScore}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400">{awayTeam}</span>
            <span className="text-gray-400">{awayTeamScore}</span>
          </div>
        </div>

        {/* Viewers section */}
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {[...Array(3)].map((_, i) => {
              const randomNum = Math.floor(Math.random() * 30) + 1; // Generates a random number between 1 and 30
              return (
                <Avatar key={i} className="h-6 w-6 border-2 border-gray-800">
                  <AvatarImage
                    src={`https://i.pravatar.cc/150?img=${randomNum}`}
                  />
                </Avatar>
              );
            })}
          </div>
          <span className="text-sm text-gray-400">
            <div>
              {((Math.random() * (100000 - 10000) + 10000) / 1000).toFixed(1)}k
            </div>
          </span>
          <Monitor className="ml-auto h-5 w-5 text-gray-400" />
        </div>
      </div>
    </Card>
  );
};

export default GameCard;
