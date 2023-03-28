import {NavigationContainer} from '@react-navigation/native';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import {useSelector} from 'react-redux';

const Routes = () => {
  const {isLoggedIn} = useSelector(state => state);
  return isLoggedIn ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
