
import { useState, useMemo, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { toast, ToastContainer } from 'react-toastify';

import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/_form.scss'

import Switch from "../shared/Switch";
import Slider from "../shared/Slider";

interface FormData {
    name: string;
    email: string;
    birthDate: string;
    companySatisfaction: number;
    workersSatisfaction: number;
    participation: boolean;
    feedback: string;
}

const FormWizardSurvey: React.FC = () => {
    const { t } = useTranslation();

    const [startIndex, setStartIndex] = useState<number>(0);
    const [resetKey, setResetKey] = useState<number>(0);

    // Initialize formData using useMemo to read from localStorage once
    const initialFormData = useMemo(() => {
        const savedData = JSON.parse(localStorage.getItem('formData') || '{}');
        return savedData && Object.keys(savedData).length > 0 ? savedData : {
            name: '',
            email: '',
            birthDate: '',
            companySatisfaction: 5,
            workersSatisfaction: 5,
            participation: false,
            feedback: '',
        };
    }, []);

    const [formData, setFormData] = useState<FormData>(initialFormData);

    // Save formData to localStorage whenever formData changes
    useEffect(() => {
        if (formData) {
            localStorage.setItem('formData', JSON.stringify(formData));
        }
    }, [formData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSliderChange = (newValue: number, satisfactionType: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [satisfactionType]: newValue,
        }));
    };

    const handleToggleChange = (state: boolean) => {
        setFormData((prevData) => ({
            ...prevData,
            participation: state,
        }));
    };

    const handleComplete = () => {
        // Clear the localStorage
        localStorage.removeItem('formData');

        // Reset the formData state to its initial state
        setFormData({
            name: '',
            email: '',
            birthDate: '',
            companySatisfaction: 5,
            workersSatisfaction: 5,
            participation: false,
            feedback: '',
        });

        // Reset the startIndex to the first step (Step 1)
        setStartIndex(0);

        // Change the key to force re-render of the FormWizard component
        setResetKey((prevKey) => prevKey + 1);

        toast.success(t("survey.completed"), {
            position: "top-center",
        });
    };

    const checkValidateTab0 = () => {
        return formData.name !== "" && formData.email !== "" && formData.birthDate !== "";
    };

    const checkValidateTab2 = () => {
        return formData.feedback !== "";
    };

    const errorMessages = () => {
        toast.error(t("survey.error"), {
            position: "top-center",
        });
    };

    return (
        <>
            <ToastContainer />
            <FormWizard stepSize="xs" darkMode={true}
                key={resetKey} // Use the key to force a re-mount
                color="darkblue"
                customDarkModeColor={{
                    tab: "#6495ed", //hex color
                    tabIconColor: "#ffffff", //rgb color
                }}
                backButtonTemplate={(handlePrevious) => (
                    <div className="wizard-footer-left" style={{ backgroundColor: "rgb(0, 0, 0)", borderColor: "rgb(0, 0, 0)", borderRadius: "4px" }}><button onClick={handlePrevious} className="wizard-btn" type="button" style={{ color: "rgb(255, 255, 255)", backgroundColor: "rgb(0, 0, 0)" }}>{t("buttons.back")}</button></div>
                )}
                nextButtonTemplate={(handleNext) => (
                    <div className="wizard-footer-right" style={{ backgroundColor: "rgb(0, 0, 0)", borderColor: "rgb(0, 0, 0)", borderRadius: "4px" }}><button onClick={handleNext} className="wizard-btn" type="button" style={{ color: "rgb(255, 255, 255)", backgroundColor: "rgb(0, 0, 0)" }}>{t("buttons.next")}</button></div>
                )}
                finishButtonTemplate={(handleComplete) => (
                    <div className="wizard-footer-right" style={{ backgroundColor: "rgb(0, 0, 0)", borderColor: "rgb(0, 0, 0)", borderRadius: "4px" }}><button onClick={handleComplete} className="wizard-btn" type="button" style={{ color: "rgb(0, 0, 0)", backgroundColor: "rgb(250, 213, 4)" }}>{t("buttons.finish")}</button></div>
                )}
                onComplete={handleComplete} startIndex={startIndex}>
                <FormWizard.TabContent title={t("survey.personalData")} icon="ti-user">
                    <form className="responsive-form">
                        <div className="form-group">
                            <label htmlFor="name">{t("survey.name")}:<span className="required">*</span></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">{t("survey.email")}:<span className="required">*</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="birthDate">{t("survey.birthDate")}:<span className="required">*</span></label>
                            <input
                                type="date"
                                id="birthDate"
                                name="birthDate"
                                value={formData.birthDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </form>
                </FormWizard.TabContent>
                <FormWizard.TabContent
                    title={t("survey.satisfactionMeasure")}
                    icon="ti-settings"
                    isValid={checkValidateTab0()}
                    validationError={errorMessages}
                >
                    <form className="responsive-form">
                        <div className="form-group">
                            <label htmlFor="companySatisfaction">{t("survey.companySatisfaction")}:<span className="required">*</span></label>
                            <Slider id="companySatisfaction" min={0} max={10} value={formData.companySatisfaction} onChange={(ev) => handleSliderChange(ev, 'companySatisfaction')} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="workersSatisfaction">{t("survey.workerSatisfaction")}:<span className="required">*</span></label>
                            <Slider id="workersSatisfaction" min={0} max={10} value={formData.workersSatisfaction} onChange={(ev) => handleSliderChange(ev, 'workersSatisfaction')} />
                        </div>
                    </form>
                </FormWizard.TabContent>
                <FormWizard.TabContent title={t("survey.comments")} icon="ti-check">
                    <form className="responsive-form">
                        <div className="form-group">
                            <label htmlFor="participation">{t("survey.participation")}:<span className="required">*</span></label>
                            <Switch id="participation" isOn={formData.participation} onToggle={handleToggleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="feedback">{t("survey.feedback")}:<span className="required">*</span></label>
                            <div className="text-area-container">
                                <textarea
                                    id="feedback"
                                    name="feedback"
                                    value={formData.feedback}
                                    onChange={handleChange}
                                    placeholder={t("survey.feedbackPlaceholder")}
                                    maxLength={200}
                                    required className="text-area"
                                />
                                <p className="char-count">
                                    {formData.feedback.length}/{200} {t("survey.chars")}
                                </p>
                            </div>
                        </div>
                    </form>
                </FormWizard.TabContent>
                <FormWizard.TabContent
                    title={t('survey.confirmation')}
                    icon="ti-check"
                    isValid={checkValidateTab2()}
                    validationError={errorMessages}
                >
                    <div className="summary-container">
                        <h2>{t('survey.summaryTitle')}</h2>
                        <div className="summary-item">
                            <strong>{t('survey.name')}:</strong> <span>{formData.name || t('survey.notProvided')}</span>
                        </div>
                        <div className="summary-item">
                            <strong>{t('survey.email')}:</strong> <span>{formData.email || t('survey.notProvided')}</span>
                        </div>
                        <div className="summary-item">
                            <strong>{t('survey.birthDate')}:</strong> <span>{formData.birthDate || t('survey.notProvided')}</span>
                        </div>
                        <div className="summary-item">
                            <strong>{t('survey.companySatisfaction')}:</strong>{" "}
                            <span>{formData.companySatisfaction}/10</span>
                        </div>
                        <div className="summary-item">
                            <strong>{t('survey.workerSatisfaction')}:</strong>{" "}
                            <span>{formData.workersSatisfaction}/10</span>
                        </div>
                        <div className="summary-item">
                            <strong>{t('survey.participation')}:</strong>{" "}
                            <span>{formData.participation ? t('survey.yes') : t('survey.no')}</span>
                        </div>
                        <div className="summary-item">
                            <strong>{t('survey.comments')}:</strong>{" "}
                            <span>{formData.feedback || t('survey.noComments')}</span>
                        </div>
                    </div>
                </FormWizard.TabContent>

            </FormWizard>
        </>
    );
}

export default FormWizardSurvey;