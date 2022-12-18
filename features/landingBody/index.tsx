import teams from "./constants/teams";
import Team from "./components/Team/index";
import { primary, secondary } from "@afnexus/hummingbird-ui-assets";
import { useRouter } from "next/router";
import { Box, Container, Grid, Button, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
type LandingBodyProps = {};

export default function LandingBody(props: LandingBodyProps) {
  const router = useRouter();
  return (
    <Box
      sx={{
        w: "100vw",
        h: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Paper
          sx={{
            p: 5,
            py: 8,
            mb: 10,
            backgroundColor: primary[800],
          }}
        >
          <Typography
            variant="h3"
            sx={{
              background: `linear-gradient(to right, ${primary[200]}, ${primary[100]} , ${secondary[500]})`,
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            <b>What is RAiD?</b>
          </Typography>
          <Typography fontSize="large">
            RAiD is a new agency focused on bringing <b>agile, innovative</b>{" "}
            and<b> digital transformation</b> to our organization.
          </Typography>
        </Paper>

        <Box sx={{ mb: 10 }}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Our Teams
          </Typography>

          <Grid container spacing={3}>
            {teams.map((team, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Team
                  name={team.name}
                  subtitle={team.subtitle}
                  description={team.description}
                  image={team.image}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Paper
          sx={{
            mb: 20,
            p: 5,
            py: 8,
            display: "flex",
            alignItems: "center",
            gap: 3,
            backgroundColor: primary[800],
          }}
        >
          <Stack spacing={1}>
            <Typography
              variant="h3"
              sx={{
                background: `linear-gradient(to right, ${primary[200]}, ${primary[100]} , ${secondary[500]})`,
                "background-clip": "text",
                "text-fill-color": "transparent",
              }}
            >
              <b>We are recruiting!</b>
            </Typography>
            <Typography>
              Do you think you have what it takes to join our team?
            </Typography>
            <Box>
              <Button
                onClick={() =>
                  router.push("https://form.gov.sg/61ea66776c89fd001206bed0")
                }
                color="primary"
                sx={{ color: primary[300] }}
                variant="contained"
              >
                Sign up
              </Button>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
