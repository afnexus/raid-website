import { primary } from "@afnexus/hummingbird-ui-assets";
import {
  Heading,
  Tag,
  Box,
  Text,
  Container,
  Avatar,
  Divider,
  CSSReset,
} from "@chakra-ui/react";
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import { useMemo } from "react";
import { PostData } from "../../features/blog/types";
import { Prose } from "@nikolovlazar/chakra-ui-prose";

export type BlogPostPageProps = { frontmatter: PostData; content: string };

export default function BlogPostPage(props: BlogPostPageProps) {
  const { id, date, title, description, author, tags } = props.frontmatter;
  const tagsAsArray = useMemo(() => {
    if (!tags) return [];
    return tags.split(", ");
  }, [tags]);

  return (
    <Box minH="100vh" p={3} pt={20}>
      <CSSReset />
      <Container
        maxW="container.lg"
        p={10}
        background={primary[800]}
        rounded="xl"
      >
        {title && (
          <Heading size="lg" color={primary[50]}>
            {title}
          </Heading>
        )}
        {description && <Text>{description}</Text>}
        {tags && (
          <Box mt={3} display="flex" alignItems="center" gap={3}>
            {tagsAsArray.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </Box>
        )}
        {author && date && (
          <Box mt={3} display="flex" alignItems="center" gap={3}>
            <Avatar size="sm" />
            <Text>
              By {author}, {date}
            </Text>
          </Box>
        )}
        <Divider mt={3} />
        <Prose>
          <Box
            mt={5}
            dangerouslySetInnerHTML={{ __html: md().render(props.content) }}
          />
        </Prose>
      </Container>
    </Box>
  );
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}

// Generate the static props for the page
export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
