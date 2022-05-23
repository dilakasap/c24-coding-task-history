
# CHECK24 Backoffice History Coding Challenge

Welcome to our CHECK24 Backoffice History Coding Challenge! 

This repo consists of an React client (see folder client) and an ExpressJS REST-Service (see folder service). It represents a backoffice application for a shopping system managing `orders`.

We have a micro service for `Orders` (see [API](/server/orders/api.ts)) and a micro service for documents (see [API](/server/documents/api.ts)).

This backoffice application should make orders and their historic changes visible. The react component [`OrderDetails`](/client/src/features/order/OrderDetails.tsx) shows all the details of an order and the react component [`OrderHistory`](/types/order/OrderHistory.ts) shows the order history of the current order.

# Getting started

Starting server on localhost port 3333
```
# starting server:
cd server
npm ci
npm run start
```

Starting client on localhost port 3000
```
# starting react client application
cd client
npm ci
npm run start
```

# Tasks
## UI / UX

1. get familiar with the existing folder structure, api endpoints and react components
2. The react component [`OrderDetails`](/client/src/features/order/OrderDetails.tsx) shows right now a dummy order. Please use the existing [`OrderService`](/client/src/services/orderService.ts) to fetch the real `Order` data from the service. _Feel free to change/improve any code you see_
3. make sure to show the updated `Order` in react component [`OrderDetails`](/client/src/features/order/OrderDetails.tsx) after having it changed in the change handler

## History Data Model

1. Get familiar with the data model / type of an [`Order`](/types/order/Order.ts)
2. Brainstorm how we could store historic data and how a potential data model could look like that represents historic data changes. A customer agent wants to know the following information
   * Who did a change
   * When did the change happen
   * Which data got changed: from and to
   * Extension: In which context was the change performed
3. Please type the [`OrderHistory`](/types/order/OrderHistory.ts) and provide some example data in [order dao](/server/orders/dao.ts)
4. Visulize the historic data changes by improving the react component [`HistoryOverview`](/client/src/features/history/HistoryOverview.tsx)

## Bonus Task #1
In our history view we want to show all kinds of changes happening in the system. For example next to data changes we want to display changes to documents attached to this order (e.g. Document uploaded). Our document service is a fixed micro service and already provides some history data for us. See [`DocumentService`](/client/src/services/documentService.ts) and [`DocumentAPI`](/server/documents/api.ts). Please make improvements to this application to fulfill the requirements.

## Bonus Task #2
One user interaction might cause mutliple data changes. Our customer agents told us that they would like to see the data changes grouped together that belong to one action. Think of how this can be implemented and what would be needed in addition to the existing order change endpoint.


# Thank You
* [Create React App](https://github.com/facebook/create-react-app)
* using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template



