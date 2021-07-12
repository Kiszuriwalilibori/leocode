import React from "react";
import {connect} from "react-redux";
import UsersListItem from "./UsersListItem";
import FadeIn from 'react-fade-in';
import {paginationUtils} from '../js/functions';

let List = (props) => {

  const { users, currentPageNumber, numberOfPages } = props;
  const currentlyVisibleUsers = paginationUtils.sliceSinglePageContent(currentPageNumber, users, numberOfPages);
  const userList = currentlyVisibleUsers? currentlyVisibleUsers.map((user, index) => <UsersListItem key ={index} index={index} user={user} />):null;
  
  return <section>
            <ul className ="usersList">
              <FadeIn>
                {userList}
              </FadeIn>
            </ul>
          </section>;
};

const mapStateToProps = state => ({
  users: state.users.matchingUsers,
  currentPageNumber:state.users.currentPageNumber,
  numberOfPages:state.users.numberOfPages,
});

const UsersList = connect(mapStateToProps, null)(List);
export default UsersList;
