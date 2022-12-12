import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export const getFileReadStaticPaths = (dir: string) => {
  // Get list of all files from our posts directory
  const files = fs.readdirSync(dir);
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
};

type FileReadType = "events" | "posts";

export const getFileReadStaticProps = async (
  slug: string,
  readType: FileReadType
) => {
  const fileName = fs.readFileSync(`content/${readType}/${slug}.md`, "utf-8");
  const { data: frontmatter, content: rawContent } = matter(fileName);
  const content = await serialize(rawContent);
  return {
    props: {
      frontmatter,
      content,
    },
  };
};
