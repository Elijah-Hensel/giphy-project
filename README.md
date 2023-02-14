# GIPHY SEARCH

## Overview
This is a small email generation application. There is a front end that accepts user input for sign up and a node script, that when run, will send emails with a random message from a list of predetermined message objects.

## Software Versions Used
| Tech          |  Version   | Notes                                   |
| :------------ | ---------: | :-------------------------------------- |
| Node.js       |   16.19.0  |
| React         |   ^18.2.0  | Ensure "@testing-library" & "@storybook" installations are compatible

## Application Setup for Local Development

First install all dependencies:
`npm install`

To test that the application is installed locally and correctly, run:
`npm start`

Once this command is run, you can open the application at `localhost:3000`

### Set ENV variables
Create a .env file by running the following in your applications directory:
```bash
touch .env
```
Enter the following environment variables into your new .env file:

```
REACT_APP_GIPHY_API_KEY=<API KEY>
```

Note: visit [GIPHY](https://developers.giphy.com/) and create a free account to generate a development API key

### Running Storybook Component Testing
This application is set up to use [Storybook](https://storybook.js.org/) for component testing:

❗️ **For the following steps, open a second terminal**

```bash
npx storybook init
npm run storybook
```

Note: `npm run storybook` will open Storybook's UI dashboard at `localhost:6606`

❗️ **For the following steps, open a third terminal**

### Running Jest Test
This application unitilizes [jest](https://jestjs.io/) for additional component testing as well as some unit tests.

```bash
npm test
```
