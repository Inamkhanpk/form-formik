import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import  { Info }   from './personalinfo';
import { Payment } from './payment';
import { Review } from "./review";
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Personal Info', 'Payment', 'Review'];
}

function getStepContent(stepIndex, setStep, setFormValues, formValues) {
    switch (stepIndex) {
        case 0:
            return <Info submit={setStep} prevValues={formValues} setFormValues={setFormValues} />;
        case 1:
            return <Payment submit={setStep} prevValues={formValues} setFormValues={setFormValues} />;
        case 2:
            return <Review submit={setStep} values={formValues} />;
        default:
            return 'Unknown stepIndex';
    }
}

export default function HorizontalLabelPositionBelowStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [formValues, setFormValues] = React.useState({})
    const steps = getSteps();

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {
                getStepContent(activeStep, setActiveStep, setFormValues, formValues)
            }

        </div>
    );
}