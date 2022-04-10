import React, { FC } from "react";
import Home from "@components/Home";
import Link from "next/link";
const IHome: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <Home />
        </div>
    );
};

export default IHome;
