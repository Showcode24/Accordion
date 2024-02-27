import React from 'react';
import { FaPlus } from 'react-icons/fa';

const AccordionItem = ({ item, isOpen, onToggle }) => {
  return (
    <li key={item.id} className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <div className="plus-icon">
      <h1 onClick={onToggle}>{item.title}</h1>
      <FaPlus onClick={() => onToggle(item.id)} />
      </div>
      
      {isOpen && <p>{item.description}</p>}
      
    </li>
  );
};

export default AccordionItem;
