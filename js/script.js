let currentStep = 0;
const steps = document.querySelectorAll(".step");
const stepContents = document.querySelectorAll(".step-content");
const finalStep = document.getElementById("finalStep");

function updateStep() {
    steps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
    });

    stepContents.forEach((content, index) => {
        content.classList.toggle("active", index === currentStep);
    });

    finalStep.style.display = currentStep === 3 ? "block" : "none";
}

function changeStep(nextStep) {
    if ((currentStep === 3 || nextStep === currentStep + 1) || (nextStep === currentStep - 1)) {
        currentStep = nextStep;
        updateStep();
    }
}

steps.forEach((step, index) => {
    step.addEventListener("click", () => {
        if (currentStep === 3 || index === currentStep + 1 || index === currentStep - 1) {
            currentStep = index;
            updateStep();
        }
    });
});

document.getElementById("submit-title").addEventListener("click", () => {
    changeStep(1);
});

document.getElementById("backStep1").addEventListener("click", () => {
    changeStep(0);
});

document.getElementById("submitDescription").addEventListener("click", () => {
    changeStep(2);
});

document.getElementById("noGoBack").addEventListener("click", () => {
    changeStep(1);
});

document.getElementById("yesGoAhead").addEventListener("click", () => {
    currentStep = 3;
    updateStep();
});

updateStep();