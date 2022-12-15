import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface FetchReturn<T> {
  data: T | undefined;
  loading: boolean;
  error: boolean;
  errorMessage: string | null;
}

const useFetch = <T>(
  fetchMethod: (params?: string) => Promise<AxiosResponse<any, any>>,
): FetchReturn<T> => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    fetchMethod()
      .then((response) => response.data)
      .then(({ data }) => {

        setData(data);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setError(true);
        toast.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [fetchMethod]);

  return { data, loading, error, errorMessage };
};

export default useFetch;
