import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import portfolioDetails from "../data/portfolioDetails";
import { Bounce, Fade } from "react-awesome-reveal";
import { useMediaQuery } from "@mui/material";

export default function Education() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

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
          <Fade duration="1500" driection="down">
            <Typography component="h2" variant="h4">
              Education
            </Typography>
            <Typography variant="body1" sx={{ color: "grey.400" }}>
              Showcasing Academic Achievements and Expertise
            </Typography>
          </Fade>
        </Box>
        <Box
          sx={{
            width: "100%",
            ...(isSmallScreen && { paddingLeft: 10, paddingRight: 5 }),
          }}
        >
          <Stepper
            alternativeLabel={!isSmallScreen}
            activeStep={4}
            orientation={isSmallScreen ? "vertical" : "horizontal"}
          >
            {portfolioDetails.education.reverse().map((level, index) => (
              <Step key={level}>
                <StepLabel>
                  <Bounce duration="250" delay={index * 300}>
                    <Typography variant="h6" component="span">
                      <b>{level.degree}</b>
                    </Typography>
                    <Typography variant="subtitle1">{level.school}</Typography>
                    <Typography variant="body1">
                      {level.graduationYear}
                    </Typography>
                  </Bounce>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Box>
    </Box>
  );
}
