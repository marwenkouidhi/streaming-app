import { CircleArrowRight } from 'lucide-react';
import { ITransferCardProps } from './transfer-card.props';

const TransferCard = ({ data }: ITransferCardProps) => {
  const {
    from_img,
    player,
    player_img,
    to_img,
    transferFee,
    country,
    position,
    age,
  } = data;
  return (
    <div className="flex space-x-3 overflow-hidden rounded-2xl bg-card">
      <img src={player_img} alt={player} className="h-32 w-32 object-cover" />
      <div className="divide-y">
        <div className="py-2">
          <h4 className="text-primary">{player}</h4>
          <div className="flex space-x-3">
            <div>{country}</div>
            <div>∘</div>
            <div>{position}</div>
            <div>∘</div>
            <div>{age} years old</div>
          </div>
        </div>
        <div className="flex items-center justify-between space-x-5 py-2">
          <h4 className="text-primary">{transferFee}</h4>
          <div className="flex items-center space-x-2">
            <img src={from_img} className="h-10 w-10 object-contain" />
            <CircleArrowRight className="text-secondary" />
            <img src={to_img} className="h-10 w-10 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferCard;
