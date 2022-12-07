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
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Image
} from "@chakra-ui/react";
import {
  ChevronRightIcon
} from "@chakra-ui/icons"
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
        <Box marginTop={"0"}
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
            mb={10}
            textAlign= 'center'
          >
            <font color="00D1FF">InnoFest 22/23</font><br/>
          </Heading>
          
          <Text fontSize="2xl" mb={5}>
            <font color="FFEC00">SW<i>i</i>FT</font> and <font color="FFEC00">ACC</font> are proud to bring you <b>RSAF InnoFest 22/23</b> - a two day event that showcases our innovator's efforts, 
            energises our innovation movement and charts the way ahead for our Innovation journey!
          </Text>
          <Text fontSize="2xl" mb={5}>
          The events for this InnoFest have been specially curated for us to discover together how we can <b>“Make Innovation Joyful”</b>. Here is a glimpse of what you can look forward to!
          </Text>
          <br/>
          <TableContainer backgroundColor={primary[1000]}>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th><Text fontSize="lg"><font color="FFEC00">Date / Month</font></Text></Th>
                  <Th><Text fontSize="lg"><font color="FFEC00">Event</font></Text></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Jan 2023 to Feb 2023</Td>
                  <Td><a href="#solvathon"><font color="FFEC00"><b>The Solva-thon</b></font></a></Td>
                </Tr>
                <Tr>
                  <Td>23 Feb 2023</Td>
                  <Td>
                  <b>Live Event</b><br/><br/>
                  <Grid templateColumns='repeat(2, 1fr)' gap={1}>
                    <GridItem w='100%'>
                    <List spacing={1}>
                      <ListItem>
                        <ListIcon as={ChevronRightIcon} color='green.500' />
                        Keynote Address by DS(A)
                      </ListItem>
                      <ListItem>
                        <ListIcon as={ChevronRightIcon} color='green.500' />
                        Awards to recognise our innovator's efforts over the year
                      </ListItem>
                      <ListItem>
                        <ListIcon as={ChevronRightIcon} color='green.500' />
                        Sharing by innovators from within the SAF and outside
                      </ListItem>
                      <ListItem>
                        <ListIcon as={ChevronRightIcon} color='green.500' />
                        A carnival style lunch with live food stations like Burgers, Satays, Prata and much more...
                      </ListItem>
                    </List>
                    </GridItem>
                  </Grid>
                  </Td>
                </Tr>
                <Tr>
                  <Td>24 Feb 2023</Td>
                  <Td>
                  <b>Upskill through workshops!</b><br/><br/>
                  <List spacing={1}>
                    <ListItem>
                      <ListIcon as={ChevronRightIcon} color='green.500' />
                      Hands-on 3D Printing
                    </ListItem>
                    <ListItem>
                      <ListIcon as={ChevronRightIcon} color='green.500' />
                      What is Extended Reality?
                    </ListItem>
                    <ListItem>
                      <ListIcon as={ChevronRightIcon} color='green.500' />
                      Chatbot 101
                    </ListItem>
                    <ListItem>
                      <ListIcon as={ChevronRightIcon} color='green.500' />
                      Design Thinking
                    </ListItem>
                  </List>
                  <br/>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <br/>
          <Image src="https://imgur.com/XL3ZnkE.png"/>
          <Grid templateColumns='repeat(4, 1fr)' gap={3} backgroundColor={primary[800]}>
          <GridItem w='100%'>
            <Image align="center" src="https://i.gyazo.com/f5b4f1f049be02d298f3b59afe6e5829.jpg" height="100%"/>
          </GridItem>
          <GridItem w='100%'>
            <Image align="center" src="https://i.gyazo.com/7c0b55c95205c859b3e500bb7a8c2b12.jpg" height="100%"/>
          </GridItem>
          <GridItem w='100%'>
            <Image align="center" src="https://i.gyazo.com/5275b01ae90f5a7ed6d11c36e1226e6b.jpg" height="100%"/>
          </GridItem>
          <GridItem w='100%'>
            <Image align="center" src="https://www.mindef.gov.sg/web/wcm/connect/rsaf/0999fab4-9037-4ba7-81ff-73a1fbfca76e/3.JPG?MOD=AJPERES" height="100%"/>
          </GridItem>
          </Grid>
          
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
          id = "solvathon"
        >
          <Heading
            size={"2xl"}
            bgGradient={`linear(to-r, ${primary[300]}, ${primary[100]} , ${secondary[500]})`}
            bgClip="text"
            pb={5}
            mb={5}
            textAlign= 'center'
          >
            <font color="00D1FF" >Solva-thon</font>
          </Heading>
          <Text fontSize="2xl" mb={5}>
            Have a pain point you want to see solved by innovation but have not been heard? Have a process, physical or digital innovation idea that can address pain points? 
            We want to hear from you!
          </Text>
          <Text fontSize="2xl" mb={2}>
            In the lead up to InnoFest 22/23, SW<i>i</i>FT will be running the <b>Solva-thon</b> - A campaign to source for innovative ideas to SOLVE pain points from our people!
          </Text>
          <Image src="https://eventornado-files.ams3.cdn.digitaloceanspaces.com/blogposts/1/the-rise-of-online-hackathons.png" height="300px" margin="auto"/>
          <Heading
            size={"lg"}
            bgGradient={`linear(to-r, ${primary[300]}, ${primary[100]} , ${secondary[500]})`}
            bgClip="text"
            mb={5}
          >
            <font color="00D1FF" >Event Details</font>
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color='green.500' />
              From <b>9 Jan to 20 Jan 2023</b>, portals will be open (on OSN and through this page) for you to drop your pain point and the idea to solve it.
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color='green.500' />
              Top ideas to solve pain points will then be put up on a poll in February for you to vote what you want to see solved most!
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color='green.500' />
              <b>Top 3</b> from the poll will be awarded prizes at InnoFest 22/23 with the winning solution given dedicated resources from SW<i>i</i>FT to lead and solve the pain point.
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color='green.500' float="left"/>
              <Image src="https://i.imgur.com/PuTtR9b.png" width="22px" float="left"></Image><i>Psst</i>: Join SW<i>i</i>FT's Telegram Channel to be eligible for voting and to win prizes!
            </ListItem>
          </List>
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
