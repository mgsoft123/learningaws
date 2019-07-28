# learningaws
AWS Learning

Set up user in IAM and for keys

1 create dir ~/.aw  or %UserPRofile%\.aws

2 Add credentials to file credentials in form

[default]

aws_access_key_id=

aws_secret_access_key=

For serverless 

1 Install node.s > v6

2 Install serverless : npm install -g serverless

3 Check installed : serverless --version 

lambda cost 20c per million reqs + rounded 100 ms compute time + memory GB/sec * const

Create Lambda through AWS console create Role -basic Lambda execution -edit time out memory etc

API Gateway through mangement console use provided tempalte(Swagger 2.0)
Then click on new API /Create Resource called foo create GET method & lambda integration


![](images/apigatewayLambda.PNG)


save and test -will see call invocation on Lambda dashboard monitoring
Management console tedious hence serverless framework serverless.com

type servelss help or ssl --help to see commands

Create a serverless project

mkdir for serless files e.g app

create a service t(emplete) n(ame)
sls create --t aws-nodejs --n simple
create handler and serverless.yml file Can chage e.g regionssl deploy -f hello

deploy function:-
sls deploy -f hello



