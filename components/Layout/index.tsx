import { Box } from "@mui/material";
import Navbar from "../../features/navigation";
import Head from "next/head";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>RAiD</title>
      </Head>
      <Navbar />
      <Box
        sx={{
          backgroundImage: "url('/nightSkyBackground.svg')",
          backgroundSize: "300px 300px",
          overflowX: "hidden",
        }}
      >
        <main>{children}</main>
      </Box>
    </>
  );
}
