import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Fade } from "react-awesome-reveal";
import portfolioDetails from "../data/portfolioDetails";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center oveflow-hidden"
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // pt: { xs: 14, sm: 20 },
          // pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ width: "100%", textAlign: "center", margin: "auto" }}
        >
          <Fade duration="100" cascade>
            <Typography component="h2" variant="h2">
              {portfolioDetails.name}
            </Typography>
          </Fade>
          <Fade duration="50" direction="left" cascade>
            <Typography
              color="primary"
              gutterBottom
              component="span"
              variant="h3"
              sx={{
                marginLeft: 2,
                marginRIght: 2,
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.dark",
              }}
            >
              {portfolioDetails.title}
            </Typography>
          </Fade>
          <Fade delay="75">
            <Typography
              variant="body1"
              textAlign="center"
              color="text.secondary"
            >
              {portfolioDetails.about}
            </Typography>
          </Fade>
        </Stack>
      </Container>
    </Box>
  );
}
