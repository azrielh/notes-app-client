export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "az-sls-notes-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://rq9jyc21z5.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_9vIShXJzX",
    APP_CLIENT_ID: "5c3o0nj048aolf8ntnk4te293s",
    IDENTITY_POOL_ID: "us-east-1:2bbc8eda-e1ae-4660-852a-38792166e6f6"
  },
  MAX_ATTACHMENT_SIZE: 5000000
};
