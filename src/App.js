import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import Users from './components/User';
import Layouts from './components/Layouts';
import { getAsyncPosts } from './features/data/usersSlice';

import './App.css';
import UsersLoader from './components/Users-Loader';
const LazyUsers = lazy(() => import('./components/Products'))


function App() {
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.users)
  const { status } = useSelector(state => state.users)
  console.log('data', status)
  useEffect(() => {
    dispatch(getAsyncPosts())
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={
            <Suspense fallback={<UsersLoader />}>
              <LazyUsers products={data} />
            </Suspense>
          } />
          <Route path="users/:id" element={<Users />} />
          <Route path="*" element={<h1>Error</h1>} />
        </Route>
      </Routes>
    </div>
  );
}





export default App


