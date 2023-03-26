import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {connect} from 'react-redux';
import Button from '../components/Button';
import InputText from '../components/InputText';
import Typography from '../components/Typography';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('first');
    // verifique as informações de login aqui
    // const user = {username, password};
    // dispatch({ type: 'LOGIN', payload: user });
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
      <View style={{marginTop: 24}}>
        <Button label="Login" onPress={handleLogin} />
      </View>
      <View style={styles.signUp}>
        <Typography size={12} weight={'400'} color={'lightGrey'}>
          Don't have any account?{' '}
        </Typography>
        <Typography size={12} weight={'400'} color={'lightGrey'} underline>
          Sign up{' '}
        </Typography>
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
