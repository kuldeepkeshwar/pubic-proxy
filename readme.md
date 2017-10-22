# pubic-proxy
utility to proxy a private target and expose it to public

# dependencies
You need node.js and npm installed on your system in order to use this utility.  
Steps to satisfy dependencies :
1. Clone or download the repo from github to your system
2. Navigate to the source folder and execute the following command :
`npm install
`
  
#usage
to use the utility after satisfying dependencies  
`npm start -- --target YOUR.TARGET.HOSTNAME --port PORTNO.OF.YOUR.SYSTEM
`

# example
Lets say jsonplaceholder.typicode.com is the private server which you want to make public  
`npm start --  --target jsonplaceholder.typicode.com --port 4300
`