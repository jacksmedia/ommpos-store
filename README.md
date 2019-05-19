# Top 100 Crypto :100::money_with_wings:

## Available at
# [top100crypto.info](https://top100crypto.info)

Top 100 Crypto currencies. Via the [nomics API](https://forums.nomics.com/).

## Alexander Jacks 2019, MIT License




## { Default CRA Readme }

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build && aws s3 sync build/ s3://top-100-crypto-info`

Builds app locally, copies production files to AWS (updates app).

Allows your machine to build the prod version of the app-- you can find these files in the ./build/ directory alongside this readme.

Allows my MacBook Air to also copy these files to my AWS account, which is hosting/serving the app via S3/CloudFront in Serverless fashion. This step will fail on your machine. :smile_cat:

