import React from 'react';

const AccordionRadioButtons = ({ onChange }) => {


  return (
    <div className="radio-buttons">
      <label>
        <input
          type="radio"
          name="accordionType"
          value="single"
          onChange={onChange}
        />
        Single
      </label>
      <label>
        <input
          type="radio"
          name="accordionType"
          value="multiple"
          onChange={onChange}
          defaultChecked
        // onLoad={clickMultiple}
        />
        Multiple
      </label>
    </div>
  );
};

export default AccordionRadioButtons;
