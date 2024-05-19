import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {colors, fonts, radius, spacing} from '../../shared/themes';
import Resources from '../../assets';

const NoInternet = () => {
  const onPress = () => {
    console.log('onPress');
  };
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar />
      <View style={styles.box}>
        <View style={styles.content}>
          <Resources.icons.internet />
          <Text style={styles.title}>No connection</Text>
          <Text style={styles.subTitle}>
            No internet connection, check the connection and try again
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Try again</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors?.background.primary,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  box: {
    justifyContent: 'space-between',
    height: '60%',
    width: '80%',
    marginBottom: spacing.xl,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.semiBold,
    color: colors?.white,
    paddingBottom: spacing.xxs,
    paddingTop: spacing.sm,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors?.white,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.white,
    borderRadius: radius.sm,
    alignItems: 'center',
    padding: spacing.md,
  },
  buttonText: {
    color: colors?.text.primary,
    fontFamily: fonts.medium,
    fontSize: 16,
  },
});

export default NoInternet;
