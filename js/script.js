let currentStep = 0;
const steps = document.querySelectorAll(".step");
const stepContents = document.querySelectorAll(".step-content");
const finalStep = document.getElementById("finalStep");

function updateStep() {
    steps.forEach((step, index) => {
        if (index === 0 || index <= currentStep) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }
    });

    stepContents.forEach((content, index) => {
        content.classList.toggle("active", index === currentStep);
    });

    finalStep.style.display = currentStep === 3 ? "block" : "none";
}


document.getElementById("submit-title").addEventListener("click", () => {
    currentStep = 1;
    updateStep();
});

document.getElementById("submitDescription").addEventListener("click", () => {
    if (currentStep === 1) {
        currentStep = 2;
        updateStep();
    }
});

document.getElementById("backStep1").addEventListener("click", () => {
    if (currentStep === 1 || currentStep === 2) {
        currentStep--;
        updateStep();
    }
});

document.getElementById("noGoBack").addEventListener("click", () => {
    currentStep = 1;
    updateStep();
});

document.getElementById("yesGoAhead").addEventListener("click", () => {
    if (currentStep === 2) {
        currentStep = 3;
        updateStep();
    }
});


steps.forEach((step, index) => {
    step.addEventListener("click", () => {
        if ((index === 1 && currentStep >= 1) ||
            (index === 2 && currentStep >= 2) ||
            (index === 3 && currentStep === 3)) {
            currentStep = index;
            updateStep();
        }
    });
});

updateStep();
