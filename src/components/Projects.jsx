import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import portfolioDetails from "../data/portfolioDetails";
import { JackInTheBox } from "react-awesome-reveal";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Container, useMediaQuery } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import { useTheme } from "@mui/system";

export default function Projects() {
  const isSmallScreen = useMediaQuery("(max-width:450px)");
  const theme = useTheme();

  return (
    <Box
      id="pricing"
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center oveflow-hidden"
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 3, sm: 6, lg: 10 },
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography component="h2" variant="h4">
            <JackInTheBox duration="700" driection="down">
              Projects
            </JackInTheBox>
          </Typography>
          {!isSmallScreen && (
            <Typography variant="body1" sx={{ color: "grey.400" }}>
              Press Shift key to scroll through projects
            </Typography>
          )}
          <Typography variant="caption" sx={{ color: "grey.400" }}>
            <WarningIcon fontSize="small" color="warning" /> Some deployed links
            might not work due to old/imcompatible code - will be updated soon
          </Typography>
        </Box>
        <Box
          sx={{
            width: "70%",
            margin: "auto",
            overflowX: "auto",
            "&::-webkit-scrollbar": {
              display: "none", // Hide the scrollbar by default
            },
            zIndex: 1,
          }}
          className="flex snap-x snap-mandatory gap-x-10 pb-6"
        >
          {portfolioDetails.projects.map((project) => (
            <Card
              sx={{
                maxWidth: isSmallScreen ? "100%" : 345,
                boxShadow: 5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              key={project.name}
              className="flex-shrink-0 snap-center"
              style={{ pointerEvents: "auto" }}
            >
              <CardMedia
                component="img"
                alt={`${project.name} image`}
                height="140"
                image={
                  project.imageLink ? project.imageLink : "/images/project.jpg"
                }
                loading="lazy"
              />
              <CardContent style={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <Container>
                <img
                  src={
                    `https://skillicons.dev/icons?i=${project.technologies}&theme=${theme.palette.mode}`
                  }
                  alt={`${project.name} technologies`}
                />
              </Container>
              <CardActions
              >
                  {project.deployedLink && (
                    <Button
                      variant="outlined"
                      // style={{ marginBottom: 3 }}
                      startIcon={isSmallScreen ? null : <OpenInNewIcon />}
                      // sx={{ ...(isSmallScreen && { marginLeft: 1 }) }}
                    >
                      {" Open "}
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button
                      variant="outlined"
                      startIcon={!isSmallScreen ? <GitHubIcon /> : null}
                      // sx={{ ...(isSmallScreen && { maxWidth: "50%" }) }}
                    >
                      {" Github "}
                    </Button>
                  )}
                  {project.githubFrontendLink && (
                    <Button
                      variant="outlined"
                      startIcon={!isSmallScreen ? <GitHubIcon /> : null}
                      // sx={{ ...(isSmallScreen && { maxWidth: "50%" }) }}
                    >
                      {" Frontend "}
                    </Button>
                  )}
                  {project.githubBackendLink && (
                    <Button
                      variant="outlined"
                      startIcon={!isSmallScreen ? <GitHubIcon /> : null}
                      // sx={{ ...(isSmallScreen && { maxWidth: "50%" }) }}
                    >
                      {" Backend "}
                    </Button>
                  )}
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
