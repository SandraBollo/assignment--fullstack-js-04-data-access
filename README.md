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
The goal of this assignment is to return data from the `job` and `companies` tables in a database as JSON when the user goes accesses the `api/jobs` and `api/companies` routes.  

In order to return data from the database, the schema needs to be declared with migrations and the data needs to be seeded *into* the database.

Here is a link to the sample data that you will use to seed:
  - [jobs data](https://github.com/muktek/assignment--fullstack-js-04-data-access/blob/master/seeddata/jobsData.js)
  - [companies data](https://github.com/muktek/assignment--fullstack-js-04-data-access/blob/master/seeddata/companiesData.js)


### Requirements
In order to complete this assignment, you will need to:


- [x] **Create a local MySQL database**
  + [link to instructions](_mysqlnewdb.md)

- [x] **Install dependencies**
  - mysql2 and knex
  ```
  npm install --save knex mysql2
  ```

- [x] **Create relevant files/folders**
  + add a `databases/` directory to `src/`
  + add a `dbConnect.js` file to `src/databases/`
  + add a `seeds/` directory to `src/databases/`
  + add a `migrations/` directory to `src/databases`

- [x] **Configure knex**
  + configure the `knexfile.js` at the root of your project to connect to it.
  - see [`knexfile.js` config example](./knexfile.js)


- [x] **Create schema w/ database migrations**
  + database migrations allow you to create tables and table schema on the db
  + you should create a migration to create the `job` table and the `job` table's schema
    ``
  + you should create a migration to create the `company` table and the `company` table's schema.
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
  + for `api/jobs`
    - use knex to query the db's `job` table and return data as JSON in the server's response

  + for `api/companies`
    - use knex to query the db's `company` table and return data as JSON in the server's response




## Setup Instructions

In Terminal:

```sh
# (1) navigate to your project--devjobs directory
cd ~/Documents/muktek/assignments/project--devjobs

# (2) Commit your changes from the previous demo
git commit -m 'committing work from part-03'

# (3) You will work on the part-04-views branch for this feature
git checkout -b part-04-data-access

```

**Installation Checklist**

- [x] **Have mysql-server installed**
  - (`sudo service myqsl start` will confirm)
  - [link to mysql-serve install instructions](mysqlserverconfig.md)

- [x] **You have created a MYSQL user**
  - [link to instructions](_mysqluserconfig.md)

- [x] **Have knex installed globally**
  - `npm install -g knex`
