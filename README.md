# ap-style-suite
A suite of functions to handle basic AP styling for numbers, dates and state names. It contains the following functions:

* `apDate`: Converts a date object to an formatted date, i.e. `12-25-2010` becomes `Dec. 25, 2010`.

* `apNumber`: Converts an integer into a readable, formatted number, i.e. `2,000,000` become `2 million`.

* `apState`: Formats state name to correct format, i.e. `FL` becomes `Fla.` or, if you're strictly following the new format: `Florida`.

A suite of functions to handle basic AP styling for numbers, dates and state names.


### Installation
##### NPM
`npm i ap-style-suite` 

##### Yarn
`yarn add ap-style-suite`;

You can also clone the repo and use it locally.

<hr>

### AP dates
This function formats dates, meaning long months, such as September, October, November, are abbreviated to Sept., Oct. and Nov.

Shorter months like March, April, May, June and July are excluded.

##### Usage
The module now contains two functions to handle longform (Dec. 26, 2016) and
shorthand (Dec. 26):

ES6: 
    
    import { apDate } from 'ap-style-suite';
    
ES5:

	const apDate = require('ap-style-suite').apDate;

Examples:

	apDate.short('2016-12-25');  // Dec. 25
	apDate.long('2016-12-25'); // Dec. 25, 2016	

This module can take a variety of date formats and covert them to AP Style:

	apDate.short('12/25/2016'); // Dec. 25, 2016
	apDate.short('12-25-2016'); // Dec. 25, 2016
	apDate.short('December 25, 2016'); // Dec. 25, 2016


As well as long form:

	apDate.long('12/25/2016'); // Dec. 25, 2016
	apDate.long('12-25-2016'); // Dec. 25, 2016
	apDate.long('December 25, 2016'); // Dec. 25, 2016


##### Date formatting requirements
Dates fed as arguments must be full dates with a day, month and year. Otherwise, it will throw an error. The function will also fail if `null`, an empty string, words or integers are passed.

Dates formatted in `mm/dd/yy` must be converted to use a full year.

<hr>

### AP numbers
This function formats numbers to displayed on a page. In AP style, numbers less than 10 and more than 999,999 are wrtten out. 

For example, `1` becomes `one` or `1,000,000` becomes `1 million`.

This function contains three methods: `format`, `smallNumber` and `largeNumber`.

`format` takes any number and does the conversion if it's a big or small number. This is for anyone who needs a one-size-fits-all function.

For those who need a little more control on which numbers they need to format, there's also the `formatLargeNumber` and `formatSmallNumber` functions.

##### Usage

ES6:

	import { apNumber } from 'ap-style-suite';
	
ES5:

	const apNumber = require('ap-style-suite').apNumber;

Examples
	
	apNumber.formatNumber('1,000,000');  // 1 million
	apNumber.formatNumber(9); // nine
	
	apNumber.formatSmallNumber('2'); // two
	apNumber.formatSmallNumber(2); // two
	
	apNumber.formatLargeNumber('1,000,000'); // 1 million
	apNumber.formatLargeNumber(1000000); // 1 million
	
The `formatLargeNumber` function can format numbers up to a trillion

	apNumber.formatLargeNumber('1,000,000,000,000'); // 1 trillion
	apNumber.formatLargeNumber(1000000000000); // 1 trillion
	

### To contribute
1. Clone repo and `npm install`.
2. Make changes in a seperate, feature-specific branch.
3. Make PR with description with your contribution.
4. New functions, for the time being, must be contained in their own `.js` file.

### To test
To add a test, create a new file in `test/xxx.test.js`. Then run 'npm run test'. 

### To Do
Add state names function



