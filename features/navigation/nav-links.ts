import { ButtonProps } from "@mui/material";

export type NavLink = {
  label: string;
  url: string;
  buttonProps?: ButtonProps;
};

export const navLinks: NavLink[] = [
  { label: "Home", url: "/" },
  { label: "Events", url: "/events" },
  { label: "Blog", url: "/blog" },
  { label: "Join us", url: "https://form.gov.sg/61ea66776c89fd001206bed0" },
  {
    label: "InnoFest 22/23",
    url: "/innofest",
    buttonProps: { variant: "outlined", color: "warning", sx: { px: 1 } },
  },
];
