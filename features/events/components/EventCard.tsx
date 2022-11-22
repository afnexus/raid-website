import { primary } from "@afnexus/hummingbird-ui-assets";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Tag,
  Text,
  Stack
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { EventData } from "../types";
import dayjs from "dayjs";
import { AtSignIcon } from "@chakra-ui/icons";

export type EventCardProps = EventData;

export default function EventCard(props: EventCardProps) {
  const router = useRouter();
  const { id, date, title, description, tags, location, url } = props;
  const tagsAsArray = useMemo(() => {
    if (!tags) return [];
    return tags.split(", ");
  }, [tags]);
  const parsedDate = dayjs(date);
  return (
    <Card
      size="sm"
      color={primary[50]}
      backgroundColor={primary[800]}
      onClick={() => router.push(`/events/${id}`)}
      cursor="pointer"
      direction={{ base: 'column', sm: 'row' }}
    >
      <Stack padding={5} justifyContent="center">
        <Heading size={"2xl"}>{parsedDate.format('MMM')}</Heading>
        <Heading>{parsedDate.format('D')}</Heading>
        <Heading size={"md"}>{parsedDate.format('YYYY')}</Heading>
      </Stack>
      <Stack>
        <CardBody>
          {title && <Heading size="lg">{title}</Heading>}
          {description && <Text>{description}</Text>}
          {tags && (
            <Box mt={3}>
              {tagsAsArray.map((tag, i) => (
                <Tag key={i} mr={2} mb={2}>
                  {tag}
                </Tag>
              ))}
            </Box>
          )}
        </CardBody>
        <CardFooter verticalAlign={"center"}>
          <AtSignIcon />
          <Text>{location}</Text>
        </CardFooter>
      </Stack>
    </Card>
  );
}
