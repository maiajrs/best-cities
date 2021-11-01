import { Text, Flex, Image, Stack, Box, HStack } from "@chakra-ui/react";
import { Header } from "../components/Header";
import Slide from "../components/Slide";

export default function Home() {
  return (
    <Flex
      direction="column"
      width="100%"
      maxWidth="1440px"
      mx="auto"
      position="relative"
    >
      <Header />
      <Flex
        as="section"
        width="100%"
        position="relative"
        mx="auto"
        justify="center"
        align="center"
      >
        <Image
          src="images/Background.png"
          alt="céu noturno estrelado background"
          width="100%"
          display="block"
        />
        <Flex
          height="100%"
          width="100%"
          maxWidth="1160px"
          mx="auto"
          align="center"
          position="absolute"
        >
          <HStack spacing="30">
            <Stack spacing="5" maxWidth="450px">
              <Text fontSize="32" color="gray.50" textAlign="left">
                5 Continentes, <br /> infinitas possibilidades.
              </Text>
              <Text textAlign="left">
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
              </Text>
            </Stack>
            <Stack position="absolute" right="30px" bottom="-30">
              <Image src="images/Airplane.svg" alt="Airplane" />
            </Stack>
          </HStack>
        </Flex>
      </Flex>
      <Flex as="main" height="100%" width="100%" direction="column">
        <Flex
          as="section"
          width="100%"
          maxWidth="1440px"
          align="center"
          my="20"
          direction="column"
        >
          <HStack
            spacing="auto"
            align="center"
            width="100%"
            maxWidth="1160px"
            mx="auto"
            justify="center"
          >
            <Image src="images/Nightlife.svg" alt="Nightlife" />
            <Image src="images/Beach.svg" alt="Beach" />
            <Image src="images/Modern.svg" alt="Modern" />
            <Image src="images/Classic.svg" alt="Classic" />
            <Image src="images/More.svg" alt="More" />
          </HStack>
          <Flex
            justify="center"
            align="center"
            mx="auto"
            my="20"
            width="100%"
            maxWidth="1240px"
          >
            <Image ml={35} src="images/Divider.svg" alt="Divider" />
          </Flex>
          <Text ml={30} color="gray.700" fontSize="36" textAlign="center">
            Vamos nessa?
          </Text>
          <Text ml={30} color="gray.700" fontSize="36" textAlign="center">
            Então escolha seu continente
          </Text>
        </Flex>
        <Flex
          maxWidth="1440px"
          align="center"
          justify="center"
          py="20"
          height="800px"
        >
          <Slide />
        </Flex>
      </Flex>
    </Flex>
  );
}
