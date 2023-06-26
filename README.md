# HoopHub-API

The server application for basketball lovers to engage with each other around the latest news in basketball!

This is the server-side Node.js application using mySQL for the database. It has 3 migrations, as well as the seeds to go with it. It has most of the required features a CRUD application would hold - apart from the authController which is designed to generate a JWT token for the loggin in user. All the routes are specified in a separate router folder. I have left in some comments I felt were necessary for me to understand the code, as sometimes I find it can get quite messy in the controllers.

## Lessons Learned

The main issue I had was with the authentication. I bit off way more than I could chew with this and tried to go too far with it, which ended up causing issues with the web application (and it still is!) I managed to reduce it to what it is now, but I wouldn't exactly call it a particularly safe application as there is no involvment of bcrypt. That would be something to implement in the near future. Other than that, I consolidated my knowledge on Node.js and thought I did a fairly good job creating the routes and controllers in a somewhat concise and readable manner - the main issue was actually using it in the front end!

There also seems to be an issue with the tables, as I can only seed tables in order, by specifying which seeds I want to do, even though they are numbered in order. Something to look into, I suppose.

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

migrations

```bash
  npm run migrate
```

seeds

```bash
  npx knex seed:run --01_users_seed.js
  npx knex seed:run --02_tweets_seed.js
  npx knex seed:run --01_comments_seed.js
```

NB: You may not encouter the same error I did and may just be able to npm run seed - but if you do fall across an error, run these in order one after another!

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

PORT=
DB_HOST=
DB_LOCAL_NAME=
DB_LOCAL_USER=
DB_LOCAL_PASSWORD=
JWT_SECRET=

The port will be where your node server is running eg 4040, and the rest of the data comes from your mySQL database. You can create your own JWT_SECRET password!
