const jwt = require('jsonwebtoken');
const {v4: uuidv4} = require('uuid');
 
function getLoginUrl(customerId, storeHash, storeUrl, clientId, clientSecret) {
   const dateCreated = Math. round((new Date()). getTime() / 1000);
   const  payload = {
       "iss": clientId,
       "iat": dateCreated,
       "jti": uuidv4(),
       "operation": "customer_login",
       "store_hash": storeHash,
       "customer_id": customerId,
       "redirect_to": "${storeUrl}/cart.php"
   }
   let token = jwt.sign(payload, clientSecret, {algorithm:'HS256'});
   return `${storeUrl}/login/token/${token}`;
};
 
const clientId = "clientID";
const clientSecret = "secret";
const customerId = "1";
const storeHash = "hash";
const storeUrl = "https://url.com";
 
const loginUrl = getLoginUrl(customerId, storeHash, storeUrl, clientId, clientSecret);
console.log(loginUrl);


//node index.js
///or
//open -a Safari `node index.js`