import React from 'react';
import './style.css';

export const List = ({children}) =>
{return <ul className="list-group">{children}</ul>};

export const ListItem = ({children}) => {
    return <li className="list-group-item">{children}</li>
}
