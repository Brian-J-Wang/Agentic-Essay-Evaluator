# Agentic-Essay-Evaluator

This repo was created for the Google Cloud Rapid Agent Hackathon. It allows students to use agentic-AI to review their essays against their provided rubric and get feedback on what they can improve. Built with Astro, React, Tailwind, MongoDB, ExpressJS, and Google Cloud Platform (GCP).

## Data Model

```JSON

//Assignment is a specific essay
Assignment: {
    rubric: Rubric[]
    essays: Essay[]
}

Rubric: {
    requirement: {
        //quick description of the requirement
        blurb: string
        //conditions for a full score is met
        completeCondition: string
        //conditions for a satisfactory score is met
        satisfactoryCondition: string
        //conditions for incomplete requirement
        incompleteCondition: string
        //how much this requirement contributes to the score
        importance: "low" | "med" | "high"
    }[]
}

Essay

```
