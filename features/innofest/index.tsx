import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import teams from "./constants/teams";
import Team from "./components/Team/index";
import { primary, secondary } from "@afnexus/hummingbird-ui-assets";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

type LandingBodyProps = {};

export default function InnoFest(props: LandingBodyProps) {

  const router = useRouter(); 
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {

    const target = new Date("12/22/2022 23:59:59");

    const Interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);
      const h = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      setHours(h);
      const m = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
      setMinutes(m);
      const s = Math.floor(difference % (1000 * 60) / (1000));
      setSeconds(s);

    }, 1000)
    return () => clearInterval(Interval)
  }, [])

  return (
    <Box
      w="100vw"
      h="100%"
      color="white"
      display="flex"
      justifyContent="center"
    >
      <Container
        maxW={"container.xl"}
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Box marginTop={"36"}
          textAlign="left"
          py={{ base: 20, md: 20 }}
          px={{ base: 8, md: 20 }}
          boxShadow={"base"}
          rounded={"3xl"}
          backgroundColor={primary[800]}
          w="fit-content"
          // bgImage="nightSkyBackground.svg"
        >
          <Heading
            size={"3xl"}
            bgGradient={`linear(to-r, ${primary[300]}, ${primary[100]} , ${secondary[500]})`}
            bgClip="text"
            mb={5}
          >
            InnoFest 22/23
          </Heading>
          <Text fontSize="lg">
            The InnoFest that is coming in 2022 and 2023 consists of a Solvathon!
          </Text>
        </Box>
        <Box
          marginTop={24}
          textAlign="left"
          py={{ base: 20, md: 20 }}
          px={{ base: 8, md: 20 }}
          boxShadow={"base"}
          rounded={"3xl"}
          backgroundColor={primary[800]}
          w="fit-content"
        >
          <Heading
            size={"2xl"}
            bgGradient={`linear(to-r, ${primary[300]}, ${primary[100]} , ${secondary[500]})`}
            bgClip="text"
            pb={5}
          >
            InnoFest Programme
          </Heading>
          <Text fontSize="lg" mb={5}>
            The program of the InnoFest festival is as follows:
          </Text>
          <TableContainer>
            <Table variant='simple'>
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>Time / Date</Th>
                  <Th>Agenda Item</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
        <Box
          marginTop={24}
          mb={48}
          textAlign="left"
          py={{ base: 20, md: 20 }}
          px={{ base: 8, md: 20 }}
          boxShadow={"base"}
          rounded={"3xl"}
          backgroundColor={primary[800]}
          w="fit-content"
        >
          <Heading
            size={"3xl"}
            bgGradient={`linear(to-r, ${primary[300]}, ${primary[100]} , ${secondary[500]})`}
            bgClip="text"
            mb={5}
          >
            Time before next Information Drop
          </Heading>
          <Text fontSize="3xl" align="center">
            {days} Days : {hours} Hours : {minutes} Minutes : {seconds} Seconds
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
