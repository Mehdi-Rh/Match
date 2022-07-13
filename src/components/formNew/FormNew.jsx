import React, { useState } from 'react';
import { Picker } from 'react-native-form-component';
import { Text, TextInput, View } from 'react-native';
import { Form, FormItem } from 'react-native-form-component';


const FormNew = () => {
  const [number, setNumber] = useState(1);

  return (
    <Form onButtonPress={() => console.warn('do something')}>
      <FormItem
        style={{backgroundColor: 'red'}}
        label="Email"
        // value={email}
        isRequired
        onChangeText={(email) => setEmail(email)}
        asterik
      />  
      <TextInput
        placeholder="Enter Name"
        label="Wilaya"
        isRequired
      />
      <Picker
        items={[
          { label: 'Footbal 6x6', value: 1 },
          { label: 'Footbal 8x8', value: 2 },
          { label: 'Footbal 11x11', value: 3 },
        ]}
        label="Match category"
        selectedValue={number}
        onSelection={(item) => setNumber(item.value)}
      />
    </Form>
  )
}

export default FormNew