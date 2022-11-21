import { Box, LinkOverlay } from "@chakra-ui/react";
import { primary, secondary } from "@afnexus/hummingbird-ui-assets";

type LayoutProps = {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
      <>
        <Box bgGradient={`linear(to-r, black, ${primary[400]}, ${secondary[400]})`}>
            <main>{children}</main>
        </Box>
      </>
    )
  }