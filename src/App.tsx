import React, { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';

import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { router } from './helpers/routes';
import { DateProvider } from './context/date-context';
import { queryClient } from './helpers/queryClient';

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
      <DateProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
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
        </QueryClientProvider>
      </DateProvider>
    </Suspense>
  );
}

export default App;
