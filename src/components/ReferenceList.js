import React from 'react';
import ReferenceCard from './ReferenceCard';

const ReferenceList = ({ data, toggleBookmark }) => (
  <ul>
    {data.map(ref => (
      <ReferenceCard
        key={ref.key}
        id={ref.key}
        onClick={() => toggleBookmark(ref.key)}
        {...ref}
      />
    ))}
  </ul>
);

export default ReferenceList;
