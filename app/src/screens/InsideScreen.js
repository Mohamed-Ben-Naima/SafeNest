import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const InsideScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from Inside Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});

export default InsideScreen;
