import React from "react";
import { connect } from 'react-redux';
import ReferenceCard from "./ReferenceCard";

const ReferenceList = ({ data }) => (
  <ul>
    {data.map(entity => (
      <ReferenceCard key={entity.key} id={entity.key} {...entity} />
    ))}
  </ul>
);
export default ReferenceList;
