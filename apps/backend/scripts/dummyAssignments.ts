const p_c1 = "507f1f77bcf86cd799439011";
const p_c2 = "507f1f77bcf86cd799439012";
const p_c3 = "507f1f77bcf86cd799439013";
const p_c4 = "507f1f77bcf86cd799439014";

const t_c1 = "507f1f77bcf86cd799439021";
const t_c2 = "507f1f77bcf86cd799439022";
const t_c3 = "507f1f77bcf86cd799439023";
const t_c4 = "507f1f77bcf86cd799439024";

const r_c1 = "507f1f77bcf86cd799439031";
const r_c2 = "507f1f77bcf86cd799439032";
const r_c3 = "507f1f77bcf86cd799439033";
const r_c4 = "507f1f77bcf86cd799439034";

export const dummyAssignments = [
	{
		name: "Persuasive Essay Assignment",
		rubric: {
			desc: "Rubric for evaluating a persuasive essay based on argument quality, evidence, organization, and writing clarity.",
			criteria: [
				{
					_id: p_c1,
					title: "Thesis and argument",
					desc: "Evaluates the clarity, specificity, and development of the thesis and main argument.",
					performanceLevels: {
						incomplete: {
							label: "Beginning",
							desc: "The thesis is missing, unclear, or not supported by a coherent argument.",
						},
						partial: {
							label: "Proficient",
							desc: "The essay presents a clear thesis and supports the argument with mostly logical reasoning.",
						},
						complete: {
							label: "Exemplary",
							desc: "The essay presents a clear, specific thesis and develops a strong, convincing argument throughout.",
						},
					},
				},
				{
					_id: p_c2,
					title: "Use of evidence",
					desc: "Evaluates the strength, relevance, and integration of evidence used to support the argument.",
					performanceLevels: {
						incomplete: {
							label: "Beginning",
							desc: "The essay includes little, unrelated, or no supporting evidence.",
						},
						partial: {
							label: "Proficient",
							desc: "The essay uses relevant evidence, though some examples may need stronger explanation.",
						},
						complete: {
							label: "Exemplary",
							desc: "The essay uses strong, relevant evidence that directly supports the main argument.",
						},
					},
				},
				{
					_id: p_c3,
					title: "Organization",
					desc: "Evaluates the logical structure, transitions, and overall flow of the essay.",
					performanceLevels: {
						incomplete: {
							label: "Beginning",
							desc: "The essay lacks clear organization, making the argument difficult to follow.",
						},
						partial: {
							label: "Proficient",
							desc: "The essay is mostly organized, with minor issues in flow or transitions.",
						},
						complete: {
							label: "Exemplary",
							desc: "The essay is logically organized with clear transitions and a strong overall structure.",
						},
					},
				},
				{
					_id: p_c4,
					title: "Writing clarity",
					desc: "Evaluates grammar, spelling, polishing, and clarity of wording.",
					performanceLevels: {
						incomplete: {
							label: "Beginning",
							desc: "The writing is difficult to understand because of frequent errors or unclear wording.",
						},
						partial: {
							label: "Proficient",
							desc: "The writing is understandable with a few grammar, spelling, or wording issues.",
						},
						complete: {
							label: "Exemplary",
							desc: "The writing is clear, polished, and mostly free of grammar or spelling errors.",
						},
					},
				},
			],
		},
		eassys: [
			{
				file: "https://storage.googleapis.com/dummy-bucket/persuasive_essay_1.pdf",
				scoring: [
					{
						criterion: p_c1,
						performanceLevel: "partial",
						comments: "Thesis is mostly clear, but the argument has minor logical gaps in paragraph 3.",
					},
					{
						criterion: p_c2,
						performanceLevel: "incomplete",
						comments: "Some evidence is present, but deeper explanation is needed for the first source.",
					},
					{
						criterion: p_c3,
						performanceLevel: "partial",
						comments: "Generally flows well, though the transition between body paragraphs 1 and 2 is abrupt.",
					},
					{
						criterion: p_c4,
						performanceLevel: "complete",
						comments: "Excellent writing, virtually no grammatical errors.",
					},
				],
			},
			{
				file: "https://storage.googleapis.com/dummy-bucket/persuasive_essay_2.pdf",
				scoring: [
					{
						criterion: p_c1,
						performanceLevel: "complete",
						comments: "Outstanding thesis statement and compelling argument.",
					},
					{
						criterion: p_c2,
						performanceLevel: "complete",
						comments: "Flawless integration of relevant evidence.",
					},
					{
						criterion: p_c3,
						performanceLevel: "complete",
						comments: "Structure is highly logical and effective.",
					},
					{
						criterion: p_c4,
						performanceLevel: "partial",
						comments: "Generally clear, though a few run-on sentences in the conclusion.",
					},
				],
			},
		],
	},
	{
		name: "Technical Proposal Assignment",
		rubric: {
			desc: "Rubric for evaluating a technical solution proposal based on problem alignment, solution design, methodology, and business impact.",
			criteria: [
				{
					_id: t_c1,
					title: "Problem and solution alignment",
					desc: "Evaluates how well the proposed solution addresses the stated problem.",
					performanceLevels: {
						incomplete: {
							label: "Beginning",
							desc: "The solution does not clearly address the stated problem.",
						},
						partial: {
							label: "Proficient",
							desc: "The proposed solution addresses the main problem, though minor alignment gaps may remain.",
						},
						complete: {
							label: "Exemplary",
							desc: "The proposed solution directly addresses the stated problem with strong alignment and no major gaps.",
						},
					},
				},
				{
					_id: t_c2,
					title: "Technical design",
					desc: "Evaluates the clarity and completeness of the architecture, technologies, and implementation approach.",
					performanceLevels: {
						incomplete: {
							label: "Beginning",
							desc: "The proposal does not provide enough technical detail to understand the solution.",
						},
						partial: {
							label: "Proficient",
							desc: "The proposal explains the main technical design, though some implementation details are missing.",
						},
						complete: {
							label: "Exemplary",
							desc: "The proposal clearly explains the architecture, technologies, data flow, and implementation approach.",
						},
					},
				},
				{
					_id: t_c3,
					title: "Project methodology and timeline",
					desc: "Evaluates the realism, clarity, and alignment of the methodology and timeline.",
					performanceLevels: {
						incomplete: {
							label: "Beginning",
							desc: "The methodology and timeline are unclear or unrealistic.",
						},
						partial: {
							label: "Proficient",
							desc: "The methodology and timeline are mostly clear, with minor missing details.",
						},
						complete: {
							label: "Exemplary",
							desc: "The methodology and timeline are clear, realistic, and well aligned with the project scope.",
						},
					},
				},
				{
					_id: t_c4,
					title: "Business impact",
					desc: "Evaluates how well the proposal explains measurable business value and connects to stakeholder needs.",
					performanceLevels: {
						incomplete: {
							label: "Beginning",
							desc: "The proposal does not clearly explain the expected business impact.",
						},
						partial: {
							label: "Proficient",
							desc: "The proposal explains business value, though some expected outcomes could be more specific.",
						},
						complete: {
							label: "Exemplary",
							desc: "The proposal clearly explains measurable business value and connects it to stakeholder needs.",
						},
					},
				},
			],
		},
		eassys: [
			{
				file: "https://storage.googleapis.com/dummy-bucket/tech_proposal_1.pdf",
				scoring: [
					{
						criterion: t_c1,
						performanceLevel: "partial",
						comments: "Mostly aligns with the problem but misses addressing the scale requirement.",
					},
					{
						criterion: t_c2,
						performanceLevel: "partial",
						comments: "Architecture is generally sound, missing specifics on database schema.",
					},
					{
						criterion: t_c3,
						performanceLevel: "incomplete",
						comments: "Timeline seems overly optimistic given the proposed features.",
					},
					{
						criterion: t_c4,
						performanceLevel: "complete",
						comments: "Clear ROI metrics defined and connected to goals.",
					},
				],
			},
		],
	},
	{
		name: "Research Summary Assignment",
		rubric: {
			desc: "Rubric for evaluating a research summary based on accuracy, source use, synthesis, and clarity.",
			criteria: [
				{
					_id: r_c1,
					title: "Accuracy",
					desc: "Evaluates how accurately the summary represents the source material.",
					performanceLevels: {
						incomplete: {
							label: "Beginning",
							desc: "The summary misrepresents the source material or omits the main ideas.",
						},
						partial: {
							label: "Proficient",
							desc: "The summary is mostly accurate with only minor omissions or unclear points.",
						},
						complete: {
							label: "Exemplary",
							desc: "The summary accurately represents the source material with no major misunderstandings.",
						},
					},
				},
				{
					_id: r_c2,
					title: "Use of sources",
					desc: "Evaluates the credibility of sources and how effectively they are integrated.",
					performanceLevels: {
						incomplete: {
							label: "Beginning",
							desc: "The summary uses few, inappropriate, or no credible sources.",
						},
						partial: {
							label: "Proficient",
							desc: "The summary uses relevant sources, though source integration could be stronger.",
						},
						complete: {
							label: "Exemplary",
							desc: "The summary uses credible sources effectively and clearly connects evidence to the main ideas.",
						},
					},
				},
				{
					_id: r_c3,
					title: "Synthesis",
					desc: "Evaluates the ability to combine and connect ideas from the source material.",
					performanceLevels: {
						incomplete: {
							label: "Beginning",
							desc: "The summary lacks meaningful synthesis or connection between ideas.",
						},
						partial: {
							label: "Proficient",
							desc: "The summary connects ideas reasonably well, though some relationships could be clearer.",
						},
						complete: {
							label: "Exemplary",
							desc: "The summary combines ideas from the material into a clear and meaningful explanation.",
						},
					},
				},
				{
					_id: r_c4,
					title: "Clarity",
					desc: "Evaluates the conciseness, organization, and general clarity of writing.",
					performanceLevels: {
						incomplete: {
							label: "Beginning",
							desc: "The writing is difficult to follow.",
						},
						partial: {
							label: "Proficient",
							desc: "The writing is mostly clear, with minor issues in wording or organization.",
						},
						complete: {
							label: "Exemplary",
							desc: "The writing is concise, organized, and easy to understand.",
						},
					},
				},
			],
		},
		eassys: [
			{
				file: "https://storage.googleapis.com/dummy-bucket/research_summary_1.pdf",
				scoring: [
					{
						criterion: r_c1,
						performanceLevel: "complete",
						comments: "Perfectly captured the core themes of the paper.",
					},
					{
						criterion: r_c2,
						performanceLevel: "partial",
						comments: "Great use of sources, but transition between citations could be smoother.",
					},
					{
						criterion: r_c3,
						performanceLevel: "partial",
						comments: "Connected ideas well, though conclusion could synthesize better.",
					},
					{
						criterion: r_c4,
						performanceLevel: "complete",
						comments: "Very clear and easy to read.",
					},
				],
			},
		],
	},
];
