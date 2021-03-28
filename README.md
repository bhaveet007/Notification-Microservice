### Notification Microservice

##### Features:
* This MS sends notifications at 12:00AM Daily and retries checks every 10 mins.
* Retry Mechanism has been Implemented for failures.
* Crons are configurable.
* Schema is designed in such a way that, It Can be consumed by any other projects(APPS).
* Few test cases are written.
* MongoDB is used as DATABASE.
* 2 Different collections are maintained one for templates and another for storing requests and adding Retry mechanism.
* Test cases and build scripts has been already added
* .gitignore, babel, and editor configuration already added as good practice.

#### To start application:
* STEP 1: Setup MongoDB.
* STEP 2: ADD configuration to notification-start.sh file.
* STEP 3: Import postman collection file to postman.
* STEP 4: Once all setup is done. Run **"sh notification-start.sh"** command.
* STEP 6: Test cases and build scripts has been already added.

#### Future Implementation
**Validations**: validation at middleware level can be added using express-validator schema.
**Throttling**: Can be implemented using Redis. (User can be blocked after n attempts in n hrs/mins/days)
