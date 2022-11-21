import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import teams from './constants/teams';
import Team from './components/Team/index';

type LandingBodyProps = {};

export default function LandingBody(props: LandingBodyProps) {
  return (
    <Box
      w="100vw"
      h="100%"
      color="white"
      display="flex"
      justifyContent="center">
      <Container maxW={'900'}>
        <Box
          textAlign="center"
          padding="20"
          boxShadow={'base'}
          rounded={'md'}
          bgImage="nightSkyBackground.svg">
          <Heading padding="5" size={'3xl'} textTransform={'uppercase'}>
            Who are We?
          </Heading>
          <Text>
            RAiD is a new agency focused on bringing agile, innovative and
            digital transformation to our organization.
          </Text>
        </Box>

        <Box marginTop={'48'}>
          <Heading
            padding="5"
            size="3xl"
            textAlign="center"
            textTransform={'uppercase'}>
            Our Teams
          </Heading>

          <Grid
            templateColumns="repeat(2, 1fr)"
            templateRows="repeat(2, 1fr)"
            gap={4}
            padding={4}>
            {teams.map((team) => (
              <GridItem colSpan={1}>
                <Team
                  name={team.name}
                  description={team.description}
                  image={team.image}
                />
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
