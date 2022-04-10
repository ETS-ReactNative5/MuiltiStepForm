import React from "react";
import Button from "@components/Button";
import { Box } from "@mui/material";
import { deptData } from "src/constant/welcome";
import Link from "next/link";
const { heading, button } = deptData;
const Department = () => {
    return (
        <Box>
            <h3>{heading}</h3>
            {button.map(({ label, type }, idx) => (
                <Link href="/contact">
                    <a>
                        <Button
                            label={label}
                            type={type}
                            key={`${label}_${idx}`}
                        />
                    </a>
                </Link>
            ))}
        </Box>
    );
};
export { Department };
