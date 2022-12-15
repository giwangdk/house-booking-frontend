import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { AuthState } from '../helpers/types';

export default function useAuth(): AuthState {
  return useSelector((state: RootState) => state.auth);
}
