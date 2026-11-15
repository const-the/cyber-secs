# how to run frontend
1. go to the frontend directory
2. run `npm i`
3. ignore `7 vulnerabilities (2 moderate, 5 high)`
4. run `npm run dev`
5. enjoy

also, to generate api handling code you run `npm run generate:api`

to host the frontend to make it available on other devices, run `npm run dev -- --host`
(the extra `--` is so that `--host` flag is passed to the `dev` script and not to `npm run`)
