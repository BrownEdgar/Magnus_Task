import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { User } from './components/SpecialUserPage';
import { Layouts } from './components/Layouts';
import { getAsyncPosts } from './features/data/usersSlice';
import { UsersLoader } from './components/Loaders';
import { ErrorPage } from './components/Errorpage';
import ROUTES from './components/Routes';

import './App.css';

const LazyUsers = lazy(() => import('./components/UserList/Users'))

function App() {
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.users)
  const { status } = useSelector(state => state.users)

  useEffect(() => {
    dispatch(getAsyncPosts())
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path={ROUTES.MAIN} element={<Layouts />}>
          <Route index element={
            (status === "success") && <Suspense fallback={<UsersLoader />}>
              <LazyUsers users={data} />
            </Suspense>
          } />
          <Route path={ROUTES.USERPAGE} element={<User />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}





export default App


