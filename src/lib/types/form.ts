import type { ButtonProps } from "./button.ts";
import type { InputProps } from "./input.ts";

export interface FormConfig {
    inputs: InputProps[];
    buttons: ButtonProps[];
}