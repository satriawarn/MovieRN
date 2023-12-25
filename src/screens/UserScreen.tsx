import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface UserScreenProps {}

const UserScreen = () => {
  return (
    <View style={styles.container}>
      <Text>UserScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {}
});

export default UserScreen;