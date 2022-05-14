import React, {useState} from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import styled from 'styled-components/native';



const ViewStyled = styled.View`
    margin-top:15px;
`; 

const Input = () => {
  const [text, setText] = useState("");

  return (
    <ViewStyled>
        <TextInput
            mode='outlined'
            label="Username"
            value={text}
            onChangeText={text => setText(text)}
        />
    </ViewStyled>
  );
};

export default Input;