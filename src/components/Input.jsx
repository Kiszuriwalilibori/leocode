import * as React from "react";
import PropTypes from 'prop-types';
import ClearButton from "./ClearButton";

const Input = props => {
  const { inputContent, onInputContentChange, onInputClear } = props;
  return (
  <form className='form main__form'>
    <input 
    type="text" 
    className="form__input" 
    value={inputContent} 
    onChange={onInputContentChange} 
    autoCapitalize="none" 
    placeholder="Search by user name..." />
    <ClearButton
          //isClearButtonVisible={inputContent}
          isClearButtonVisible={!!inputContent.length}
          clearInput={onInputClear}
        />
  </form>
  )
};

export default Input;

Input.propTypes = {
  inputContent: PropTypes.string,
  onInputContentChange: PropTypes.func,
  onInputClear: PropTypes.func
}
