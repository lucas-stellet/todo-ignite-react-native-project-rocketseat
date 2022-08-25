import styled, { css } from 'styled-components';

import { TouchableOpacity, View, Text } from 'react-native';

export const Container = styled(View)`
  padding: 12px;
  background-color: #262626;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const CheckBoxContainer = styled(TouchableOpacity)`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;

export const CheckBox = styled(Text)`
  width: 18px;
  height: 18px;
  border-radius: 9px;
  border: 2px solid;
  border-color: #4ea8de;
  align-items: center;
`;

interface TaskDescriptionProps {
  completed: boolean;
}

export const TaskDescription = styled(Text)`
  flex: 1;
  color: #f2f2f2;
  margin: 0 18px;
  text-align: 'start';
  ${(props) => {
    if (props.completed)
      return css`
        text-decoration-line: line-through;
        color: #808080;
      `;
  }}
`;

export const TrashContainer = styled(TouchableOpacity)`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;
