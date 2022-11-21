import { Box, LinkOverlay } from "@chakra-ui/react";
import { primary, secondary } from "@afnexus/hummingbird-ui-assets";
import Navbar from "../../features/navigation";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <Box
        //bgGradient={`linear(to-r, black, ${primary[400]}, ${secondary[400]})`}
        backgroundColor={primary[800]}
        bgImage="nightSkyBackground.svg"
        backgroundSize="300px 300px"
      >
        <main>{children}</main>
      </Box>
    </>
  );
}