# Credit-Card-Validation
Simple Credit card validation page, with form validation and Credit Card validation with Luhn Algorithm. Done using AngularJS

Credit Card validation based on:
  1.Luhn Algorithm applied after the number length is greater than 13, till that it try to guess the Credit Card
  2.American Express	    Start with:34,37	 length:15
  3.MasterCard	          Start with:51, 52, 53, 54, 55	   length:16-19
  4.Visa	                Start with:4	   length:13-16
  
  
Name must only contain Alphabets otherwise it is INVALID. 
Input of Date if taken in such a way that it is always greater than today's date.

Input of CVV is based on the fact that if the Credit Card is American Express then the CVV is expected of length 4, otherwise length of 3 is expected. If length of CVV is not accordingly, than it will be INVALID.

SUBMIT button is disabled untill all the input of form became valid.
On submit the control is Shifted to submit.html
