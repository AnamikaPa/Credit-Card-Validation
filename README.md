# Credit-Card-Validation
<ul>
<li>Credit card validation consist of two types of validation.
    <ul>
        <li><b>Form Validation</b> which validate all the fields of credit card form details.
        <li><b>Credit Card number validation</b> using Luhn Algorithm. 
    </ul>
<li>Done using AngularJS
</ul>

<h2>Credit Card validation based on:</h2>
<ul>
    <li>Luhn Algorithm applied when length of credit card number becomes greater than 13, till than it will try to guess the card type as follows,
        <ul>
            <li>American Express (Start with:34,37 and length:15)
            <li>MasterCard (Start with:51, 52, 53, 54, 55 and length:16-19)
            <li>Visa (Start with:4 and length:13-16)
        </ul>
    <li>Card holder name must only contain Alphabets, otherwise it is INVALID. 
    <li>Card Expiry date must always be greater than today's date.
    <li> CVV
        <ul>
            <li>For American Express, length of CVV must be 4. 
            <li>For Others, CVV length is expected to be 3.
            <li>It must only contain numbers.
        </ul>
    <li>SUBMIT button is disabled until all of the input fields of the form become valid.
</ul>
