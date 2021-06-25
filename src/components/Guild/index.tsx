import React from "react";
import { TouchableOpacityProps, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { GuildIcon } from "../GuildIcon";

import { Container, Content, Title, Type } from "./styles";
import { theme } from "../../global/styles/theme";

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

type Props = TouchableOpacityProps & {
  data: GuildProps;
};

export function Guild({ data, ...rest }: Props) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <GuildIcon />
      <Content>
        <View>
          <Title>{data.name}</Title>
          <Type>{data.owner ? "Administrador" : "Convidado"}</Type>
        </View>
      </Content>
      <Feather name="chevron-right" color={theme.colors.heading} size={24} />
    </Container>
  );
}
