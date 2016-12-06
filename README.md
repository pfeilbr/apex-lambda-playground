# apex-lambda-playground

learn [Apex](http://apex.run/) serverless architecture

**Example Session**

```sh
apex init
apex deploy
apex logs --follow
apex invoke hello
echo -n '{"name": "brian"}' | apex invoke hello
apex list
echo -n '{"q": "heroku"}' | apex invoke search

# file upload example
# see screenshot of how to access file contents from lambda @
#   http://static-content-01.s3-website-us-east-1.amazonaws.com/2__apex_logs_-f__apex__1DF7126D.png
curl -i -F name=test -F filedata=@README.md https://UPDATEME.execute-api.us-east-1.amazonaws.com/prod/playground_api-gateway

```
