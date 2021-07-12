import { createAction, createReducer } from "@reduxjs/toolkit";
import {paginationUtils} from "../js/functions";
export const showError = createAction("ERROR_SHOW");
export const clearError = createAction("ERROR_CLEAR");
export const fetchUsersFailed = createAction("FETCH_USERS_FAIL");
export const fetchUsersSuccess = createAction("FETCH_USERS_SUCCESS");
export const fetchUsersRequested = createAction("FETCH_USERS_START");
export const matchingUsersFound = createAction("MATCHING_USERS_SUCCESS");
export const matchingUsersNotFound = createAction("MATCHING_USERS_FAIL");
export const changePage = createAction("PAGE_CHANGE");

const initialState = {
  error: { value: false, code: "" },
  doesFetchWork: false,
  allUsers: [],
  matchingUsers: [],
  currentPageNumber: 1,
  numberOfPages:0,
};

const usersReducer = createReducer(initialState, builder => {
  builder
    .addCase(changePage,(state, action)=>{
      if (action.payload) {
        state.currentPageNumber = action.payload;
      }
    }

    )
    .addCase(matchingUsersFound, (state, action) => {
      if (action.payload) {
        state.matchingUsers = action.payload;
        state.numberOfPages = paginationUtils.getNumberOfPages(action.payload);
      }
    })
    .addCase(matchingUsersNotFound, state => {
      state.error.value = true;
      state.error.code = "No user matches criteria";
    })

    .addCase(fetchUsersFailed, (state, action) => {
      if (action.payload) {
        state.error.value = true;
        state.error.code = action.payload;
      }
    })

    .addCase(fetchUsersSuccess, (state, action) => {
      if (action.payload) {
        state.doesFetchWork = false;
        state.allUsers = action.payload;
        state.matchingUsers = action.payload;
        state.numberOfPages = paginationUtils.getNumberOfPages(action.payload);        
      }
    })

    .addCase(fetchUsersRequested, state => {
      state.doesFetchWork = true;
    })

    .addCase(showError, (state, action) => {
      if (action.payload) {
        state.error.value = true;
        state.error.code = action.payload;
      }
    })
    .addCase(clearError, state => {
      state.error = initialState.error;
    })

    .addDefaultCase(() => {});
});

export default usersReducer;

export function fetchUsers() {
  return dispatch => {
    dispatch(fetchUsersRequested());
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        dispatch(fetchUsersSuccess(data));
      })
      .catch(err => dispatch(fetchUsersFailed("Podczas pobierania danych nastąpil błąd: " + err.message)));
  };
}

export function searchUsers(pattern) {
  return (dispatch, getState) => {
    var allUsers = getState().users.allUsers;
    if (allUsers && pattern && pattern.length > 0) {
      const matchingUsers = allUsers.filter(item => item.name.toLowerCase().includes(pattern.toLowerCase()));

      if (matchingUsers.length) {
        dispatch(matchingUsersFound(matchingUsers));
        getState().users.error.value && dispatch(clearError());
      } else {
        dispatch(matchingUsersNotFound());
      }
    } else {
      if (pattern.length === 0) {
        dispatch(matchingUsersFound(allUsers));
      }
    }
  };
}
