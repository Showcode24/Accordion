import React from 'react';
import PropTypes from 'prop-types';

const AccordionRadioButtons = ({ onChange }) => (
  <div className="radio-buttons">
    <label htmlFor="single">
      <input
        type="radio"
        id="single"
        name="accordionType"
        value="single"
        onChange={onChange}
      />
      Single
    </label>
    <label htmlFor="multiple">
      <input
        type="radio"
        id="multiple"
        name="accordionType"
        value="multiple"
        onChange={onChange}
        defaultChecked
      />
      Multiple
    </label>
  </div>
);

AccordionRadioButtons.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default AccordionRadioButtons;
