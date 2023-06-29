import React, { ChangeEvent } from "react"

import { InputCustomizado } from "./style";

interface InputProps {
    name?: string;
    value: string;
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    type: string;
}

export const Input: React.FC<InputProps> = ({ name, value, placeholder, onChange, type }) => {
    return (
        <InputCustomizado 
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            type={type}
        />
    )
}