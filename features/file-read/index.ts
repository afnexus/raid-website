import fs from "fs";
import matter from "gray-matter";

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

export const getFileReadStaticProps = (slug: string) => {
  const fileName = fs.readFileSync(`content/posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
};
