import React, {useEffect, useState} from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
// import Animated, {FadeInUp} from 'react-native-reanimated';
import Resources from '../../assets';
import {colors} from '../../shared/themes';
import {SCREENS} from '../../shared/constants';

const Splash = ({navigation}: any) => {
  const [animating, setAnimating] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.navigate(SCREENS.LOGIN);
    }, 2000);
  }, [navigation]);
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar translucent backgroundColor={colors.transparent} />
      <View>
        <Resources.icons.show_logo />
        <ActivityIndicator
          animating={animating}
          color="#FFFFFF"
          size="large"
          style={styles.activityIndicator}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors?.background.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 50,
  },
});

export default Splash;
