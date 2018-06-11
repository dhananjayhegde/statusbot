

# Node.js app for Recast.ai bot to connect to SAP Cloud Platform

This is only a beginning.  Lot of things yet to be done.

Idea is to connect `Recast.ai` bot to SAP On Premise systems through SAP Cloud Platform.
In this, biggest challenge is to be able to connect to a `Node.js` app on the `SAP CP (Cloud Platform)`. 
This app tries to solve that problem.

## Usage

App itself is hosted on SAP Cloud Platform Trial using Cloud Foundry.  
Clone the repo into your a folder and then run 
-	`node init`
-	`npm install express --save`

This will initiate the node app

## Developing



### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.

## Credits

Idea is taken from [this scn blog](https://blogs.sap.com/2017/05/16/deploying-a-nodejs-application-on-sap-cloud-platform/)
Some of the config/ folder and package.json parts are taken from [this GitHub repo](https://github.com/rhari008/cf_sentimentAnalysis) which is used in the above blog.