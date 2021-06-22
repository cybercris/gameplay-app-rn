import React from "react";

import DiscordImg from "../../assets/discord.png";
import { Container, IconWrapper, Icon, Title } from "./styles";

type Props = {
  title: string;
};

export function ButtonIcon({ title }: Props) {
  return (
    <Container activeOpacity={0.7}>
      <IconWrapper>
        <Icon source={DiscordImg} />
      </IconWrapper>

      <Title>{title}</Title>
    </Container>
  );
}
