@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";

import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { MessageComponent } from '@syncfusion/ej2-react-notifications';
import {
  StepperComponent,
  StepsDirective,
  StepDirective,
} from '@syncfusion/ej2-react-navigations';
import {
  TextBoxComponent,
  TextAreaComponent,
} from '@syncfusion/ej2-react-inputs';

// Step 1: Survey Introduction
const SurveyStepOne = ({ onNext }) => {
  return (
    <div className="step-content step-active">
      <div id="agreement-text">
        <p>
          Welcome! This survey is an opportunity for you to share your opinions
          and experiences, contributing to the ongoing improvement of our
          offerings.
        </p>
      </div>
      <label style={{ marginTop: '15px' }}>
        Enter your email <span className="required">*</span>
      </label>
      <TextBoxComponent id="add-email" placeholder="Enter here" />{' '}
      {/* Updated TextBoxComponent */}
      <button
        style={{ marginTop: '20px' }}
        className="e-btn nextStep stepperBtn"
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
};

// Step 2: Feedback
const SurveyStepTwo = ({ onNext, onPrevious }) => {
  return (
    <div className="step-content">
      <div className="question-container">
        <div className="feedback-section">
          <p className="feedback-label">
            Anything else you would like to share?{' '}
            <span className="required">*</span>
          </p>
          <TextAreaComponent
            id="feedback-text"
            placeholder="I have feedback on..."
            width={'500px'}
          />
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <button
          style={{ marginTop: '20px', marginRight: '5%' }}
          className="e-btn previousStep"
          onClick={onPrevious}
        >
          Previous
        </button>
        <button
          style={{ marginTop: '20px' }}
          className="e-btn nextStep"
          onClick={onNext}
        >
          Submit Feedback
        </button>
      </div>
    </div>
  );
};

// Step 3: Submission
const SurveyStepThree = ({ feedbackMessage, onConfirm }) => {
  return (
    <div class="step-content">
      <MessageComponent
        id="msg_success"
        content="Thanks! Feedback has been submitted successfully."
        severity="Success"
      ></MessageComponent>
    </div>
  );
};

const Validation = () => {
  const stepperObj = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const handleNextStep = () => {
    stepperObj.current.nextStep();
  };

  const handlePreviousStep = () => {
    stepperObj.current.previousStep();
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return <SurveyStepOne onNext={handleNextStep} />;
      case 1:
        return (
          <SurveyStepTwo
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
          />
        );
      case 2:
        return <SurveyStepThree />;
      default:
        return null;
    }
  };

  return (
    <div className="control-pane">
      <div className="control-section">
        <div className="validation-stepper-section">
          <StepperComponent
            ref={stepperObj}
            linear={true}
            stepChanging={(args) => setActiveStep(args.activeStep)}
          >
            <StepsDirective>
              <StepDirective
                iconCss="sf-icon-survey-intro"
                text="Survey Introduction"
              />
              <StepDirective
                iconCss="sf-icon-survey-feedback"
                text="Feedback"
              />
              <StepDirective iconCss="sf-icon-survey-status" text="Status" />
            </StepsDirective>
          </StepperComponent>
        </div>
        <div id="validation-step-content">{renderStepContent()}</div>
      </div>
    </div>
  );
};
export default Validation;

const root = createRoot(document.getElementById('sample'));
root.render(<Validation />);
