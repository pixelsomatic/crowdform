import {NavigationContainer} from '@react-navigation/native';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import {useSelector} from 'react-redux';

const Routes = () => {
  const {isLoggedIn} = useSelector(state => state);
  console.log(isLoggedIn);
  // return <AuthRoutes />;
  return isLoggedIn ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
