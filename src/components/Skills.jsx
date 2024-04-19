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

export default function Skills() {
  const theme = useTheme();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box
      id="logoCollection"
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center oveflow-hidden"
      sx={{ py: 4 }}
    >
      <Typography component="h2" variant="h4">
        <Zoom>Technologies I have used</Zoom>
      </Typography>
      <TableContainer sx={{ maxWidth: 2 / 3 }}>
        <Table
          aria-label="simple table"
        >
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
                      src={`https://skillicons.dev/icons?i=${row.technologies}&theme=${theme.palette.mode}`}
                      alt={`${row.type} technologies`}
                    />
                  </Slide>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          {/* <TableBody>
            {portfolioDetails.techStack.map((row, i) => (
              <TableRow
                key={row.type + i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Fade delay={i * 3}>
                    <b>{row.type}</b>
                  </Fade>
                </TableCell>
                <TableCell align="left">
                  <Fade delay={i * 3}>
                    <img
                      src={`https://skillicons.dev/icons?i=${row.technologies}&theme=${theme.palette.mode}`}
                      alt={`${row.type} technologies`}
                    />
                  </Fade>
                </TableCell>
              </TableRow>
            ))}
          </TableBody> */}
        </Table>
      </TableContainer>
    </Box>
  );
}
