import React from "react";

import { ButtonIcon } from "../../components/ButtonIcon";
import IllustrationImg from "../../assets/illustration.png";

import { Container, LeeSinImage, Content, Title, Subtitle } from "./styles";

export function SignIn() {
  return (
    <Container>
      <LeeSinImage source={IllustrationImg} resizeMode="stretch" />

      <Content>
        <Title>
          Conecte-se {"\n"} e organize {"\n"}
          suas jogatinas
        </Title>

        <Subtitle>
          Crie grupos para jogar seus games {"\n"}
          favoritos com seus amigos
        </Subtitle>

        <ButtonIcon title="Entrar no Discord" />
      </Content>
    </Container>
  );
}
