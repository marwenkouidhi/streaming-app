import CountriesList from '@/features/countries/countries-list/countries-list';
import CompetitionsList from '@/features/competition/compitions-list/competition-list';
import GamesList from '@/features/games/games-list/games-list';
import TransfersList from '@/features/games/transfers/transfers-list/transfers-list';

export default function Home() {
  return (
    <div className="mx-auto grid h-full max-w-screen-2xl grid-cols-12 gap-5">
      <div className="col-span-2 h-full divide-y border-r">
        <CompetitionsList />
        <CountriesList />
      </div>

      <div className="col-span-7 space-y-5 py-5">
        <img
          src="/banner.png"
          alt="banner"
          className="h-96 w-full rounded-2xl object-cover"
        />
        <GamesList />
      </div>

      <div className="col-span-3 py-5">
        <TransfersList />
      </div>
    </div>
  );
}
