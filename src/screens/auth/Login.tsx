import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PhoneInput, {ICountry} from 'react-native-international-phone-number';
import DatePicker from 'react-native-date-picker';
import {colors, fonts, radius, spacing} from '../../shared/themes';

const Login = () => {
  const [step1, setStep1] = useState<boolean>(false);
  const [step2, setStep2] = useState<boolean>(false);
  const [step3, setStep3] = useState<boolean>(true);
  const [date, setDate] = useState(new Date());
  const [selectedCountry, setSelectedCountry] = useState<null | ICountry>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const handleInputValue = (phoneNumber: string) => {
    setInputValue(phoneNumber);
  };
  const handleSelectedCountry = (country: ICountry) => {
    setSelectedCountry(country);
  };
  const onPress = () => {
    console.log('onPress');
    setStep1(false);
    setStep2(true);
  };
  const onPressStep2 = () => {
    console.log('onPress');
    setStep1(false);
    setStep2(false);
    setStep3(true);
  };
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar barStyle="dark-content" />
      {step1 && (
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>
              Enter <Text style={styles.subTitle}>phone {'\n'}number</Text>
            </Text>

            <PhoneInput
              placeholder="Enter phone number"
              value={inputValue}
              onChangePhoneNumber={handleInputValue}
              selectedCountry={selectedCountry}
              onChangeSelectedCountry={handleSelectedCountry}
              defaultCountry="IN"
              modalHeight="80%"
              phoneInputStyles={{
                container: {
                  backgroundColor: colors.white,
                  borderWidth: 2,
                  borderStyle: 'solid',
                  borderColor: colors.theme.primary,
                  height: 60,
                },
                flagContainer: {
                  borderTopLeftRadius: radius.md,
                  borderBottomLeftRadius: radius.md,
                  backgroundColor: colors.white,
                  justifyContent: 'center',
                },
                flag: {},
                caret: {
                  display: 'none',
                },
                divider: {
                  display: 'none',
                },
                callingCode: {
                  fontSize: 16,
                  fontFamily: fonts.medium,
                  color: colors.text.secondary,
                  padding: 0,
                },
                input: {
                  fontSize: 16,
                  fontFamily: fonts.medium,
                  color: colors.text.secondary,
                },
              }}
            />
          </View>
          <View style={styles.box}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {step2 && (
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>
              Enter{' '}
              <Text style={styles.subTitle}>
                first <Text style={styles.title}>&</Text>
                {'\n'}last name
              </Text>
            </Text>
            <TextInput
              autoFocus
              keyboardType="default"
              style={styles.input}
              placeholder="Enter your first name"
            />
            <TextInput
              autoFocus
              keyboardType="default"
              style={styles.input}
              placeholder="Enter your last name"
            />
          </View>
          <View style={styles.box}>
            <TouchableOpacity style={styles.button} onPress={onPressStep2}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {step3 && (
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>
              Select your {'\n'}
              <Text style={styles.subTitle}>date of birth</Text>
            </Text>
          </View>
          <View style={styles.datePicker}>
            <DatePicker
              mode="date"
              maximumDate={new Date('2021-12-31')}
              minimumDate={new Date('1970-12-31')}
              date={date}
              onDateChange={setDate}
            />
          </View>
          <View style={styles.box}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => console.log('press')}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors?.white,
  },
  content: {
    flex: 1,
    marginTop: spacing.xxl,
    paddingHorizontal: spacing.lg,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 30,
    lineHeight: 38,
    fontFamily: fonts.bold,
    color: colors?.text.secondary,
    paddingVertical: spacing.lg,
  },
  subTitle: {
    color: colors?.text.primary,
  },
  input: {
    backgroundColor: colors.white,
    borderColor: colors.theme.primary,
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.text.secondary,
    marginBottom: spacing.lg,
  },
  box: {
    marginBottom: spacing.xl,
  },
  button: {
    backgroundColor: colors.button.primary,
    borderRadius: radius.sm,
    alignItems: 'center',
    padding: spacing.md,
  },
  buttonText: {
    color: colors?.white,
    fontFamily: fonts.medium,
    fontSize: 16,
  },
  datePicker: {
    width: '100%',
  },
});

export default Login;
