import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';

export function SelectField({selectedValue, setSelectedValue, values}) {
  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedValue(itemValue)
        }>
          {values.map((value, index) => {
            return <Picker.Item key={index} label={value.label} value={value.value} />
          })}
      </Picker>
    </View>
  );
}