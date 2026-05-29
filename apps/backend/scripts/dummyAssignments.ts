export const dummyAssignments = [
	{
		name: "Persuasive Essay Assignment",
		rubric: {
			desc: "Rubric for evaluating a persuasive essay based on argument quality, evidence, organization, and writing clarity.",
			criteria: [
				{
					desc: "Thesis and argument",
					performanceLevels: [
						{
							label: "Exemplary",
							desc: "The essay presents a clear, specific thesis and develops a strong, convincing argument throughout.",
						},
						{
							label: "Proficient",
							desc: "The essay presents a clear thesis and supports the argument with mostly logical reasoning.",
						},
						{
							label: "Developing",
							desc: "The thesis is present but may be vague, and the argument is only partially developed.",
						},
						{
							label: "Beginning",
							desc: "The thesis is missing, unclear, or not supported by a coherent argument.",
						},
					],
				},
				{
					desc: "Use of evidence",
					performanceLevels: [
						{
							label: "Exemplary",
							desc: "The essay uses strong, relevant evidence that directly supports the main argument.",
						},
						{
							label: "Proficient",
							desc: "The essay uses relevant evidence, though some examples may need stronger explanation.",
						},
						{
							label: "Developing",
							desc: "The essay includes limited evidence or evidence that only partially supports the argument.",
						},
						{
							label: "Beginning",
							desc: "The essay includes little, unrelated, or no supporting evidence.",
						},
					],
				},
				{
					desc: "Organization",
					performanceLevels: [
						{
							label: "Exemplary",
							desc: "The essay is logically organized with clear transitions and a strong overall structure.",
						},
						{
							label: "Proficient",
							desc: "The essay is mostly organized, with minor issues in flow or transitions.",
						},
						{
							label: "Developing",
							desc: "The essay has some structure, but ideas may be unevenly arranged or difficult to follow.",
						},
						{
							label: "Beginning",
							desc: "The essay lacks clear organization, making the argument difficult to follow.",
						},
					],
				},
				{
					desc: "Writing clarity",
					performanceLevels: [
						{
							label: "Exemplary",
							desc: "The writing is clear, polished, and mostly free of grammar or spelling errors.",
						},
						{
							label: "Proficient",
							desc: "The writing is understandable with a few grammar, spelling, or wording issues.",
						},
						{
							label: "Developing",
							desc: "The writing is sometimes unclear due to repeated grammar, spelling, or wording issues.",
						},
						{
							label: "Beginning",
							desc: "The writing is difficult to understand because of frequent errors or unclear wording.",
						},
					],
				},
			],
		},
	},
	{
		name: "Technical Proposal Assignment",
		rubric: {
			desc: "Rubric for evaluating a technical solution proposal based on problem alignment, solution design, methodology, and business impact.",
			criteria: [
				{
					desc: "Problem and solution alignment",
					performanceLevels: [
						{
							label: "Exemplary",
							desc: "The proposed solution directly addresses the stated problem with strong alignment and no major gaps.",
						},
						{
							label: "Proficient",
							desc: "The proposed solution addresses the main problem, though minor alignment gaps may remain.",
						},
						{
							label: "Developing",
							desc: "The solution partially addresses the problem but leaves important gaps unexplained.",
						},
						{
							label: "Beginning",
							desc: "The solution does not clearly address the stated problem.",
						},
					],
				},
				{
					desc: "Technical design",
					performanceLevels: [
						{
							label: "Exemplary",
							desc: "The proposal clearly explains the architecture, technologies, data flow, and implementation approach.",
						},
						{
							label: "Proficient",
							desc: "The proposal explains the main technical design, though some implementation details are missing.",
						},
						{
							label: "Developing",
							desc: "The proposal gives a limited technical explanation and leaves several design choices unclear.",
						},
						{
							label: "Beginning",
							desc: "The proposal does not provide enough technical detail to understand the solution.",
						},
					],
				},
				{
					desc: "Project methodology and timeline",
					performanceLevels: [
						{
							label: "Exemplary",
							desc: "The methodology and timeline are clear, realistic, and well aligned with the project scope.",
						},
						{
							label: "Proficient",
							desc: "The methodology and timeline are mostly clear, with minor missing details.",
						},
						{
							label: "Developing",
							desc: "The methodology or timeline is vague, incomplete, or only partially aligned with the project scope.",
						},
						{
							label: "Beginning",
							desc: "The methodology and timeline are unclear or unrealistic.",
						},
					],
				},
				{
					desc: "Business impact",
					performanceLevels: [
						{
							label: "Exemplary",
							desc: "The proposal clearly explains measurable business value and connects it to stakeholder needs.",
						},
						{
							label: "Proficient",
							desc: "The proposal explains business value, though some expected outcomes could be more specific.",
						},
						{
							label: "Developing",
							desc: "The proposal mentions business value but does not clearly explain how it will be measured.",
						},
						{
							label: "Beginning",
							desc: "The proposal does not clearly explain the expected business impact.",
						},
					],
				},
			],
		},
	},
	{
		name: "Research Summary Assignment",
		rubric: {
			desc: "Rubric for evaluating a research summary based on accuracy, source use, synthesis, and clarity.",
			criteria: [
				{
					desc: "Accuracy",
					performanceLevels: [
						{
							label: "Exemplary",
							desc: "The summary accurately represents the source material with no major misunderstandings.",
						},
						{
							label: "Proficient",
							desc: "The summary is mostly accurate with only minor omissions or unclear points.",
						},
						{
							label: "Developing",
							desc: "The summary includes some accurate information but also contains noticeable misunderstandings.",
						},
						{
							label: "Beginning",
							desc: "The summary misrepresents the source material or omits the main ideas.",
						},
					],
				},
				{
					desc: "Use of sources",
					performanceLevels: [
						{
							label: "Exemplary",
							desc: "The summary uses credible sources effectively and clearly connects evidence to the main ideas.",
						},
						{
							label: "Proficient",
							desc: "The summary uses relevant sources, though source integration could be stronger.",
						},
						{
							label: "Developing",
							desc: "The summary uses limited or weakly connected sources.",
						},
						{
							label: "Beginning",
							desc: "The summary uses few, inappropriate, or no credible sources.",
						},
					],
				},
				{
					desc: "Synthesis",
					performanceLevels: [
						{
							label: "Exemplary",
							desc: "The summary combines ideas from the material into a clear and meaningful explanation.",
						},
						{
							label: "Proficient",
							desc: "The summary connects ideas reasonably well, though some relationships could be clearer.",
						},
						{
							label: "Developing",
							desc: "The summary mostly lists information instead of connecting ideas.",
						},
						{
							label: "Beginning",
							desc: "The summary lacks meaningful synthesis or connection between ideas.",
						},
					],
				},
				{
					desc: "Clarity",
					performanceLevels: [
						{
							label: "Exemplary",
							desc: "The writing is concise, organized, and easy to understand.",
						},
						{
							label: "Proficient",
							desc: "The writing is mostly clear, with minor issues in wording or organization.",
						},
						{
							label: "Developing",
							desc: "The writing is sometimes unclear or disorganized.",
						},
						{
							label: "Beginning",
							desc: "The writing is difficult to follow.",
						},
					],
				},
			],
		},
	},
];
