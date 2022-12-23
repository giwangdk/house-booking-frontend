import { MutationCache, QueryCache, QueryClient } from 'react-query';
import { toast } from 'react-toastify';

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: async (error: any) => {
      toast.error(error.response.data.message);
    },
  }),
  mutationCache: new MutationCache({
    onError: async (error: any) => {
      toast.error(error.response.data.message);
    },
  }),
});
