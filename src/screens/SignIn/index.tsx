import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";

import IllustrationImg from "../../assets/illustration.png";
import { Container, LeeSinImage, Content, Title, Subtitle } from "./styles";

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate("Home");
  }

  return (
    <Background>
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

          <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
        </Content>
      </Container>
    </Background>
  );
}
