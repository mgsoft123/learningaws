Create new service
sls create -t aws-nodejs -n blog

Deploy service
sls deploy

Check deployed ok
sls invoke -f createArticle

![](../images/statelessnobackendimplemented.PNG)

update resources in yml file for database detail

create dependency on aws sdk create a package.json file

npm init -y

install dependency -will see node_modules directory created

npm i --save aws-sdk

Add uid module

npm --save uuid


