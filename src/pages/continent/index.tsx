import {
  Flex,
  Image,
  Text,
  Link,
  Box,
  Icon,
  HStack,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  color,
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

import { Header } from "../../components/Header";

export default function Continent() {
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
          src="images/europa/europa-capa.jpg"
          alt="céu noturno estrelado background"
          width="100%"
          display="block"
          height="500px"
        />
        <Flex position="absolute" bottom="20" left="40">
          <Text fontSize="48" fontWeight="bold" color="gray.50" textAlign="end">
            Europa
          </Text>
        </Flex>
      </Flex>
      <Flex as="main" maxWidth="1160px" mx="auto" py="20" direction="column">
        <HStack
          spacing="8"
          as="section"
          gridTemplateColumns="1fr 1fr"
          display="grid"
        >
          <Box>
            <Text>
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste
            </Text>
          </Box>
          <Box>
            <HStack spacing="auto">
              <Flex direction="column">
                <Text
                  color="yellow.400"
                  textAlign="center"
                  fontWeight="500"
                  fontSize="48"
                  lineHeight="72px"
                >
                  50
                </Text>
                <Text fontWeight="500">países</Text>
              </Flex>
              <Flex direction="column">
                <Text
                  color="yellow.400"
                  textAlign="center"
                  fontWeight="500"
                  fontSize="48"
                  lineHeight="72px"
                >
                  60
                </Text>
                <Text fontWeight="500">línguas</Text>
              </Flex>
              <Flex direction="column">
                <Text
                  color="yellow.400"
                  textAlign="center"
                  fontWeight="500"
                  fontSize="48"
                  lineHeight="72px"
                >
                  27
                </Text>
                <Text fontWeight="500" display="flex" alignItems="center" >
                  cidades + 100{" "}
                  {
                    <Popover>
                      <PopoverTrigger>
                        <Button _active={{background: "white"}} _focus={{boxShadow: "none"}} boxShadow="none" background="white" _hover={{color: "white"}}>{<Icon background="white" fontSize="24" _hover={{color: "yellow.400"}} as={RiInformationLine} />}</Button>
                      </PopoverTrigger>
                      <PopoverContent _focus={{boxShadow: "none"}}>
                        <PopoverArrow  />
                        <PopoverCloseButton />
                        <PopoverHeader textAlign="center">Veja mais cidades</PopoverHeader>
                        <PopoverBody>
                          <Link>
                          Clique para ver todas as cidades!</Link>
                          
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  }
                </Text>
              </Flex>
            </HStack>
          </Box>
        </HStack>
        <Flex my="20" direction="column">
          <Box>
            <Text fontSize="36" as="h1">
              Cidades +100
            </Text>
          </Box>
          <Flex as="section" my="4" flexDirection="column">
            <HStack spacing="45" flexWrap="wrap" my="">
              <Flex direction="column">
                <Image
                  borderRadius="4px 4px 0 0"
                  src="images/europa/londres.png"
                  alt="Londres"
                ></Image>
                <Flex
                  justify="space-between"
                  px="4"
                  py="4"
                  border="1px solid #FFBA08"
                  borderTop="none"
                  borderRadius="0px 0px 4px 4px"
                >
                  <Flex direction="column">
                    <Text>Londres</Text>
                    <Text>Reino Unido</Text>
                  </Flex>
                  <Image
                    width="30px"
                    height="30px"
                    src="images/europa/reino-unido.png"
                    alt="reino-unido"
                  ></Image>
                </Flex>
              </Flex>
              <Flex direction="column">
                <Image
                  borderRadius="4px 4px 0 0"
                  src="images/europa/paris.png"
                  alt="Paris"
                ></Image>
                <Flex
                  justify="space-between"
                  px="4"
                  py="4"
                  border="1px solid #FFBA08"
                  borderTop="none"
                  borderRadius="0px 0px 4px 4px"
                >
                  <Flex direction="column">
                    <Text>Londres</Text>
                    <Text>Reino Unido</Text>
                  </Flex>
                  <Image
                    width="30px"
                    height="30px"
                    src="images/europa/franca.png"
                    alt="França"
                  ></Image>
                </Flex>
              </Flex>
              <Flex direction="column">
                <Image
                  borderRadius="4px 4px 0 0"
                  src="images/europa/roma.png"
                  alt="Roma"
                ></Image>
                <Flex
                  justify="space-between"
                  px="4"
                  py="4"
                  border="1px solid #FFBA08"
                  borderTop="none"
                  borderRadius="0px 0px 4px 4px"
                >
                  <Flex direction="column">
                    <Text>Londres</Text>
                    <Text>Reino Unido</Text>
                  </Flex>
                  <Image
                    width="30px"
                    height="30px"
                    src="images/europa/italia.png"
                    alt="Italia"
                  ></Image>
                </Flex>
              </Flex>
              <Flex direction="column">
                <Image
                  borderRadius="4px 4px 0 0"
                  src="images/europa/praga.png"
                  alt="Praga"
                ></Image>
                <Flex
                  justify="space-between"
                  px="4"
                  py="4"
                  border="1px solid #FFBA08"
                  borderTop="none"
                  borderRadius="0px 0px 4px 4px"
                >
                  <Flex direction="column">
                    <Text>Londres</Text>
                    <Text>Reino Unido</Text>
                  </Flex>
                  <Image
                    width="30px"
                    height="30px"
                    src="images/europa/republica-tcheca.png"
                    alt="Republica-Tcheca"
                  ></Image>
                </Flex>
              </Flex>
            </HStack>
            <HStack spacing="45" flexWrap="wrap" my="12">
              <Flex direction="column">
                <Image
                  borderRadius="4px 4px 0 0"
                  src="images/europa/londres.png"
                  alt="Londres"
                ></Image>
                <Flex
                  justify="space-between"
                  px="4"
                  py="4"
                  border="1px solid #FFBA08"
                  borderTop="none"
                  borderRadius="0px 0px 4px 4px"
                >
                  <Flex direction="column">
                    <Text>Londres</Text>
                    <Text>Reino Unido</Text>
                  </Flex>
                  <Image
                    width="30px"
                    height="30px"
                    src="images/europa/reino-unido.png"
                    alt="reino-unido"
                  ></Image>
                </Flex>
              </Flex>
              <Flex direction="column">
                <Image
                  borderRadius="4px 4px 0 0"
                  src="images/europa/paris.png"
                  alt="Paris"
                ></Image>
                <Flex
                  justify="space-between"
                  px="4"
                  py="4"
                  border="1px solid #FFBA08"
                  borderTop="none"
                  borderRadius="0px 0px 4px 4px"
                >
                  <Flex direction="column">
                    <Text>Londres</Text>
                    <Text>Reino Unido</Text>
                  </Flex>
                  <Image
                    width="30px"
                    height="30px"
                    src="images/europa/franca.png"
                    alt="França"
                  ></Image>
                </Flex>
              </Flex>
              <Flex direction="column">
                <Image
                  borderRadius="4px 4px 0 0"
                  src="images/europa/roma.png"
                  alt="Roma"
                ></Image>
                <Flex
                  justify="space-between"
                  px="4"
                  py="4"
                  border="1px solid #FFBA08"
                  borderTop="none"
                  borderRadius="0px 0px 4px 4px"
                >
                  <Flex direction="column">
                    <Text>Londres</Text>
                    <Text>Reino Unido</Text>
                  </Flex>
                  <Image
                    width="30px"
                    height="30px"
                    src="images/europa/italia.png"
                    alt="Italia"
                  ></Image>
                </Flex>
              </Flex>
              <Flex direction="column">
                <Image
                  borderRadius="4px 4px 0 0"
                  src="images/europa/praga.png"
                  alt="Praga"
                ></Image>
                <Flex
                  justify="space-between"
                  px="4"
                  py="4"
                  border="1px solid #FFBA08"
                  borderTop="none"
                  borderRadius="0px 0px 4px 4px"
                >
                  <Flex direction="column">
                    <Text>Londres</Text>
                    <Text>Reino Unido</Text>
                  </Flex>
                  <Image
                    width="30px"
                    height="30px"
                    src="images/europa/republica-tcheca.png"
                    alt="Republica-Tcheca"
                  ></Image>
                </Flex>
              </Flex>
            </HStack>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
