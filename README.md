# StardewDex 🍈🌟📇

## Available at
# [stardewdex.com](https://stardewdex.com)

StardewDex gives you Stardew Valley info easily. 📈
Add it to your Home Screen, make your game more fun. 💝

## Alex Jacks Apps 2019, MIT License

## 💥 _Features_

- WORKS OFFLINE b/c loads to your device like an app
- quick and fast UI
- up to date with latest Stardew Valley version
- easy to find = separate load like an app on phones

## 📋 _Milestones_

### Engineering + Code
- router w subs for category sub pages ✅
- Select w links to sub pages ✅
- most crops added ✅
- all crops added ⛔️
- all forage items added ⛔️
- all people added ⛔️
- all cooking recipes added ⛔️
- all furniture + decor + ? recipes added ⛔️
- all festivals + bundles added ⛔️
- service-worker = works even if offline ⛔️

### Design + Biz
- slightly nicer custom logo + favicons ⛔️
- create fb profile, twitter acct ⛔️
- footer for fb profile, twitter acct, my profile ⛔️
- Lighthouse PWA scoring ⛔️
- Google listing ⛔️


## { Default CRA Readme }

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

##### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `yarn build && aws s3 sync build/ s3://stardewdex`

Builds app locally, copies production files to AWS (updates app).

Allows your machine to build the prod version of the app-- you can find these files in the ./build/ directory alongside this readme.

Allows my MacBook Air to also copy these files to my AWS account, which is hosting/serving the app via S3 & CloudFront. This step will fail on your machine. :smile_cat:

