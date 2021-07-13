import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import UsersListItem from "./UsersListItem";
import FadeIn from "react-fade-in";
import { paginationUtils } from "../js/functions";
import styled from "styled-components";
import Loader from "./Loader";

const List = styled.ul`
  list-style: none;
  margin-top: -15px;
  @media only screen and (max-width: 500px) {
    margin-top: -5px;
  }
`;

let UsersList = props => {
  const { users, currentPageNumber, numberOfPages, doesFetchWork } = props;
  const currentlyVisibleUsers = paginationUtils.sliceSinglePageContent(currentPageNumber, users, numberOfPages);
  const userList = currentlyVisibleUsers ? currentlyVisibleUsers.map((user, index) => <UsersListItem key={index} index={index} user={user} />) : null;

  return !doesFetchWork ? (
    <section>
      <List>
        <FadeIn>{userList}</FadeIn>
      </List>
    </section>
  ) : 
    <Loader />
  ;
};

const mapStateToProps = state => ({
  users: state.users.matchingUsers,
  currentPageNumber: state.users.currentPageNumber,
  numberOfPages: state.users.numberOfPages,
  doesFetchWork: state.users.doesFetchWork,
});

UsersList = connect(mapStateToProps, null)(UsersList);
export default UsersList;

UsersList.propTypes = {
  user: PropTypes.object,
  currentPageNumber: PropTypes.number,
  numberOfPages: PropTypes.number,
  doesFetchWork: PropTypes.bool,
};
