# StardewDex :melon::star::card_index:

## Available at
# [stardewdex.com](https://stardewdex.com)

StardewDex gives you Stardew Valley info easily. :chart_with_upwards_trend:
Add it your Home Screen and make your game easier. :heart:

## Alex Jacks Apps 2019, MIT License

### _Features_

- WORKS OFFLINE b/c loads to your device like an app
- quick and easy UI
- up to date with latest Stardew Valley version
- separate load like an app on phones, easy to find

### Build Notes For Me:
#### _Endpoints_
- S3
-- http:/stardewdex.s3-website-us-west-2.amazonaws.com
- A 
-- 
- NS
-- 




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

