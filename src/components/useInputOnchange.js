import { useState } from "react"

const UseInputOnchange = function() {
    const [value, setValue] = useState("...");
    const [error, setError] = useState(undefined);

    clearInput = ()=>{
        setValue("");
    }

    bindForm = {
        onChange: e => {
            setValue(e.target.value);
        }
    }

    return [value, error, bindForm, clearInput]
}