"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import LoadingButton from "./loadingButton";

const FormSubmitButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    const {pending} = useFormStatus();

  return (
    <LoadingButton {...props} type="submit" loading={pending}/>
  )
}

export default FormSubmitButton

