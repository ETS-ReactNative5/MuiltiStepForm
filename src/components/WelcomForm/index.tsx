import React from "react";
import Button from "@components/Button";
import { welcomeData } from "src/constant/welcome";
import { Box } from "@mui/material";
import Link from "next/link";
const { heading, button } = welcomeData;

const Welcome = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <h3>{heading}</h3>
      {button.map(({ label }) => (
        <Link href="/dept" passHref>
          <a style={{textDecoration:"none"}}>
            <Button label={label} />
          </a>
        </Link>
      ))}
    </Box>
  );
};

export default Welcome;
