import { primary, secondary } from "@afnexus/hummingbird-ui-assets";
import { Card, CardContent, Typography, Box } from "@mui/material";
import Image from "next/image";
type TeamProps = {
  name: string;
  description: string;
  image: string;
  subtitle?: string;
};

export default function Team(props: TeamProps) {
  const { name, description, image, subtitle } = props;
  return (
    <Card sx={{ height: "100%", p: 2, backgroundColor: primary[800] }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 200,
          }}
        >
          <Image
            width={130}
            height={130}
            src={image}
            style={{
              objectFit: "contain",
              filter: `brightness(0) saturate(100%) invert(27%) sepia(10%) saturate(5263%) hue-rotate(194deg) brightness(300%) contrast(80%)`,
            }}
            alt={name}
          />
        </Box>
        <Typography
          variant="h4"
          sx={{
            background: `linear-gradient(to right, ${primary[200]}, ${primary[100]} , ${secondary[500]})`,
            "background-clip": "text",
            "text-fill-color": "transparent",
          }}
        >
          <b>{name}</b>
        </Typography>
        {subtitle && (
          <Typography variant="h5" sx={{ color: secondary[200] }}>
            <b>{subtitle}</b>
          </Typography>
        )}
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  );
}
