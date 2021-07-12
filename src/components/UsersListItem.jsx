import * as React from "react";
import styled from 'styled-components';

const UserDetailFaded =styled.span`
padding: 1rem 5px;
font-size:1rem;
color: grey;
  @media only screen and (max-width: 500px) {
    font-size: 0.8rem;
    padding: 3px;
  }
`
const UserDetailRegular = styled.span`
padding: 1rem 5px;
font-size: 1.2rem;
white-space: nowrap;
    @media only screen and (max-width: 500px) {
      font-size: 1rem;
    }
`

const User = styled.li`
line-height: 2;
@media only screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.5;
    padding: 1rem 0;
    //& span {padding:0 5px;}
    & span {padding:0 5px; line-height:1.4;}
    & span:first-child {
      align-self: center;
    }
  }
`
const formatUserData = {
  id: num => `${num.toString()}.`,
  nam: str => str,
  userName: str => `@${str}`,
};


let UsersListItem = props => {
  const { user, index } = props;

  return (
      <User key={index}>
      {user.id && <UserDetailFaded>{formatUserData['id'](user.id)}</UserDetailFaded>}
      {user.name && <UserDetailRegular>{formatUserData['nam'](user.name)}</UserDetailRegular>}
      {user.username && <UserDetailFaded>{formatUserData['userName'](user.username)}</UserDetailFaded>}
    </User>
  );
};

export default UsersListItem;
