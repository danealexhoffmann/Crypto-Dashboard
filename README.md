# Daily-Planner.

## To start
- (In a terminal window) Install dependencies with **npm install**
- Rename **.env.dist** to **.env** and add your Rapid API key.
- (In a terminal window) Run **npm start** to start server.

## Viewing the site locally

Once you have installed all dependencies with **npm install** and started the server with **npm start**, a browser window should automatically pop-up navigating to (http://localhost:3000), where you will be able to see the full application locally. 

## About the app

My goal was to create a crypto-currency dashboard application using React, Axios and a few REST API's that allows you to convert different crypto currencies on the fly as well as show you the latest data about a crypto-currency's peformance and provide you with the latest headlines in crypto-related news. The app allows for the quick and up to date conversion of a few key crypto-currencies as well as USD. Data for each currency is searchable by coin. All information about each currency is completely up to date thanks to the use of the Coin Gecko API as well as APIs in the RAPID API library. 

## What I learnt building this project.

This project helped me undestand how to use Axios to make API calls inside of a React application, how to pull only the data that is necessary for the app by reading API documentation and how to output that data visually in a user-friendly manner. I also learnt the importance of keeping your API keys safe and secure by excluding them in the published repository 

There is currently a bug in the app while it is hosted on Netlify that blocks the API calls for the two Rapid APIs used in the app. I am currenlty working on this bug and hope to have it fixed ASAP! The application works as intended when hosted locally.
