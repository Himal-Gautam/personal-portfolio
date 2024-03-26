import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/linkedin";
import "react-social-icons/github";
import "react-social-icons/twitter";
import "react-social-icons/email";

const SocialIcons = ({ mode }) => {
  const social_icons = [
    { network: "github", url: "https://github.com/Himal-Gautam" },
    { network: "linkedin", url: "https://www.linkedin.com/in/himal-gautam/" },
    { network: "email", url: "mailto:himal.developer.job@gmail.com" },
    { network: "twitter", url: "https://twitter.com/_himal_gautam" },
  ];

  return (
    <>
      {" "}
      <div className="fixed bottom-0 left-0 w-screen h-100 w-10 p-5">
        <Stack direction="column" spacing={2}>
          {social_icons.map((social) => (
            <SocialIcon
              key={social_icons.indexOf(social_icons)}
              target="_blank"
              network={social.network}
              style={{ height: 40, width: 40 }}
              bgColor="#42a5f5"
              fgColor={mode === "dark" ? "#FFFFFF" : "#141414"}
              url={social.url}
            />
          ))}
        </Stack>
      </div>
    </>
  );
};

SocialIcons.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default SocialIcons;
