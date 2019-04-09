import React from 'react';

const ReferenceCard = ({ id, title, link, domain, snippet, bookmarked, onClick }) => (
  <li data-id={id}>
    <button
      onClick={onClick}
      style={{ backgroundColor: bookmarked ? '#ED4337' : '#0f70c8' }}
    >
      {!bookmarked ? 'Bookmark' : 'Unbookmark'}
    </button>
    <h2
      style={{
        backgroundColor: bookmarked ? '#0f70c8' : 'white',
        color: bookmarked ? 'white' : 'inherit'
      }}
    >
      <a href={link}>{title}</a>
    </h2>
    <span>{domain}</span>
    <p>{snippet}</p>
  </li>
);

export default ReferenceCard;
