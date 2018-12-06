# lambda-example
AWS Lambda Function Example

https://serverless.com/examples/
https://github.com/serverless/examples


## Install example
```bash
sls install -u https://github.com/serverless/examples/tree/master/aws-node-simple-http-endpoint
```

## Usage

You can now invoke the Lambda directly:

```bash
serverless invoke local --function currentTime
sls invoke local --function currentTime -d {msn: world}
```

...even see the resulting log via

```bash
serverless invoke --function currentTime --log
```