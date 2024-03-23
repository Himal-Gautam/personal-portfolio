import Lottie from "lottie-react";
import webDesignLayoutAnimation from "../assets/webDesignLayoutAnimation.json";
import Typography from "@mui/material/Typography";
import { Typewriter } from "react-simple-typewriter";

const style = {
  height: 400,
};

const UnderDevelopment = () => {
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center">
      <Typography
        component="h2"
        variant="h2"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignSelf: "center",
          textAlign: "center",
          textBase: "text-lg sm:text-xl",
        }}
      >
        <Typewriter
          words={[
            `Hold your seats tight .........`,
            `Portfolio is Under Development.........`,
          ]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={10}
          delaySpeed={500}
        />
      </Typography>
      <Lottie animationData={webDesignLayoutAnimation} style={style} />
    </div>
  );
};

export default UnderDevelopment;
