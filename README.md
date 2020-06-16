## search-professionals

This application is to search professionals in UK region. 
It has the following features as listed below:
1. User can search professionals by selecting category and postcode.
2. Category are getting populaed dynamically by plentific api.
3. Post code should be a valid post code.
4. On search data gets displayed in below section with following fields:
    * ID
    * Name
    * Postcode
    * Review Rating
5. At a time it fetched the data as per page limit 20 and page offset.
6. Pagination will get displayed dynamically as per the total result retreived from response headers.

## Extra features implemented
1. Implemented search form validation as required for both category and post code.
2. for post it also validates the format with the regex listed on reference link.
3. Removed random string form name retreived from api by using regex.
4. To fetch data from api for search professionals have taken 2 approaches into consideration:
    1. Fetch complete data in one go and implement pagionation as per data retreived.
    2. Fetch only 1 page data as only 20 records at a time initially for 1st page and then respective to page no and offset value.

    From the two approaches listed above have taken 2nd approach into consideration due to the problem I see with 1st approach, which is:
    * With 1st approach, data will loaded in one go and stored in redx store this will consume more time given that if there are thousands of records api will take more time and page prformance will not be good, also will take more capacity to store the data at client side.
    * With 2nd approach, ony 20 records will be retreived in one go and then on every page change respective page data will be fetched,
    This will be better approach in terms of performace optimization, also consumes less space at client side.
5. Header title change respective to story
6. Implemented Footer.

## Steps to run application in local

## Steps to setup application in local
* Go to Root directory of application and execute following commands:
    ```sh
    $ cd search-professionals
    $ search-professionals> npm install
    $ search-professionals> npm start
    ```
* Application will launched into browser as http://localhost:3000


### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.