import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

function comp1(){
  return (
    <View>
      <Text>Cynthia</Text>
      <View>
      <Button
        onPress={() => {
        alert('Hello!');
        }}
        title="Press Me"
        />
        </View>
    </View>
  );
};

export default comp1;