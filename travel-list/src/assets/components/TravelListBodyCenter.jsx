import React from 'react';
import { StyledBodyCenter, List } from './styles/TravelList.styles';

const TravelListBodyCenter = ({travelList, onToggle, onDelete}) => {


  return (
    <StyledBodyCenter $totalItems={travelList.length}>
      <ul>
        {travelList.map((item,index) => {
          return (
          <List key={item.id} packingStatus={item.packed}>
            <input type='checkbox' 
              checked={item.packed}
              onChange={() => {
                console.log(item.id)
                onToggle(item.id)}}
              />  
            <span>{item.itemDescription} --  {item.quantity}</span>

            <button onClick={() => {onDelete(item.id)}}>❌</button>
          </List>
        )})}
      </ul>
    </StyledBodyCenter>
  );
}

export default TravelListBodyCenter;
