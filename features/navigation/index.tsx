import { useRouter } from "next/router";
import {
  Box,
  Button,
  Container,
  Typography,
  Stack,
  Drawer,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { primary } from "@afnexus/hummingbird-ui-assets";
import { PropsWithChildren, useState } from "react";
import { navLinks } from "./nav-links";

export type NavbarProps = {};

type NavButtonProps = { direction: "row" | "column" };

function NavButtons({
  direction,
  children,
}: PropsWithChildren<NavButtonProps>) {
  const router = useRouter();
  return (
    <Stack direction={direction} spacing={1}>
      {navLinks.map((navLink, i) => (
        <Button
          key={i}
          onClick={() => router.push(navLink.url)}
          {...navLink.buttonProps}
        >
          {navLink.label}
        </Button>
      ))}
      {children}
    </Stack>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <IconButton onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={isOpen} onClose={() => setIsOpen(false)} anchor="top">
        <Box sx={{ p: 3 }}>
          <NavButtons direction="column"></NavButtons>
        </Box>
      </Drawer>
    </>
  );
}

export default function Navbar(props: NavbarProps) {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: 999,
        width: "100vw",
        background: primary[800],
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 1,
          pl: 2,
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: 20 }}>RAiD</Typography>
        {smallScreen ? <MobileMenu /> : <NavButtons direction="row" />}
      </Container>
      {/* <Divider /> */}
    </Box>
  );
}
