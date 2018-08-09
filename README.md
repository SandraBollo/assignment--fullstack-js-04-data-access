# Full Stack JS Project - Data Access
**`fullstack-js-04-data-access`**


## Context
You are going to build a full stack web application with node.js + React. In order to become familiar with how a node project works, you will be responsible for configuring the  initial major components of the project.  

- express server
- application routes
- views
- api layer
  - **data access [this assignment]**
  - data models (ORM)
  - RESTful routes


## The Assignment
For this assignment, we will focus on enabling **data access** in our application to a remote database. With the `/api` routes + data access, we will be have our own API for accessing and storing application data.

###  Overview
The goal of this assignment is to generate the table schema, seed the data, and query for records from the  `companies` tables in the application database. When the user accesses  the `api/companies` routes, the companies data should be returned as JSON.  

In order to return data from the database, the schema needs to be declared with migrations and the data needs to be seeded *into* the database.

Here is a link to the sample data for the companies that you will use to seed:
  - [companies data](https://github.com/muktek/assignment--fullstack-js-04-data-access/blob/master/seeddata/companiesData.js)


### Requirements
In order to complete this assignment, you will need to:


- [x] **Create a local Postgres database for project + database user**
  + [link to instructions for creating new postgres database](_pgnewdb.md)

- [x] **Install dependencies**
  - postgres client for node and knex
  ```sh
  npm install --save knex pg
  ```

- [x] **Create relevant files/folders**
  + add a `database/` directory to `src/`
  + add a `seeds/` directory to `src/databases/`
  + add a `migrations/` directory to `src/databases`

- [x] **Configure knex**
  + configure the `knexfile.js` at the root of your project to connect to it.
  - see [`knexfile.js` config example](./knexfile.js)


- [x] **Create schema w/ database migrations**
  + database migrations allow you to create tables and table schema on the db
  + you should create a migration to create the `jobs` table and the `jobs` table's schema
    ``
  + you should create a migration to create the `companies` table and the `companies` table's schema.
  + you should create both the 'up' + 'down' migrations
  + execute database migrations
    - `knex migrate:latest` - updates schema by migrating to latest migration file
    - `knex migrate:rollback` - reverts to original schema (no schema)
    - (both latest and rollback commands should work -- the 'up' and 'down' migrations are written correctly)

- [x] **Create seed data**
  - create seed files
    - Seed commands
      - `knex seed:make «seedName»` - create a seed file
      - `knex seed:run` - execute seed files to populate database
  -  execute seed the tables in the database with sample data

- [x] **Create a connection to the db in application** (`server.js`)
  + configure the express app's connection to the db.
  + you should use a `dbConnect.js` in the `src/database/` directory
  + pass the db connection to `app.locals.db` to give the application universal access to the db connection.


- [x] **Query data in `apiRouter.js`**
  + access the db connection in `req.app.locals.db`

  + for `api/companies`
    - use knex to query the db's `companies` table and return data as JSON in the server's response



### Expected Result

- When I navigate to `/api/companies` in the browser, I should receive a json array of objects of company records from the database



## Setup Instructions

In Terminal:

```sh
# (1) navigate to your project--devjobs directory
cd ~/Documents/muktek/assignments/project--devjobs

# (2) Commit your changes from the previous demo
git commit -m 'committing work from part-03'
git checkout master
git merge part-03-views

# (3) You will work on the part-04-views branch for this feature
git checkout -b part-04-data-access

```


**Installation Checklist**

- [x] **Have postgres installed**
  - (`sudo service postgressql start` will start)
  - `sudo -u postgres psql postgres`

- [x] **Have knex installed globally**
  - `npm install -g knex`
