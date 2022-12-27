import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Divider
} from "@chakra-ui/react";
import { ChevronRightIcon, 
  CheckIcon,
  InfoOutlineIcon,
  PhoneIcon
} from "@chakra-ui/icons";
import {
  primary,
  secondary,
  nYellow,
  nGreen,
  nSecondary,
} from "@afnexus/hummingbird-ui-assets";
import { useEffect, useState } from "react";

type LandingBodyProps = {};

export default function InnoFest(props: LandingBodyProps) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("1/5/2023 11:59:59");

    const Interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);
    return () => clearInterval(Interval);
  }, []);

  return (
    <>

      <Stack overflowX="hidden">
        <Box
          w="100vw"
          h="100%"
          color="white"
          display="flex"
          justifyContent="center"
          mt="6em"
        >
          <Container
            maxW={"container.lg"}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Image
              width="125px"
              src="https://i.imgur.com/uViUK5S.png"
              alt="SWiFT"
            />

            <Link href="#innofest" fontSize={{ lg: "xl" }}color={nYellow[400]}>
              <Text as="span" textShadow="0 0 10px #ffcd7e"><b>Click here to view InnoFest Details</b></Text>
            </Link>

            <Box
              marginTop={5}
              textAlign="justify"
              py={{ base: 10, md: 20 }}
              px={{ base: 5, md: 20 }}
              boxShadow={"base"}
              rounded={"3xl"}
              backgroundColor={primary[800]}
              w="100%"
              id="solvathon"
            >
              <Heading size={"4xl"} mb={5} textAlign="center" color={nYellow[400]}>
                <Text fontFamily="Segoe Script" fontSize={{ base: "md", lg: "xl" }}><i>Innofest 22/23 Presents</i></Text>
                <Text fontFamily="Century Gothic" className="glowtext1">SOLVATHON</Text>
              </Heading>
              <Text fontSize={{ base: "md", lg: "2xl" }} mb={5}>
                The ideas of our innovators have solved many pain points of past.
              </Text>
              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr) ",
                  xl: "repeat(3, 1fr)",
                }}
                gap={3}
                backgroundColor={primary[800]}
                mb={18}
                position="relative"
                margin="0 auto"
              >
                <GridItem w="75%" key={0} margin="auto">
                    <Image align="center" src={"https://i.gyazo.com/9da0564863849505a6f069d2b48dc820.png"} width="100%" alt="" />
                    <Text fontSize={{ lg: "md" }} align="center">Digitising paper processes: MT Fleet App</Text>
                </GridItem>
                <GridItem w="75%" key={1} margin="auto">
                    <Image align="center" src={"https://i.gyazo.com/992a564c04fcb42a217d4d7fb007eb4b.png"} width="100%" alt="" />
                    <Text fontSize={{ lg: "md" }} align="center">Saving Manpower: Wingtip Sensors</Text>
                </GridItem>
                <GridItem w="75%" key={2} margin="auto">
                    <Image align="center" src={"https://i.gyazo.com/6a703c5603bb680d393def72094effc3.png"} width="100%" alt="" />
                    <Image align="center" src={"https://i.gyazo.com/bc8cd22c67704ed00f3f4a933178a361.png"} width="100%" alt="" />
                    <Text fontSize={{ lg: "md" }} align="center">No more scratching or removal: CDA Sticker</Text>
                </GridItem>
              </Grid>
              <Text fontSize={{ base: "md", lg: "2xl" }} mb={5}>
                In our efforts to <b><i>#makeinnovationjoyful</i></b>, <Text as="span" color={nYellow[400]}>SW<i>i</i>FT</Text>{" "} wants to hear your pain
                point AND partner you to solve the pain point through innovation!
              </Text>
              <Box
              text-align="justify"
              py={{ base: 10, md: 5 }}
              px={{ base: 5, md: 5 }}
              boxShadow={"base"}
              rounded={"3xl"}
              backgroundColor={primary[600]}
              w="100%"
              id="solvathon"
              mb={5}
              >
                <Heading size={"lg"} mb={5} color={nYellow[400]} textShadow="0 0 20px #ffcd7e">
                  What you need to do?
                </Heading>
                <List spacing={3} >
                  <ListItem>
                    <ListIcon as={ChevronRightIcon} color={nGreen[400]} />
                    Bookmark <Link href="/innofest">this URL</Link> or join our <Link href="https://t.me/swiftoffice">SW<i>i</i>FT Telegram Channel</Link>.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={ChevronRightIcon} color={nGreen[400]} />
                    <Text as="span" textShadow="0 0 10px #ffcd7e"><b>Jan 2023</b></Text>: Lookout for updates on this page, Telegram or OSN on how to submit your entry for SOLVATHON.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={ChevronRightIcon} color={nGreen[400]} />
                    <Text as="span" textShadow="0 0 10px #ffcd7e"><b>9 Jan to 20 Jan 2023</b></Text>: Enter the portal most suited for you and submit your entry with the following details:
                    <List spacing={1} >
                      <ListItem>&emsp;&emsp;<ListIcon as={CheckIcon} />The pain point</ListItem>
                      <ListItem>&emsp;&emsp;<ListIcon as={InfoOutlineIcon} />A proposed innovative solution</ListItem>
                      <ListItem>&emsp;&emsp;<ListIcon as={PhoneIcon} />Your contact details</ListItem>
                    </List>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={ChevronRightIcon} color={nGreen[400]} />
                    <Text as="span" textShadow="0 0 10px #ffcd7e"><b>6 Feb 2023</b></Text> onwards: Lookout for the <Text as="span" color={nYellow[400]}>SOLVATHON</Text>{" "} poll
                    and up-vote the entry you want to see SOLVED in the year ahead.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={ChevronRightIcon} color={nGreen[400]} />
                    <Text as="span" textShadow="0 0 10px #ffcd7e"><b>23 Feb 2023</b></Text>: Top 3 voted entries stand to win attractive prizes at InnoFest!
                  </ListItem>
                  <Text fontSize={{ base: "md", lg: "lg" }} textAlign="center">
                    <b>The Winning Entry of <Text as="span" color={nYellow[400]}>SOLVATHON</Text>{" "} will be announced and led by SW<i>i</i>FT Office to be SOLVED in 2023!</b>
                  </Text>
                </List>
              </Box>
              <Text fontSize={{ base: "md", lg: "2xl" }} mb={5}>
                Join us on our <Link href="https://t.me/swiftoffice"><b>Telegram Channel</b></Link> or stay tuned to this page!
              </Text>
              <div>
              <Image
                    src="https://i.imgur.com/PuTtR9b.png"
                    width="40px"
                    float="left"
                    alt=""
              ></Image>
              <Text fontSize={{ base: "md", lg: "2xl" }}>
                <i>Psst</i>: Stay tuned also for <b>exciting courses</b> such as <i>Design Thinking</i>, <i>3D printing</i> and <i>Chatbot
                Development</i> to <b><i>#upskill</i></b> your innovation quotient!
              </Text>
              </div>
              <Text fontSize={{ base: "md", lg: "2xl" }}  mb={-5} textAlign="center" >
              JAN <b className="glowtext1">9</b> 2023
              </Text>
              <Text fontSize={{ base: "md", lg: "2xl" }} textAlign="center"><b><i>#makinginnovationjoyful</i></b></Text>
            </Box>

            <Box
              marginTop={"24"}
              textAlign="justify"
              py={{ base: 10, md: 20 }}
              px={{ base: 5, md: 20 }}
              boxShadow={"base"}
              rounded={"3xl"}
              backgroundColor={primary[800]}
              w="100%"
              maxW="90vw"
              id="innofest"
            >
              <Heading size={"3xl"} mb={10} textAlign="center" color={nYellow[400]} textShadow="0 0 20px #ffcd7e">
                InnoFest 22/23
                <br />
              </Heading>

              <Text fontSize={{ base: "md", lg: "2xl" }} mb={5}>
                <Text as="span" color={nYellow[400]}>
                  SW<i>i</i>FT
                </Text>{" "}
                and{" "}
                <Text as="span" color={nYellow[400]}>
                  ACC
                </Text>{" "}
                are proud to bring you <b>InnoFest 22/23</b> - a two day event
                that showcases our innovator&apos;s efforts, energises our
                innovation movement and charts the way ahead for our Innovation
                journey!
              </Text>
              <Text fontSize={{ base: "md", lg: "2xl" }} mb={5}>
                The events for this InnoFest have been specially curated for us
                to discover together how we can <b>“Make Innovation Joyful”</b>.
                Here is a glimpse of what you can look forward to!
              </Text>
              <br />
              <TableContainer backgroundColor={primary[1000]}>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>
                        <Text fontSize="lg" color={nYellow[400]}>
                          Date / Month
                        </Text>
                      </Th>
                      <Th>
                        <Text fontSize="lg" color={nYellow[400]}>
                          Event
                        </Text>
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Jan 2023 to Feb 2023</Td>
                      <Td>
                        <Link href="#solvathon" color={nYellow[400]} textShadow="0 0 10px #ffcd7e">
                          <b>The Solvathon</b>
                        </Link>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>23 Feb 2023</Td>
                      <Td>
                        <b>Live Event</b>
                        <br />
                        <br />
                        <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                          <GridItem w="100%">
                            <List spacing={1}>
                              {[
                                "Keynote Address by DS(A)",
                                "Awards to recognise our innovator's efforts over the year",
                                "Sharing by innovators from within the SAF and outside",
                                "A carnival style lunch with live food stations like Burgers, Satays, Prata and much more...",
                              ].map((listText, i) => (
                                <ListItem key={i}>
                                  <ListIcon
                                    as={ChevronRightIcon}
                                    color={nGreen[400]}
                                  />
                                  {listText}
                                </ListItem>
                              ))}
                            </List>
                          </GridItem>
                        </Grid>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>24 Feb 2023</Td>
                      <Td>
                        <b>Upskill through workshops!</b>
                        <br />
                        <br />
                        <List spacing={1}>
                          {[
                            "Hands-on 3D Printing",
                            "What is Extended Reality?",
                            "Chatbot 101",
                            "Design Thinking",
                          ].map((listText, i) => (
                            <ListItem key={i}>
                              <ListIcon
                                as={ChevronRightIcon}
                                color={nGreen[400]}
                              />
                              {listText}
                            </ListItem>
                          ))}
                        </List>
                        <br />
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
              <br />
              <Image
                src="https://imgur.com/XL3ZnkE.png"
                alt=""
                w="100%"
              />
              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr) ",
                  xl: "repeat(4, 1fr)",
                }}
                gap={3}
                backgroundColor={primary[800]}
              >
                <GridItem w="100%" key={0} margin="auto">
                    <Image align="center" src={"https://i.gyazo.com/f5b4f1f049be02d298f3b59afe6e5829.jpg"} width="100%" alt="" />
                </GridItem>
                <GridItem w="100%" key={1} margin="auto">
                    <Image align="center" src={"https://i.gyazo.com/7c0b55c95205c859b3e500bb7a8c2b12.jpg"} width="100%" alt="" />
                </GridItem>
                <GridItem w="100%" key={2} margin="auto">
                    <Image align="center" src={"https://i.gyazo.com/5275b01ae90f5a7ed6d11c36e1226e6b.jpg"} width="100%" alt="" />
                </GridItem>
                <GridItem w="100%" key={3} margin="auto">
                    <Image align="center" src={"https://www.mindef.gov.sg/web/wcm/connect/rsaf/0999fab4-9037-4ba7-81ff-73a1fbfca76e/3.JPG?MOD=AJPERES"} width="100%" alt="" />
                </GridItem>

              </Grid>
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
                size={"2xl"}
                bgGradient={`linear(to-r, ${primary[300]}, ${primary[100]} , ${secondary[500]})`}
                bgClip="text"
                mb={5}
                textAlign="center"
              >
                Time before next Information Drop
              </Heading>
              <Text fontSize="3xl" align="center">
                {days} Days : {hours} Hours : {minutes} Minutes : {seconds}{" "}
                Seconds
              </Text>
            </Box>
          </Container>
        </Box>
      </Stack>
    </>
  );
}
