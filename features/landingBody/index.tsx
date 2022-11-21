import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import teams from "./constants/teams";
import Team from "./components/Team/index";
import { primary, secondary } from "@afnexus/hummingbird-ui-assets";

type LandingBodyProps = {};

export default function LandingBody(props: LandingBodyProps) {
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
        <Box
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
            What is RAiD?
          </Heading>
          <Text fontSize="lg">
            RAiD is a new agency focused on bringing <b>agile, innovative</b>{" "}
            and<b> digital transformation</b> to our organization.
          </Text>
        </Box>

        <Box marginTop={"48"}>
          <Heading padding="5" size="2xl" textAlign="center">
            Our Teams
          </Heading>

          <Grid
            templateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={4}
            padding={4}
          >
            {teams.map((team, i) => (
              <GridItem colSpan={1} key={i}>
                <Team
                  name={team.name}
                  subtitle={team.subtitle}
                  description={team.description}
                  image={team.image}
                />
              </GridItem>
            ))}
          </Grid>
        </Box>
        <Box
          marginTop={48}
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
            pb={5}
          >
            We are recruiting!
          </Heading>
          <Text fontSize="lg" mb={5}>
            Do you think you have what it takes to join our team?
          </Text>
          <Button color={primary[500]} backgroundColor={primary[200]} size="lg">
            Sign up!
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
