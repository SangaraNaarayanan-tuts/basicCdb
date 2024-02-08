The below are the neccessary steps that are required to run this repo:

Creating an account:
- create a new account on cockroachdb website - https://cockroachlabs.cloud/signup 
- create a cluster on your closest region and pick the free plan
- create a user and copy the passcode
- now inside your cluster dashboard you have to click the connect button
- copy the Connection String and replace your user password

In code:
- do "npm install" first 
- create a new file called .env 
- add a new variable DATABASE_URL and assign it to the dburl with passcode
- eg: DATABASE_URL = "postgresql://username:password@clustersample"
- now run the code using node index.js

Postman Collection:
- In the root you can find "basicsCdb.postman_collection.json"
- go to postman and click on import collection
- select this file
- now you will have a sample route and success response format
- change accordingly and utilise it

Thanks for reading pals. Keep hustling and learn more everyday.
