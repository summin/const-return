# const-return

### Build
use docker compose to build public(dist) version

### Deploy
use terraform plan and apply to deploy the public version to s3 bucket. Terraform script requires aws api key and secret to be located at ~/.const-return/access.json
```json
format:
{
    "access_key": "<YOUR_KEY>",
    "secret_key": "<YOUR_SECRET_KEY>"
}
```