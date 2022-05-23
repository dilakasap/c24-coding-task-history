export enum DocumentHistoryAction {
  uploaded = "uploaded",
  deleted = "deleted",
}
export interface DocumentHistory {
  action: DocumentHistoryAction;
  date: Date | string;
  username: string;
  filename: string;
}
