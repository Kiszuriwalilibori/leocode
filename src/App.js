import React, { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { fetchUsers, searchUsers } from "./redux/usersReducer";
import debounce from "lodash/debounce";
import styled from "styled-components";
import { connect } from "react-redux";
import Input from "./components/Input";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Loader from "./components/Loader";

const Main = styled.main`
margin: 0 auto;
max-width: 600px;
padding: 100px 10px 10px 10px;
  @media only screen and (max-width: 667px) {
    max-width: 90%;
    padding-top: calc(10px + 90 * ((100vw - 500px) / 167));
  }
}
`;
const UsersList = lazy(() => import("./components/UsersList"));
const ErrorMessageBox = lazy(() => import("./components/ErrorMessageBox"));

const initialPattern = "";

let App = props => {
  const { fetchUsers, searchUsers } = props;

  const [pattern, setPattern] = useState(initialPattern);

  const updatePattern = useCallback(e => {
    setPattern(e.target.value);
  }, []);

  const clearInput = useCallback(e => {
    e.preventDefault();
    setPattern(initialPattern);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const debouncedSearchUsers = React.useCallback(
    debounce(x => searchUsers(x), 500),
    []
  );

  useEffect(() => {
    debouncedSearchUsers(pattern);
  }, [pattern, searchUsers]);

  return (
    <Main>
      <Header />
      <Suspense fallback={<Loader />}>
        <Input inputContent={pattern} onInputContentChange={updatePattern} onInputClear={clearInput} />
        <Pagination />
        <UsersList />
        <ErrorMessageBox />
      </Suspense>
    </Main>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  searchUsers: data => dispatch(searchUsers(data)),
});

App = connect(null, mapDispatchToProps)(App);

export default App;
