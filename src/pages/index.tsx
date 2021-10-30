import { Text, Flex, Image, Stack, Box, HStack } from "@chakra-ui/react";
import { Header } from "../components/Header";

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
      <Flex as="main" height="100%" width="100%" direction="column">
        <Box
          backgroundImage="images/Background.png"
          backgroundRepeat="no-repeat"
          width="100%"
          height="335px"
        >
          <Flex
            height="100%"
            width="100%"
            maxWidth="1240px"
            mx="auto"
            px="10"
            align="center"
            position="relative"
          >
            <HStack spacing="30">
              <Stack spacing="5" maxWidth="450px">
                <Text fontSize="32" color="gray.50">
                  5 Continentes, <br /> infinitas possibilidades.
                </Text>
                <Text>
                  Chegou a hora de tirar do papel a viagem que você sempre
                  sonhou.{" "}
                </Text>
              </Stack>
              <Stack position="absolute" right="30px" bottom="-30">
                <Image src="images/Airplane.svg" alt="Airplane" />
              </Stack>
            </HStack>
          </Flex>
        </Box>
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
            maxWidth="1240px"
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
          <Text ml={30} color="gray.700" fontSize="36" textAlign="center">Vamos nessa?</Text>
          <Text ml={30}color="gray.700" fontSize="36" textAlign="center">Então escolha seu continente</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
