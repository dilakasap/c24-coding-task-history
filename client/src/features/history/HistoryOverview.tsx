import React, { useEffect, useState } from "react";
import { Feed, Header } from "semantic-ui-react";
import { fetchOrderHistory } from "../../services/orderService";

// Semantic UI
//  * Icons: https://react.semantic-ui.com/elements/icon/

const HistoryOverview = (props: any) => {
  const [history, setHistory] = useState();
  useEffect(() => {
    fetchOrderHistory("").then((res) => {
      console.log("res", res);
    });
  }, []);
  return (
    <>
      <Header>History</Header>
      <Feed>
        <Feed.Event>
          <Feed.Label icon="pencil" />
          <Feed.Content>
            <Feed.Date>3 days ago</Feed.Date>
            <Feed.Summary>sth happened</Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label icon="upload" />
          <Feed.Content>
            <Feed.Date>4 days ago</Feed.Date>
            <Feed.Summary>sth else happened</Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </>
  );
};

export default HistoryOverview;
