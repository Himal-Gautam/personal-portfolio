import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import { SocialIcon } from "react-social-icons/component";
import { Box } from "@mui/material";
import "react-social-icons/linkedin";
import "react-social-icons/github";
import "react-social-icons/twitter";
import "react-social-icons/email";
import portfolioDetails from "../data/portfolioDetails";

const SocialIcons = ({ mode }) => {
  return (
    <>
      {" "}
      <Box sx={{ w: 10 }}>
        <Box className="fixed bottom-0 left-0 p-5" sx={{ w: 10 }}>
          <Stack direction="column" spacing={2} sx={{ w: 40}}>
            {portfolioDetails.socialLinks.map((social) => (
              <SocialIcon
                key={social.network}
                target="_blank"
                network={social.network}
                style={{ height: 40, width: 40 }}
                fgColor="#141414"
                bgColor={mode === "dark" ? "#FFFFFF" : "#42a5f5"}
                url={social.url}
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

SocialIcons.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default SocialIcons;
