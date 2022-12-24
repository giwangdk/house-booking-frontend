import { MutationCache, QueryCache, QueryClient } from 'react-query';
import { toast } from 'react-toastify';
import Cookies from 'universal-cookie';

const cookie = new Cookies();

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: async (error: any) => {
      if (error.response.status === 401) {
        cookie.remove('token');
        window.location.href = '/login';
        toast.error(error.response.data.message);
      }
    },
  }),
  mutationCache: new MutationCache({
    onError: async (error: any) => {
      if (error.response.status === 401) {
        cookie.remove('token');
        window.location.href = '/login';
        toast.error(error.response.data.message);
      }
    },
  }),
});
