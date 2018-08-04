## Postgres -- Create DB

#### Create db and db user:

+ put the project name inside the `"......"`
```
sudo -u postgres psql postgres
````

+ *Note:* this command will have your mysql user create the database
```
postgres=# CREATE ROLE dba_devjobs WITH LOGIN;
postgres=# ALTER ROLE dba_devjobs WITH ENCRYPTED PASSWORD;
postgres=# CREATE DATABASE devjobs OWNER dba_devjobs;
```
