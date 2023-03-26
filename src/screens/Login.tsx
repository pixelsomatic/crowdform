import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {connect} from 'react-redux';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const handleLogin = () => {
  //   // verifique as informações de login aqui
  //   const user = {username, password};
  //   // dispatch({ type: 'LOGIN', payload: user });
  // };

  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        onChangeText={setUsername}
        style={{width: 100, height: 40, backgroundColor: 'blue'}}
      />
      <TextInput value={password} onChangeText={setPassword} />
      {/* <Button title="Login" onPress={handleLogin} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state: {email: string; password: string}) => {
  const {email, password} = state;
  return {email, password};
};

export default connect(mapStateToProps)(LoginScreen);
