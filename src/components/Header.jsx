import * as React from "react";
import styled from "styled-components";

const Header1 = styled.h1`
  text-align: center;
  margin: 30px 0;
  font-size: 32px;

  @media only screen and (max-width: 667px) {
    margin-top: calc(15px + 15 * ((100vw - 320px) / 347));
    margin-bottom: calc(15px + 15 * ((100vw - 320px) / 347));
  }

  @media only screen and (max-width: 500px) {
    font-size: calc(26px + 6 * ((100vw - 320px) / 180));
  }
`;

const Header = () => {
  return <Header1>Users List</Header1>;
};
export default React.memo(Header);
