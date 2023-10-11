# Steps to reproduce the issue:
1) `npm i`
2) `npm run build && npm run start`
3) open localhost:3000
4) Click 'Set data' button


Check _localstorage_ for `OFFLINE_KEY` key. It's gonna be different that actual status for react query. To check actual status - open console and do `window.toggleDevtools()`. You can see that react query have 2 keys but in persistance storage we have only 1. 

The issue reproducable only on `production` build. 
If you cleanup localstorage and run `npm run dev` - working as exptected.