import React, { useState, useEffect, useCallback, lazy, Suspense } from "react";
import {fetchUsers, searchUsers} from './redux/usersReducer';
import {connect} from "react-redux";
import Input from './components/Input';
import Header from './components/Header';
import Pagination from './components/Pagination';
import Loader from './components/Loader';
import './App.css';

// const Loader = React.memo(()=><div className='loader'>Loading...</div>);
const UsersList = lazy(()=>import("./components/UsersList"));
const ErrorMessageBox = lazy(()=>import("./components/ErrorMessageBox"));

const initialPattern ='';

let App =(props)=>{
const {fetchUsers, searchUsers} = props;

  const [pattern, setPattern] = useState(initialPattern);

  const updatePattern = useCallback(e => {
    e.preventDefault();
    setPattern(e.target.value);
  },[])
  
  const clearInput = useCallback(e => {
    e.preventDefault();
    setPattern(initialPattern);
  },[])

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    searchUsers(pattern);
  }, [pattern, searchUsers]);

  return (
  <main className = 'main'>
  
  <Header />
  
  <Suspense fallback= {<Loader />}>
    <Input inputContent={pattern} onInputContentChange={updatePattern} onInputClear ={clearInput} />
    <Pagination />
    <UsersList />
    <ErrorMessageBox />
  </Suspense>
  </main>
  );
}


const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),  
  searchUsers:(data)=>dispatch(searchUsers(data)),
});

App = connect(null, mapDispatchToProps)(App);

export default App;
