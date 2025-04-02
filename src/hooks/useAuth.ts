import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { login, register, logout } from '../store/slices/authSlice';
import { AppDispatch } from '../store';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, isAuthenticated, isLoading, error } = useSelector((state: RootState) => state.auth);

  const loginUser = async (email: string, password: string) => {
    return dispatch(login({ email, password }));
  };

  const registerUser = async (name: string, email: string, password: string, p0: { age: number; gender: string; sports: string[]; skillLevel: string; }) => {
    return dispatch(register({ name, email, password }));
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login: loginUser,
    register: registerUser,
    logout: logoutUser,
  };
};