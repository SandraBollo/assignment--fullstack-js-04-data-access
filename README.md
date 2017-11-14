# Full Stack JS Project
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

####  Overview
The goal of this assignment is to return JSON data from tables in a database  when the user goes to the `api/jobs` route and `api/companies` routes.  

In order to accomplish this complete this assignment, you will need to:
+ create a new MySQL database locally
+ create tables on the db schema by running database migrations
+ seed the tables in the database with sample data
+ configure the express app's connection to the db.
+ use knex to query and return data from the db in the `api/`
  route's response handler

#### Requirements



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
