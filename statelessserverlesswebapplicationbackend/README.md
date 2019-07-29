Create new service
sls create -t aws-nodejs -n blog

Deploy service
sls deploy

Check deployed ok
sls invoke -f createArticle

![](../images/statelessnobackendimplemented.PNG)
