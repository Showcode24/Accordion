import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AccordionRadioButtons from './radio_button';
import AccordionItem from './accordionItem';

const Accordion = ({ data }) => {
  const [isOpenMap, setIsOpenMap] = useState({});
  // using an empty object as the initial state provides
  // a flexible and dynamic way to manage the open/closed state of multiple items in a component

  const [accordionType, setAccordionType] = useState('multiple');

  const toggleAccordion = (id) => {
    if (accordionType === 'single') {
      setIsOpenMap({ [id]: !isOpenMap[id] });
    } else {
      setIsOpenMap((prevState) => ({ ...prevState, [id]: !prevState[id] }));
    }
  };

  const handleRadioChange = (e) => {
    setAccordionType(e.target.value);
    setIsOpenMap({}); // This resets accordion state when switching radio button
  };

  return (
    <div className="accordion-container">
      <AccordionRadioButtons onChange={handleRadioChange} />
      <ul className="accordion-list">
        {data.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={isOpenMap[item.id]}
            onToggle={() => toggleAccordion(item.id)}

          />
        ))}

      </ul>
    </div>
  );
};

Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // Add any other properties your 'data' items should have
    }),
  ).isRequired,
};
export default Accordion;
