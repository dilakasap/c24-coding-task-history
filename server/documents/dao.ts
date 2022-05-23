import {
  DocumentHistory,
  DocumentHistoryAction,
} from "../../types/document/DocumentHistory";

const documentHistory: DocumentHistory[] = [
  {
    action: DocumentHistoryAction.uploaded,
    date: "2022-01-01T12:00:00.000+0100",
    username: "import-email-job",
    filename: "some-email.eml",
  },
  {
    action: DocumentHistoryAction.uploaded,
    date: "2022-01-02T12:00:00.000+0100",
    username: "import-email-job",
    filename: "some-email.eml",
  },
  {
    action: DocumentHistoryAction.uploaded,
    date: "2022-01-03T12:00:00.000+0100",
    username: "import-email-job",
    filename: "some-email.eml",
  },
];

export const readDocumentHistory = (orderId: string) => {
  // for simplicity the order id gets ignore here
  return documentHistory;
};
