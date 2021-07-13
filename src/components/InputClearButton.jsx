import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const InputCleaner = styled.button`
  border: none;
  padding: 0;
  background-color: initial;
  text-align: inherit;
  cursor: pointer;
`;
const InputCleanerIcon = styled.svg`
  padding-right: 14px;
  padding-left: 14px;
  width: 20px;
  height: 20px;
  box-sizing: initial;
  fill: #767676;
  transition: fill 0.1s ease-in-out;
`;

const InputClearButton = props => {
  const { isClearButtonVisible, clearInput } = props;
  return isClearButtonVisible ? (
    <InputCleaner onClick={clearInput}>
      <InputCleanerIcon width="32" height="32" version="1.1" viewBox="0 0 32 32" aria-hidden="false">
        <path d="M25.33 8.55l-1.88-1.88-7.45 7.45-7.45-7.45-1.88 1.88 7.45 7.45-7.45 7.45 1.88 1.88 7.45-7.45 7.45 7.45 1.88-1.88-7.45-7.45z"></path>
      </InputCleanerIcon>
    </InputCleaner>
  ) : null;
};

export default InputClearButton;

InputClearButton.propTypes = {
  isClearButtonVisible: PropTypes.bool,
  clearInput: PropTypes.func,
};
