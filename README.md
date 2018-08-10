# Zone Robot

## Setup

- `npm install`
- `npm run build` to compile the code using webpack and TS
- `npm start` to start the server on port 8000
- `npm test` to run the tests

## Structure

- Source code under `src` directory
- Tests under `test` directory
- Front end assets under `public` directory
- Build output under `build` directory

## Notes

- Used TypeScript as I believe the static type validation enables one to maintain quality as the codebase scales. It also makes refactoring much easier over time.
- Did not use a UI framework because using tools like React and Redux would have been over engineering given the current ask, especially the boilerplate required for them.