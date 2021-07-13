import React from "react";
import {connect} from "react-redux";
import UsersListItem from "./UsersListItem";
import FadeIn from 'react-fade-in';
import {paginationUtils} from '../js/functions';
import styled from 'styled-components';

const List = styled.ul`
list-style: none;
    margin-top: -15px;
    @media only screen and (max-width: 500px) {
      margin-top: -5px;
    }
`

let UsersList = (props) => {

  const { users, currentPageNumber, numberOfPages } = props;
  const currentlyVisibleUsers = paginationUtils.sliceSinglePageContent(currentPageNumber, users, numberOfPages);
  const userList = currentlyVisibleUsers? currentlyVisibleUsers.map((user, index) => <UsersListItem key ={index} index={index} user={user} />):null;
  
  return <section>
            <List>
              <FadeIn>
                {userList}
              </FadeIn>
            </List>
          </section>;
};

const mapStateToProps = state => ({
  users: state.users.matchingUsers,
  currentPageNumber:state.users.currentPageNumber,
  numberOfPages:state.users.numberOfPages,
});

UsersList = connect(mapStateToProps, null)(UsersList);
export default UsersList;
