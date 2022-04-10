import React from "react";
import { Button } from "@mui/material";

type btnProps = {
    label: string;
    type?: string;
    onClick?: () => void;
};

const Btn = ({ label }: btnProps) => {
    return (
        <Button variant="contained" sx={{ m: 2 }} type="submit">
            {label}
        </Button>
    );
};

export default Btn;
