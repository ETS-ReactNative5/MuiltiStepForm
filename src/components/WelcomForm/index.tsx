import React from "react";
import Button from "@components/Button";
import { welcomeData } from "src/constant/welcome";
import { Box } from "@mui/material";
import Link from "next/link";
const { heading, button } = welcomeData;

const Welcome = () => {
    return (
        <Box>
            <h3>{heading}</h3>
            {button.map(({ label }) => (
                <Link href="/dept" passHref>
                    <a>
                        <Button label={label} />
                    </a>
                </Link>
            ))}
        </Box>
    );
};

export default Welcome;
