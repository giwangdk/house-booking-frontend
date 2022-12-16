import React, { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';

import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './helpers/routes';

function App(): JSX.Element {
  return (
    <Suspense
      fallback={
        <div style={{ margin: '10rem' }}>
          <Skeleton
            style={{
              margin: '1rem auto',
              width: '100%',
              textAlign: 'center',
            }}
            count={5}
          />
        </div>
      }
    >
    <RouterProvider router={router}/>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Suspense>
  );
}

export default App;
