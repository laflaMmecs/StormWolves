import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "../ContactUs/CopyText.module.css"
function CopyText({ text }) {
    function copyText() {
        navigator.clipboard.writeText(text);
        toast.success("Текст скопирован!");
    }

    return (
        <>
            <input className={classes.inp} onClick={copyText} value={text}/>
            <ToastContainer />
        </>
    );
}

export default CopyText;