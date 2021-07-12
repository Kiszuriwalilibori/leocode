import * as React from "react";
import styled, {css, keyframes}from 'styled-components'

const animation = keyframes` 
  0% {font-size: 12px;}
  50% {font-size: 32px;}
  100% {font-size:12px;}
  `

  const animationRule = css`
  ${animation} 1s infinite;
`
const Spinner= styled.div`
  display: flex;
  justify-content: center;
  color: rgb(5, 98, 121);
  width:100px auto;
  height:40px;
  animation: ${animationRule};
`

const Loader = React.memo(()=><Spinner>Loading...</Spinner>);
 export default Loader