import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Label = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.heading};
  margin: ${({ category }) => (category ? "36px 0 18px 24px" : 0)};
`;

export const Form = styled.View`
  padding: 0 24px;
  margin-top: 32px;
`;

export const Select = styled.View`
  flex-direction: row;
  width: 100%;
  height: 68px;
  border-color: ${({ theme }) => theme.colors.secondary50};
  border-width: 1px;
  border-radius: 8px;
  align-items: center;
  padding-right: 25px;
  overflow: hidden;
`;

export const GuildImg = styled.View`
  width: 64px;
  height: 68px;
  background-color: ${({ theme }) => theme.colors.secondary50};
  border-width: 1px;
`;

export const SelectBody = styled.View`
  flex: 1;
  align-items: center;
`;

export const Field = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: ${({ description }) => (description ? 12 : 0)}px;
`;

export const Column = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.Text`
  margin-right: 4px;
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.text500};
  color: ${({ theme }) => theme.colors.highlight};
`;

export const CaracteresLimit = styled.Text`
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.colors.highlight};
`;

export const Footer = styled.View`
  margin-top: 20px;
  margin-bottom: 56px;
`;
