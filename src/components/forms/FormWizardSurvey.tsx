
import React from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import '../../styles/_form.scss'

export default function FormWizardSurvey() {
    const [firstTabInput, setFirstTabInput] = React.useState<string>("");

    const handleComplete = () => {
        console.log("Form completed!");
        // Handle form completion logic here
    };
    // check validate tab
    const checkValidateTab = () => {
        console.log(firstTabInput);
        if (firstTabInput === "") {
            return false;
        }
        return true;
    };
    // error messages
    const errorMessages = () => {
        // you can add alert or console.log or any thing you want
        alert("Please fill in the required fields");
    };

    return (
        <>
            <FormWizard onComplete={handleComplete}>
                <FormWizard.TabContent title="Personal details" icon="ti-user">
                    <h3>First Tab</h3>
                    <p>Some content for the first tab</p>
                    <label>
                        Required Field
                        <span
                            style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}
                        >
                            *
                        </span>
                    </label>
                    <br />
                    <input
                        className="form-control"
                        type="text"
                        value={firstTabInput}
                        onChange={(e) => setFirstTabInput(e.target.value)}
                    />
                </FormWizard.TabContent>
                {/* Tabs should be validated */}
                <FormWizard.TabContent
                    title="Additional Info"
                    icon="ti-settings"
                    isValid={checkValidateTab()}
                    validationError={errorMessages}
                >
                    <h3>Second Tab</h3>
                    <p>Some content for the second tab</p>
                </FormWizard.TabContent>
                <FormWizard.TabContent title="Last step" icon="ti-check">
                    <h3>Last Tab</h3>
                    <p>Some content for the last tab</p>
                </FormWizard.TabContent>
            </FormWizard>
            {/* add style */}
            <style>{`
        

      `}</style>
        </>
    );
}
