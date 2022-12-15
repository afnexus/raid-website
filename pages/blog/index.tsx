import { Box, Container, Grid, Heading } from "@chakra-ui/react";
import BlogCard from "../../features/blog/components/BlogCard";
import { PostData } from "../../features/blog/types";
import { getSortedPostsData } from "../../features/blog/utils/posts";

export type BlogPageProps = {
  allPostsData: PostData[];
};

export default function BlogPage(props: BlogPageProps) {
  const { allPostsData } = props;
  return (
    <Container minH="100vh" pt={20} maxW="container.xl">
      <Heading mb={8}>Blog</Heading>
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          lg: "repeat(2,1fr)",
        }}
        gap={4}
      >
        {allPostsData.map((postData, i) => (
          <BlogCard key={i} {...postData} />
        ))}
      </Grid>
    </Container>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
