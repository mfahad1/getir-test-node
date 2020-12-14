# How to Run the Project


## `Check the test online on Heroku`


I have hosted the test on heroku 
At https://getir-test-fahad.herokuapp.com

Required POST END POINT is located at
```https://getir-test-fahad.herokuapp.com/records```

Here is the sample CURL request to test

``
curl -X POST https://getir-test-fahad.herokuapp.com/records  -H 'cache-control: no-cache'  -H 'content-type: application/json' -H 'postman-token: 898c3c09-7ecf-37b5-3edc-aacdaf1bac41'  -d '{ "startDate": "2017-01-26", "endDate": "2017-02-02", "minCount": 170, "maxCount": 310 }'
``

&nbsp;

## Swagger API Documentation
Swagger API will be available on port ```3001```

http://localhost:3001/
&nbsp;

## `Running the project Locally`

We have two options to run project locally.

1) With Docker and docker-composer
    - You will just need to run.
    - ```docker-compose up --build -d```
&nbsp;

2) Through npm install
    - You will need Node v12 to run the project.
    - Run ```npm install```
    - Start project with ```npm start```
    &nbsp;
    Application will start on port ```3200```

&nbsp;

## `Run project test cases`

To run test. Execute following command
```npm run test```

&nbsp;

## `Post Endpoint to search records`

```
POST http://localhost:3002/records HTTP/1.1
Host: getir-test-fahad.herokuapp.com:3200
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: 3c4d957b-3bdb-c674-8ac0-8a9ed71664bc

{
  "startDate": "2017-01-26", 
  "endDate": "2017-02-02", 
  "minCount": 170, 
  "maxCount": 310 
}

```
