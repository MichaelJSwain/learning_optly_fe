import { useDecision } from "@optimizely/react-sdk";
import { useEffect } from "react";

const PrimaryButton = () => {

    useEffect(() => {
        // Send impression to optimizely
    }, []);

    return (
        <button>Click me</button>
    )
}

export default PrimaryButton;