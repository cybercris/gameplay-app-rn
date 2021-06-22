import styled from "styled-components/native";

import { theme } from "../../global/styles/theme";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const LeeSinImage = styled.image`
  width: 100%;
  height: 360px;
`;

export const Content = styled.View`
  margin-top: -40px;
  padding: 50px 0;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
  font-size: 40px;
  margin-bottom: 16px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
  font-size: 15px;
  margin-bottom: 64px;
`;
