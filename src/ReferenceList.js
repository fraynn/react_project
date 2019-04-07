import React from 'react';
import ReferenceCard from './ReferenceCard';

const ReferenceList = ({data}) => (
    <ul>
        {data.map(element => (
            <ReferenceCard { ...element}/>
        ))}
    </ul>
);
export default ReferenceList;

