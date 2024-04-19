import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import portfolioDetails from "../data/portfolioDetails";
import { Bounce, Fade } from "react-awesome-reveal";

export default function Education() {

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
          gap: { xs: 3, sm: 6 ,lg: 10},
          width: "100%"
        }}
      >
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography component="h2" variant="h4">
            <Fade duration="1500" driection="down">Education</Fade>
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Hover over dots to know about roles and responsibilities
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Stepper alternativeLabel activeStep={4}>
            {portfolioDetails.education.reverse().map((level, index) => (
              <Step key={level}>
                <StepLabel>
                  <Bounce
                    // direction={index % 2 ? "right" : "left"}
                    // cascade
                    duration="250"
                    delay={index * 300}
                  >
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
