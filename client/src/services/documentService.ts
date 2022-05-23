import axios from "axios";
import { DocumentHistory } from "../../../types/document/DocumentHistory";
import { wait } from "../utility/wait";

export const fetchDocumentHistory = async (
  orderId: string
): Promise<DocumentHistory[]> => {
  await wait(3);
  const response = await axios.get(`http://localhost:3333/documents/history`, {
    params: {
      orderId,
    },
  });
  console.log("fetched document history", response.data);

  return response.data;
};
