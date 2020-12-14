# Personal expenses management

### Application overview

Personal expenses management web client application (static files) that allows users to track how much money have they 
spent. Application must be written on React with Redux.

### Running

```
npm install
npm start
```
or
```
yarn install
yarn start
```

### Requirements
As a result of test problem solution you should provide a web application where user can enter a command and see the 
results of its execution.

List of supported commands:
- `add 2017-04-25 12 USD Jogurt` ​​— ​adds expense entry to the list of user expenses. Expenses for various dates could be 
added in any order. Command accepts following parameters:
    - `2017-04-25` ​— i​s the date when expense occurred, 
    - `12` ​— i​s an amount of money spent,
    - `USD` ​— the currency in which expense occurred,
    - `Jogurt` ​— i​s the name of product purchased.
    
- `list` ​—​ ​shows the list of all expenses sorted by date

- `clear 2017-04-25` ​​— r​emoves all expenses for specified date, where:
    - `2017-04-25` ​— i​s the date for which all expenses should be removed
    
- `total PLN` ​—​ t​his command should take a list of exchange rates from ​http://fixer.io,​ calculate the total amount of 
money spent and present it to user in specified currency, where:
    - `PLN` —​ i​s the currency in which total amount of expenses should be presented 

In order to get extra points for test problem solution you might cover your source code with unit tests.

### Application usage example
Here is an example of normal application usage flow, for each command a corresponding output is shown:
```
> add 2017-04-25 2 USD Jogurt
2017-04-25 Jogurt 2 USD

> add 2017-04-25 3 EUR "French fries"
2017-04-25 Jogurt 2 USD 
           French Fries 3 EUR

> add 2017-04-27 4.75 EUR Beer
2017-04-25 Jogurt 2 USD 
           French Fries 3 EUR
2017-04-27 Beer 4.75 EUR

> add 2017-04-26 2.5 PLN Sweets
2017-04-25 Jogurt 2 USD 
           French Fries 3 EUR
2017-04-26 Sweets 2.5 PLN
2017-04-27 Beer 4.75 EUR

> list
2017-04-25 Jogurt 2 USD 
           French Fries 3 EUR
2017-04-26 Sweets 2.5 PLN
2017-04-27 Beer 4.75 EUR

> clear 2017-04-27
2017-04-25 Jogurt 2 USD 
           French Fries 3 EUR
2017-04-26 Sweets 2.5 PLN

> total EUR
5.42 EUR
```
