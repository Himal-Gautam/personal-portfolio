import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import portfolioDetails from "../data/portfolioDetails";
import { Zoom, JackInTheBox } from "react-awesome-reveal";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useMediaQuery } from "@mui/material";

export default function Projects() {
  const isSmallScreen = useMediaQuery("(max-width:450px)");
  
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
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Press Shift key to scroll through projects
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
              sx={{ maxWidth: isSmallScreen ? "100%" : 345, boxShadow: 5 }}
              key={project.name}
              className="flex-shrink-0 snap-center"
              style={{ pointerEvents: "auto" }}
            >
              <Zoom duration="100">
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="\images\project.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    // startIcon={<GitHubIcon />}
                    startIcon={<OpenInNewIcon />}
                  >
                    {" Open "}
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    // endIcon={<OpenInNewIcon />}
                  >
                    Github
                  </Button>
                </CardActions>
              </Zoom>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
