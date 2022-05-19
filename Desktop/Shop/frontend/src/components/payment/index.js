import React from "react";
import { Button } from "./styles/style";
export default function Payment({children,...restProps}){
    return (
        <Button {...restProps}>{children}</Button>
    )
}