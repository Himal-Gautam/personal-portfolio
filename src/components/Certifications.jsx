import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import portfolioDetails from "../data/portfolioDetails";
import { border, borderColor, borderRadius, color, display, fontWeight, height, minHeight, spacing, style, textAlign, useTheme, width } from "@mui/system";
import { Fade } from "react-awesome-reveal";
import { duration, useMediaQuery } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";
import src from "gsap/src";
import React from "react";

export default function Certifications() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box
      id="certifications"
      className="h-full md:h-screen flex flex-grow flex-col space-y-8 items-center justify-center text-center"
      sx={{ ...(isSmallScreen && { paddingTop: 15 }) }}
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
                    minHeight: 200,
                    height: "100%",
                    border: "1px solid",
                    borderColor: theme === "light" ? "grey" : "grey.800",
                    boxShadow: 10,
                    position: "relative",
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
                      className="w-20 h-auto border-r-15"
                      loading="lazy"
                      style={{ borderRadius: '20%' }}
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
                  <Box
                    id="link"
                    sx={{
                      position: "absolute",
                      top: 3,
                      right: 3,
                      textAlign: "right", // Align the link content within the box
                    }}
                  >
                    <Link href={item.link} target="_blank">
                      <Tooltip title="View Cerificate" placement="left">
                        <IconButton>
                          <OpenInNewIcon />
                        </IconButton>
                      </Tooltip>
                    </Link>
                  </Box>
                </Stack>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
