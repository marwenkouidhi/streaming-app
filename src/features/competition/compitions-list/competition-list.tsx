import { competitions } from '@/data/compitions';
import React from 'react';

const CompetitionsList = () => {
  return (
    <div className="flex flex-col space-y-3 px-2 py-5">
      {competitions.map((competition, _) => (
        <div className="flex cursor-pointer space-x-3 text-sm hover:text-primary">
          <div>{competition.icon}</div>
          <div>{competition.name}</div>
        </div>
      ))}
    </div>
  );
};

export default CompetitionsList;
