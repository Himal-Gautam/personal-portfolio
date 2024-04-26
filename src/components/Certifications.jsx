import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import portfolioDetails from "../data/portfolioDetails";
import { useTheme } from "@mui/system";
import { Fade } from "react-awesome-reveal";

export default function Certifications() {
  const theme = useTheme();

  return (
    <Box
      id="certifications"
      className="h-full md:h-screen flex flex-grow flex-col space-y-8 items-center justify-center text-center"
    >
      <Container
        sx={{
          // position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box>
          <Fade cascade duration="100">
            <Typography component="h2" variant="h4">
              Certifications
            </Typography>
            <Typography variant="body1" sx={{ color: "grey.400" }}>
              Eagerness to be up-to-date
            </Typography>
          </Fade>
        </Box>
        <Grid container spacing={2.5}>
          {portfolioDetails.certifications.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Fade cascade direction="up">
                <Stack
                  direction="column"
                  color="inherit"
                  component={Card}
                  spacing={1}
                  useFlexGap
                  sx={{
                    p: 3,
                    minHeight: 250,
                    height: "100%",
                    border: "1px solid",
                    borderColor: theme === "light" ? "grey" : "grey.800",
                    boxShadow: 10,
                  }}
                >
                  <Box
                    sx={{
                      // opacity: "50%",
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                      minHeight: 80,
                      height: 1 / 3,
                    }}
                  >
                    <img
                      src={`/svg/${item.issuer}.svg`}
                      alt={`${item.issuer} Logo`}
                      className="w-20 h-auto"
                      loading="lazy"
                    />
                  </Box>
                  <div>
                    <Typography fontWeight="medium" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      textAlign="center"
                      color="text.secondary"
                    >
                      {item.description}
                    </Typography>
                  </div>
                </Stack>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
