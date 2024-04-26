import { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/system";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import AOS from "aos";
import "aos/dist/aos.css";
import portfolioDetails from "../data/portfolioDetails";
import { Zoom, Slide } from "react-awesome-reveal";
import { useMediaQuery } from "@mui/material";

export default function Skills() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:900px)");
  const theme = useTheme();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box
      id="logoCollection"
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center oveflow-hidden"
    >
      <Typography component="h2" variant="h4">
        <Zoom>Technologies I have used</Zoom>
      </Typography>
      <TableContainer sx={{ maxWidth: "75%" }}>
        <Table aria-label="simple table">
          <TableBody>
            {portfolioDetails.techStack.map((row, i) => (
              <TableRow key={row.type + i}>
                <TableCell component="th" scope="row">
                  <Slide delay={i * 3}>
                    <b>{row.type}</b>
                  </Slide>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    overflowY: "scroll",
                    "&::-webkit-scrollbar": {
                      display: "none",
                    },
                  }}
                >
                  <Slide direction="right" delay={i * 3}>
                    <img
                      src={
                        `https://skillicons.dev/icons?i=${row.technologies}&theme=${theme.palette.mode}` +
                        (isSmallScreen ? "&perline=4" : "") +
                        (isMediumScreen ? "&perline=6" : "")
                      }
                      alt={`${row.type} technologies`}
                    />
                  </Slide>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
