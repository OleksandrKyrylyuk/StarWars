import React from 'react';

import './item-list.css';

const ItemList = (props) => {
 
  const { items, onItemSelected, children: renderName} = props;
   let content =  items.map( (el) => {
      const { id } = el;
    
    const label = renderName(el);
      return (
        <li className="list-group-item" 
            key={id}
            onClick={() => onItemSelected(id)}>
         {label}
        </li>
      )
    }) 


    return (
      <ul className="item-list list-group">
        {content}
      </ul>
    );
}
export default ItemList;


