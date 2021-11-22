import {
  Text,
  Flex,
  Image,
  Stack,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import base from "@emotion/styled/types/base";
import { Header } from "../components/Header";
import Slide from "../components/Slide";

export default function Home() {
  const isSmallVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });
  
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
          minHeight="250"
        />
        <Flex
          height="100%"
          width="100%"
          maxWidth="1160px"
          mx="auto"
          align="center"
          position="absolute"
        >
          <HStack spacing="30" px="2">
            <Stack spacing="5" maxWidth="450px" m={{base: "auto", md: "4"}} py="8">
              <Text fontSize="32" color="gray.50" textAlign={{base: "center", md: "left"}}>
                5 Continentes, <br /> infinitas possibilidades.
              </Text>
              <Text textAlign={{base: "center", md: "left"}}>
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
              </Text>
            </Stack>
            {isSmallVersion && (
              <Stack
                position="absolute"
                right="30px"
                bottom="-30"
                w={[200, 250, 325, 500]}
              >
                <Image src="images/Airplane.svg" alt="Airplane" />
              </Stack>
            )}
          </HStack>
        </Flex>
      </Flex>
      <Flex as="main" height="100%" width="100%" direction="column">
        <Flex
          as="section"
          width="100%"
          maxWidth="1440px"
          align="center"
          my={["8", "16", "20"]}
          direction="column"
        >
          <Flex
            spacing="auto"
            align="center"
            width="100%"
            maxWidth="1160px"
            justify="center"
            px="2"
            display={{base: "grid", md: "flex"}}
            direction={{base: "column", md: "row"}}
            gridTemplateColumns="1fr 1fr"
            gridGap={["4", "8", "12",  "20"]}

          >
            <Image justifySelf="center" src="images/Nightlife.svg" alt="Nightlife" />
            <Image justifySelf="center"  src="images/Beach.svg" alt="Beach" />
            <Image justifySelf="center"  src="images/Modern.svg" alt="Modern" />
            <Image justifySelf="center"  src="images/Classic.svg" alt="Classic" />
            <Image justifySelf="center"  src="images/More.svg" alt="More" />
          </Flex>
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
          <Text ml={30} color="gray.700" fontSize={{base: "24", md: "36"}} textAlign="center">
            Vamos nessa?
          </Text>
          <Text ml={30} color="gray.700" fontSize={{base: "24", md: "36"}} textAlign="center">
            Então escolha seu continente
          </Text>
        </Flex>
        <Flex
          maxWidth="1440px"
          align="center"
          justify="center"
          py="4, 12, 20"
          mb="4"
        >
          <Slide />
        </Flex>
      </Flex>
    </Flex>
  );
}
