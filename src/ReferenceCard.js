import React from 'react';

const ReferenceCard = ({ id, title, link, domain, snippet }) => (
    <li data-id={ id }>
        <h2>
            <a href={ link }>
                { title }
            </a>
        </h2>
        <span>{ domain }</span>
        <p>{ snippet }</p>
    </li>
)

export default ReferenceCard;