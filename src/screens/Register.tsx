import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, Modal} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {updateLogin} from '../actions/loginActions';
import Button from '../components/Button';
import InputText from '../components/InputText';
import Typography from '../components/Typography';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type RegisterScreenProps = {
  navigation: StackNavigationProp<any>;
};

const RegisterScreen = ({navigation}: RegisterScreenProps) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isOver18, setIsOver18] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsFormValid(
      firstName.trim().length > 0 &&
        lastName.trim().length > 0 &&
        email.trim().length > 0 &&
        email.includes('@') &&
        password.trim().length >= 8 &&
        isOver18,
    );
  }, [firstName, lastName, email, password, isOver18]);

  const handleRegisterAccount = () => {
    setIsModalVisible(true);
    dispatch(updateLogin({email, password}));
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setIsPasswordValid(value.length >= 8);
  };

  const handleEmail = (value: string) => {
    setEmail(value);
    setIsEmailValid(email.trim().length > 0 && email.includes('@'));
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
        onChange={value => handleEmail(value)}
        placeholder="joe.smith@crb"
        label="E-mail"
        type="email-address"
      />
      {!isEmailValid && (
        <Typography size={14} weight="400" color="lightRed">
          Invalid e-mail
        </Typography>
      )}
      <InputText
        value={password}
        onChange={value => handlePasswordChange(value)}
        placeholder="Minimum 8 characters"
        label="Password"
        secureEntry
      />
      {!isPasswordValid && (
        <Typography size={14} weight="400" color="lightRed">
          Password must be at least 8 characters long
        </Typography>
      )}
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
        <Button
          label="Create account"
          onPress={handleRegisterAccount}
          disabled={!isFormValid}
        />
      </View>
      <View style={styles.signUp}>
        <Typography size={12} weight={'400'} color={'lightGrey'}>
          Already have an account?{' '}
        </Typography>
        <TouchableOpacity onPress={() => navigation.push('Login')}>
          <Typography size={12} weight={'bold'} color={'lightGrey'} underline>
            Log in Here
          </Typography>
        </TouchableOpacity>
      </View>
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Icon name="check-circle-outline" size={100} color="#0FDF8F" />
          <View style={{marginBottom: 24}}>
            <Typography size={18} weight={'bold'} color={'black'}>
              Registration successfully completed
            </Typography>
          </View>
          <Button label="Ok" onPress={() => navigation.push('Login')} />
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
});
