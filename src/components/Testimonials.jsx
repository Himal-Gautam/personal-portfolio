import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import portfolioDetails from "../data/portfolioDetails";
import { Zoom, AttentionSeeker } from "react-awesome-reveal";

export default function Testimonials() {
  return (
    <Container
      id="testimonials"
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center oveflow-hidden"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          <AttentionSeeker effect="pulse">Testimonials</AttentionSeeker>
        </Typography>
        {/* <Typography variant="body1" color="text.secondary">
          See what our customers love about our products. Discover how we excel in
          efficiency, durability, and satisfaction. Join us for quality, innovation,
          and reliable support.
        </Typography> */}
      </Box>
      <Zoom>
        <Grid container spacing={2}>
          {portfolioDetails.testimonials.map((testimonial, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ display: "flex" }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flexGrow: 1,
                  p: 1,
                  boxShadow: 10,
                }}
              >
                <CardContent>
                  <Box
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      textAlign: "left",
                      maxHeight: 100,
                      overflowY: "scroll",
                      "&::-webkit-scrollbar": {
                        display: "none",
                      },
                    }}
                  >
                    {testimonial.testimonial}
                  </Box>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    pr: 2,
                  }}
                >
                  <CardHeader
                    sx={{ textAlign: "left" }}
                    avatar={<Avatar>{testimonial.name.slice(0, 1)}</Avatar>}
                    title={testimonial.name}
                    subheader={testimonial.occupation}
                  />
                  {/* <img
                  src={logos[index]}
                  alt={`Logo ${index + 1}`}
                  style={logoStyle}
                /> */}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Zoom>
    </Container>
  );
}
