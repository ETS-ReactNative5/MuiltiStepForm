import React from "react";
import Button from "@components/Button";
import { Box } from "@mui/material";
import { deptData } from "src/constant/welcome";
import Link from "next/link";
const { heading, button } = deptData;
const Department = () => {
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
      {button.map(({ label, type }, idx) => (
        <Link href="/contact">
          <a style={{ textDecoration: "none" }}>
            <Button label={label} type={type} key={`${label}_${idx}`} />
          </a>
        </Link>
      ))}
    </Box>
  );
};
export { Department };
