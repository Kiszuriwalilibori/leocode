import React, { useEffect, useRef } from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import InputClearButton from "./InputClearButton";
import styled from 'styled-components';

const InputArea = styled.input`
padding-left: 14px;
flex-grow: 1;
width: 100%;
background: none;
border: none;
color: #111;
outline: none;  
`
const InputWrapper =styled.form`
  height:54px;
  display: flex;
  position: relative;
  transition: all .1s ease-in-out;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  border-radius: 4px;
  background-color: #f5f5f5;
  margin: 50px 0;

  &:hover {
    box-shadow: 0 0 0 5px rgba(0, 0, 0, .1);
  }
  @media only screen and (max-width: 667px) {
    margin-top: calc(10px + 40 * ((100vw - 320px) / 347));
    margin-bottom: calc(10px + 40 * ((100vw - 320px) / 347));
  }
`

let Input = props => {
  const { inputContent, onInputContentChange, onInputClear, allUsers } = props;
  const focusable = useRef(null);
  const inputDisabled = !(allUsers && allUsers.length)
  useEffect(() => {
    if (focusable) focusable.current.focus()}, [focusable]);
  return (
  <InputWrapper>
    <InputArea 
    type="text" 
    value={inputContent} 
    onChange={onInputContentChange} 
    ref={focusable}
    autoCapitalize="none" 
    disabled = {inputDisabled}
    autoFocus
    placeholder="Search by user name..." />
    <InputClearButton
          isClearButtonVisible={!!inputContent.length}
          clearInput={onInputClear}
        />
  </InputWrapper>
  )
};


const mapStateToProps = state => ({
  allUsers: state.users.allUsers,
})


Input = connect(mapStateToProps, null)(Input);
export default Input;

Input.propTypes = {
  inputContent: PropTypes.string,
  onInputContentChange: PropTypes.func,
  onInputClear: PropTypes.func
}
