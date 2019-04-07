import React from "react";
import ReferenceCard from "./ReferenceCard";

const ReferenceList = ({ data }) => (
  <ul>
    {data.map(entity => (
      <ReferenceCard key={entity.key} id={entity.key} {...entity} />
    ))}
  </ul>
);
export default ReferenceList;
