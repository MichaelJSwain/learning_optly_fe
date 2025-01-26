import { useDecision, useTrackEvent } from "@optimizely/react-sdk";
import { useEffect } from "react";

const PrimaryButton = () => {
    const [track, clientReady] = useTrackEvent();

    const [decision] = useDecision('button_colour_test');
    console.log(decision);

    useEffect(() => {
        // Send impression to optimizely
        console.log("sending impressions to optly")
    }, []);

    const backgroundColour = decision.variables.button_colour;

    const handleClick = () => {
        if (clientReady) {
            console.log("sending event to optly");
            track('button_click');
        }
    }

    return (
        <button onClick={handleClick} style={{background: backgroundColour}}>Click me</button>
    )
}

export default PrimaryButton;