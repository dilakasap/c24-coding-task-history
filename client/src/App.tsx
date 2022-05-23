import React from "react";
import { Grid } from "semantic-ui-react";
import logo from "./resources/Logo_CHECK24.png";
import "./App.css";
import HistoryOverview from "./features/history/HistoryOverview";
import OrderDetails from "./features/order/OrderDetails";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <div className="App-headerImage">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <OrderDetails />
            </Grid.Column>
            <Grid.Column>
              <HistoryOverview />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}

export default App;
