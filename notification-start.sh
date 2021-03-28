##### Server Config
export PORT=7021
export BODY_LIMIT=5mb
export ALLOW_CORS_ORIGIN=*
export ALLOW_CORS_METHODS=OPTIONS,GET,POST,PUT,PATCH,DELETE

##### Notification configs
export SMTP_USERNAME="stack.finance.notifier@gmail.com"
export SMTP_PASSWORD="Stack@123"
export SMTP_HOST="smtp.gmail.com"
export SMTP_PORT="587"
export SENDER_EMAIL="stack.finance.notifier@gmail.com"
export SENDER_SERVICE="outlook"
export NODEMAILER_DEBUG="false"
export NODEMAILER_LOGGER="false"
export SENDER_NAME="Stack Finance"

##### MongoDB Configs
export MONGO_USERNAME=
export MONGO_PASSWORD=
export MONGO_DBNAME=Notification-db
export MONGO_HOSTS=localhost:27017
#export MONGO_REPLICASET=
export MONGO_READ_PREFERENCE="secondaryPreferred"
#export MONGO_PEM_PATH="/home/node/mongo.pem"
#export MONGO_SERVER_IDENTITY_CHECK="true"

#### CRON Configs
export CRON_TIME_EMAIL_NOTIFICATION="0 0 * * *"
export CRON_TIME_RETRY_NOTIFICATION="0/10 * * * *"
export CRON_TIME_ZONE='Asia/Kolkata'

#npm run ip
#npm run build
npm test
npm start
