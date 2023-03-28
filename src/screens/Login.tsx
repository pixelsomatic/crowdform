import {NavigationProp} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import Button from '../components/Button';
import InputText from '../components/InputText';
import Typography from '../components/Typography';
import {useSelector, useDispatch} from 'react-redux';
import {setLoggedIn} from '../actions/loginActions';

type LoginScreenProps = {
  navigation: NavigationProp<any>;
};

interface LoginState {
  currentData: {
    email: string;
    password: string;
  };
  possibleData: {
    email: string;
    password: string;
  };
  isLoggedIn: boolean;
}

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const {currentData} = useSelector((state: LoginState) => state);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState<boolean>(true);

  const handleLogin = () => {
    setIsFormValid(isLoginValid(currentData, email, password));
    if (isLoginValid(currentData, email, password)) {
      dispatch(setLoggedIn(true));
    }
  };

  useEffect(() => {
    setEmail(currentData.email ?? '');
    setPassword(currentData.password ?? '');
  }, [currentData.email, currentData.password]);

  const isLoginValid = (
    currentData: {email: string; password: string},
    email: string,
    password: string,
  ) => {
    return (
      email !== '' &&
      currentData.email === email &&
      password !== '' &&
      currentData.password === password
    );
  };

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Typography size={18} weight={'600'} color={'black'}>
          Login
        </Typography>
      </View>
      <InputText
        value={email}
        onChange={value => setEmail(value)}
        placeholder="john@doe.com"
        label="E-mail"
      />
      <InputText
        value={password}
        onChange={value => setPassword(value)}
        placeholder="Minimum 8 characters"
        label="Password"
        secureEntry
      />
      <View>
        {!isFormValid && (
          <Typography size={14} weight={'400'} color={'lightRed'}>
            It looks like you haven't created an account yet, register first
          </Typography>
        )}
      </View>
      <View style={{marginTop: 24}}>
        <Button label="Login" onPress={handleLogin} />
      </View>
      <View style={styles.signUp}>
        <Typography size={12} weight={'400'} color={'lightGrey'}>
          Don't have any account?{' '}
        </Typography>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Typography size={12} weight={'400'} color={'lightGrey'} underline>
            Sign up{' '}
          </Typography>
        </TouchableOpacity>
        <Typography size={12} weight={'400'} color={'lightGrey'}>
          here
        </Typography>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 12,
  },
  signUp: {
    marginVertical: 12,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state: {email: string; password: string}) => {
  const {email, password} = state;
  return {email, password};
};

export default connect(mapStateToProps)(LoginScreen);
