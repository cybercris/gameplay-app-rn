import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LeeSinImage = styled.Image`
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
  font-family: ${({ theme }) => theme.fonts.title700};
  line-height: 40px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
  font-size: 15px;
  margin-bottom: 64px;
  font-family: ${({ theme }) => theme.fonts.title500};
  line-height: 25px;
`;
