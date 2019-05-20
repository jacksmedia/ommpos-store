# Top 100 Crypto :100::money_with_wings:

## Available at
# [top100crypto.info](https://top100crypto.info)

Top 100 Crypto currencies. Via the [nomics API](https://forums.nomics.com/).

## Alexander Jacks 2019, MIT License

### Build Notes For Me:
#### _Endpoints_
- S3
-- http://top-100-crypto-info.s3-website-us-west-2.amazonaws.com
- A 
-- 104.198.14.52
- NS
-- dns2.p04.nsone.net 
-- dns1.p04.nsone.net 
-- dns3.p04.nsone.net 
-- dns4.p04.nsone.net
- CNAME
-- top100crypto.netlify.com

#### _Features_
- needs PWA offline lib! :checkbox:
- " add to Homescreen Popup WORKS on HTTPS?
- needs API return of top 100 from nomics :cancel:
- " copy filter logic from CoC to this, using DropDown even! KISS :cancel:
- design of 100 into tiles on bg. :cancel:
-- 3 across on mobile (33rows + 1 atop)
-- 4 (25r)
-- 5 (20r)
-- 6 (16r, 4 (2 atop, 2 below))
-- 7 (14r, 2 (1 atop, 1 below!))
-- clever responsive layout
-- ETC
-- use logic to ctrl assignment of remainder, bias to top-- don't build method for each case!



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

