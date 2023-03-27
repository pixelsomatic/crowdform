import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Checkbox} from 'react-native-paper';
import Button from '../components/Button';
import InputText from '../components/InputText';
import Typography from '../components/Typography';

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isOver18, setIsOver18] = useState<boolean>(false);

  const handleRegisterAccount = () => {
    console.log('first');
  };

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Typography size={18} weight={'600'} color={'black'}>
          Create your account
        </Typography>
      </View>
      <InputText
        value={firstName}
        onChange={value => setFirstName(value)}
        placeholder="Joe"
        label="First Name"
      />
      <InputText
        value={lastName}
        onChange={value => setLastName(value)}
        placeholder="Smith"
        label="Last Name"
      />
      <InputText
        value={email}
        onChange={value => setEmail(value)}
        placeholder="joe.smith@crb"
        label="E-mail"
      />
      <InputText
        value={password}
        onChange={value => setPassword(value)}
        placeholder="Minimum 8 characters"
        label="Password"
        secureEntry
      />
      <View style={styles.footer}>
        <View>
          <Checkbox
            uncheckedColor="#E6E6E6"
            status={isOver18 ? 'checked' : 'unchecked'}
            onPress={() => setIsOver18(!isOver18)}
          />
        </View>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <Typography size={12} weight={'400'} color={'lightGrey'}>
            I'm over 18 years of age and I have read and agree to the{' '}
          </Typography>
          <Typography size={12} weight={'bold'} color={'lightGrey'}>
            Terms of Service{' '}
          </Typography>
          <Typography size={12} weight={'400'} color={'lightGrey'}>
            and{' '}
          </Typography>
          <Typography size={12} weight={'bold'} color={'lightGrey'}>
            Privacy policy{' '}
          </Typography>
        </View>
      </View>
      <View style={{marginTop: 24}}>
        <Button label="Create account" onPress={handleRegisterAccount} />
      </View>
      <View style={styles.signUp}>
        <Typography size={12} weight={'400'} color={'lightGrey'}>
          Already have an account?{' '}
        </Typography>
        <Typography size={12} weight={'bold'} color={'lightGrey'} underline>
          Log in Here
        </Typography>
      </View>
    </View>
  );
};

export default RegisterScreen;

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
  footer: {
    marginHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
