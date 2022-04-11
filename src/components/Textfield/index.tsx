import React from "react";
import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { useForm } from "react-hook-form";

type textProps = {
    name: string;
    type?: string;
    rules?: any;
    control?: any;
    label?: any;
    autoFocus?: boolean;
};

const Textfield = ({ label, name, autoFocus, rules }: textProps) => {
    const { handleSubmit, control } = useForm();
    return (
        <>
            <Controller
                control={control}
                defaultValue=""
                name={name}
                rules={rules}
                render={({
                    field: { onChange, value },
                    fieldState: { error },
                }) => (
                    <TextField
                        sx={{
                            margin: "2%",
                            width: "250px",
                        }}
                        label={label}
                        variant="standard"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error?.message}
                        autoFocus={autoFocus}
                    />
                )}
            />
            {/* <TextField
                sx={{ m: 2 }}
                id="outlined-basic"
                label={label}
                variant="outlined"
            /> */}
        </>
    );
};

export default Textfield;
