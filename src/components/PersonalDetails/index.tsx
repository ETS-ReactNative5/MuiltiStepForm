import React from "react";
import Textfield from "@components/Textfield";
import { personalData } from "src/constant/texfieldLayoutData";
import { Box } from "@mui/material";
import Button from "@components/Button";
import Link from "next/link";
import { useForm } from "react-hook-form";
const { heading, textData, button } = personalData;
const PersonalForm = () => {
  const { handleSubmit, control } = useForm();
  return (
    <Box style={{ width: "100%" }}>
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <h3>{heading}</h3>
        {textData.map(({ label, name, autoFocus, rules }, idx) => (
          <Textfield
            key={`${label}_${idx}`}
            control={control}
            name={name}
            label={label}
            autoFocus={autoFocus}
            rules={rules}
          />
        ))}
        {
          <Link href="/professional">
          <a style={{textDecoration:"none"}}>
              <Button label={button.label} type="Submit" />
            </a>
          </Link>
        }
      </form>
    </Box>
  );
};

export { PersonalForm };
