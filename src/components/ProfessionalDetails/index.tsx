import React from "react";
import Textfield from "@components/Textfield";
import { professionData } from "src/constant/texfieldLayoutData";
import { Box } from "@mui/material";
import Button from "@components/Button";
import { useForm } from "react-hook-form";

const { heading, textData, button } = professionData;
const ProfessionForm = () => {
    const { handleSubmit, control } = useForm();
    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <Box>
                <h3>{heading}</h3>
                {textData.map(({ label, name, autoFocus, rules }) => (
                    <Textfield
                        label={label}
                        control={control}
                        autoFocus={autoFocus}
                        name={name}
                        rules={rules}
                    />
                ))}
                {<Button label={button.label} type={button.type} />}
            </Box>
        </form>
    );
};

export { ProfessionForm };
