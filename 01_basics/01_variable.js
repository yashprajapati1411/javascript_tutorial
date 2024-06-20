const AccountId=123321
let AccountEmail="yp121@google.com"
var AccountPass="qwe321"
let AccountState;


console.log(AccountId)
/* 
prefer not to use var because of the problem in block scope and functional scope
*/

console.table([ AccountEmail, AccountId , AccountPass,AccountState])
