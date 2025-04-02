import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { toggleTheme, setTheme } from '../store/slices/themeSlice';

export const useTheme = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state: RootState) => state.theme);

  const toggle = () => {
    dispatch(toggleTheme());
  };

  const set = (isDark: boolean) => {
    dispatch(setTheme(isDark));
  };

  return {
    darkMode,
    toggle,
    set,
  };
};