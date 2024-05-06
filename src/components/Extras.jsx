import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Fade, JackInTheBox, Rotate } from "react-awesome-reveal";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import Divider from "@mui/material/Divider";
import { useMediaQuery } from "@mui/material";
import portfolioDetails from "../data/portfolioDetails";

export default function Extras() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box
      id="hero"
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center oveflow-hidden"
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ width: { xs: "100%", sm: "70%" }, textAlign: "center" }}
        >
          <Typography component="h2" variant="h2">
            <JackInTheBox duration="500">Wanna Work with me?</JackInTheBox>
          </Typography>
          <Typography
            color="primary"
            gutterBottom
            component="span"
            variant="h3"
            sx={{
              color: (theme) =>
                theme.palette.mode === "light"
                  ? "primary.main"
                  : "primary.dark",
            }}
          >
            <Rotate duration="500">Here are useful Links</Rotate>
          </Typography>
          <Fade delay="25">
            <Stack
              spacing={2}
              direction={isSmallScreen ? "column" : "row"}
              sx={{ width: "100%", justifyContent: "center" }}
            >
              <Button
                variant="text"
                size="medium"
                startIcon={<DownloadIcon />}
                href={portfolioDetails.details.resume}
                target="_blank"
              >
                Download Resume
              </Button>
              <Divider
                orientation={isSmallScreen ? "horizontal" : "vertical"}
                variant="middle"
                flexItem
              />
              <Button
                variant="text"
                size="medium"
                startIcon={<DownloadIcon />}
                href={portfolioDetails.details.CV}
                target="_blank"
              >
                Download Curriculum Vitae
              </Button>
              <Divider
                orientation={isSmallScreen ? "horizontal" : "vertical"}
                variant="middle"
                flexItem
              />
              <Button
                variant="text"
                size="medium"
                startIcon={<ContactSupportIcon />}
                href={portfolioDetails.details.mail}
              >
                Contact Me
              </Button>
            </Stack>
          </Fade>
        </Stack>
      </Container>
    </Box>
  );
}
