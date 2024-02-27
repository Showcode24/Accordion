import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

const AccordionItem = ({ item, isOpen, onToggle }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onToggle();
    }
  };

  return (
    <li className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <div className="plus-icon">
        <button
          type="button" // Add type attribute
          onClick={onToggle}
          onKeyDown={handleKeyPress}
          tabIndex={0}
          aria-label={item.title}
        >
          {item.title}
        </button>
        <FaPlus
          onClick={() => onToggle(item.id)}
          onKeyDown={handleKeyPress}
          tabIndex={0}
          aria-label="Toggle"
        />
      </div>

      {isOpen && <p>{item.description}</p>}
    </li>
  );
};

AccordionItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default AccordionItem;
