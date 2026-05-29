import { useContext } from "react";
import AssignmentTableRow from "./assignmentTableRow/assignmentTableRow";
import styles from "./assignmentList.module.css";
import ModalContext from "@components/app/features/modal/modal.context";
import NewAssignmentModal from "./newAssignmentModal/newAssignmentModal";
import type { AssignmentListViewport } from "../views.types";
import type { AssignmentItem } from "@brwwang/shared/src/types";
import ViewportContext from "@components/app/viewport/viewportContext";

const testAssignments: AssignmentItem[] = [
  {
    id: "1",
    name: "Essay 1",
    dateCreated: new Date(),
    status: [5, 3, 2],
    rubric: {
      rubricItems: [
        {
          name: "Thesis Statement",
          description: "A clear and arguable thesis statement",
          completeCondition: "Thesis is clear, specific, and arguable",
          partialCondition: "Thesis is present but vague or too broad",
          incompleteCondition: "No thesis statement present",
        },
        {
          name: "Evidence",
          description: "Use of supporting evidence",
          completeCondition: "Multiple relevant sources cited correctly",
          partialCondition: "Some evidence provided but lacking depth",
          incompleteCondition: "No evidence or sources provided",
        },
      ],
    },
    essays: [
      {
        id: "s1",
        dateCreated: new Date(),
        status: [1, 1, 0],
        essaySummary:
          "Thesis is present but lacks specificity. Evidence is cited but not analyzed in depth.",
        actionItems: [
          "Narrow thesis to a specific claim",
          "Add analysis after each cited source",
        ],
      },
      {
        id: "s2",
        dateCreated: new Date(),
        status: [0, 1, 1],
        essaySummary:
          "Thesis is improved. Evidence analysis still needs more depth in body paragraphs 2 and 3.",
        actionItems: ["Expand analysis in paragraphs 2 and 3"],
      },
    ],
  },
  {
    id: "2",
    name: "Essay 2",
    dateCreated: new Date(),
    status: [0, 0, 10],
    rubric: {
      rubricItems: [
        {
          name: "Grammar",
          description: "Proper grammar and punctuation",
          completeCondition: "No grammatical errors",
          partialCondition: "Minor grammatical errors",
          incompleteCondition: "Frequent grammatical errors",
        },
      ],
    },
    essays: [
      {
        id: "s3",
        dateCreated: new Date(),
        status: [0, 0, 1],
        essaySummary: "All grammar criteria met. No issues found.",
        actionItems: [],
      },
    ],
  },
];

const AssignmentList: React.FC<AssignmentListViewport> = () => {
  const modalContext = useContext(ModalContext);
  const onNewAssignmentClick = () => {
    modalContext.openModal(<NewAssignmentModal />);
  };

  const viewportContext = useContext(ViewportContext);
  const handleAssignmentItemClick = (assignmentItem: AssignmentItem) => () => {
    viewportContext.setViewport({
      type: "assignmentViewport",
      props: { assignmentItem },
    });
  };

  return (
    <div className={styles.viewport}>
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Assignments</h1>
        <button
          className="cursor-pointer rounded-md bg-neutral-800 px-4 py-2 text-neutral-50"
          onClick={onNewAssignmentClick}
        >
          New Assignment
        </button>
      </div>
      <table className={styles.viewport__table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date Created</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {testAssignments.map((assignmentItem) => (
            <AssignmentTableRow
              key={assignmentItem.id}
              assignmentItem={assignmentItem}
              onClick={handleAssignmentItemClick(assignmentItem)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignmentList;
