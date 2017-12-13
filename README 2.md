# ap-style-date

`ap-style-date` is a JavaScript function to format date objects to AP Style. This mean long months, such as September, October, November, are abbreviated to Sept., Oct. and Nov.

Shorter months like March, April, May, June and July are excluded.

### Usage
Install the module:

`npm i ap-style-date --save-dev`

The module now contains two functions to handle longform (Dec. 26, 2016) and
shorthand (Dec. 26):

    const shortAP = require("ap-style-date").shortAP;
    const longAP = require("ap-style-date").longAP ;

    shortAP('2016-12-25');  // Dec. 25
    longAP('2016-12-25'); // Dec. 25, 2016


This module can take a variety of date formats and covert them to AP Style:

	shortAP('12/25/2016'); // Dec. 25, 2016
	shortAP('12-25-2016'); // Dec. 25, 2016
	shortAP('December 25, 2016'); // Dec. 25, 2016


As well as long form:

	longAP('12/25/2016'); // Dec. 25, 2016
	longAP('12-25-2016'); // Dec. 25, 2016
	longAP('December 25, 2016'); // Dec. 25, 2016



### Date formatting requirements
Dates fed as arguments must be full dates with a day, month and year. Otherwise, it will throw an error. The function will also fail if `null`, an empty string, words or integers are passed.

Dates formatted in `mm/dd/yy` must be converted to use a full year.


### To contribute
1. Clone repo and `npm install`.
2. Make changes in a seperate, feature-specific branch.
3. Make PR with description with your contribution.

### To test
Run 'npm run test'.

### To Do
Find a way to implement date freezing.



