import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled(LinearGradient)`
  width: 100%;
  height: 104px;
  padding-top: ${getStatusBarHeight()}px;
  padding: 0 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.title700};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.heading};
`;
