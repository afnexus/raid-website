import { Container, Grid, Heading } from "@chakra-ui/react";
import EventCard from "../../features/events/components/EventCard";
import { EventData } from "../../features/events/types";
import { getSortedPostsData } from "../../features/utils/posts";
import path from "path";

export type EventPageProps = {
  allEventsData: EventData[];
};

export default function EventPage(props: EventPageProps) {
  const { allEventsData } = props;
  return (
    <Container minH="100vh" pt={20} maxW="container.xl">
      <Heading mb={8}>Events</Heading>
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          lg: "repeat(2,1fr)",
        }}
        gap={4}
      >
        {allEventsData.map((eventData, i) => (
          <EventCard key={i} {...eventData} />
        ))}
      </Grid>
    </Container>
  );
}

export async function getStaticProps() {
  const allEventsData = getSortedPostsData(
    path.join(process.cwd(), "content/events")
  );
  return {
    props: {
      allEventsData,
    },
  };
}
