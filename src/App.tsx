import React, { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';

import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { router } from './helpers/routes';

function App(): JSX.Element {
  const queryClient = new QueryClient();
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
    </Suspense>
  );
}

export default App;
