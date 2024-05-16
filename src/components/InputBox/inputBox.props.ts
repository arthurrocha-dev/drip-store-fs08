import React from "react";

export interface InputBoxProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  id: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  value?: string;
}
