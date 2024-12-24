import { transfers } from '@/data/transfer';
import TransferCard from '../transfer-card/transfer-card';

const TransfersList = () => {
  return (
    <div className="space-y-5">
      <h3 className="text-primary">Trending Transfer Deals ⚡️</h3>
      {transfers.map((transfer, _) => (
        <TransferCard data={transfer} />
      ))}
    </div>
  );
};

export default TransfersList;
