import Box from "@mui/material/Box";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import portfolioDetails from "../data/portfolioDetails";
import { Fade, Flip } from "react-awesome-reveal";

export default function Experience() {
  return (
    <Box
      id="pricing"
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center oveflow-hidden"
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography component="h2" variant="h4">
            <Flip duration="500">Experience</Flip>
          </Typography>
        </Box>
        <Box>
          <Timeline position="alternate-reverse">
            {portfolioDetails.experiences.map((experience, index) => (
              <TimelineItem key={experience}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" />
                  {index + 1 !== portfolioDetails.experiences && (
                    <TimelineConnector />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Fade
                    direction={index % 2 ? "right" : "left"}
                    cascade
                    duration="250"
                    delay={index * 600}
                  >
                    <Typography variant="h6" component="span">
                      <b>{experience.position}</b>
                    </Typography>
                    <Typography variant="subtitle1">
                      {experience.company}
                    </Typography>
                    <Typography variant="body1">
                      {experience.duration}
                    </Typography>
                    <Typography variant="body2">
                      {experience.location}
                    </Typography>
                  </Fade>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Container>
    </Box>
  );
}
