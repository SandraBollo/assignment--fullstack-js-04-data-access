## Postgres -- Create DB

#### Create db and db user:

+ Enter Postgres client
```
sudo -u postgres psql postgres
````

+ *Note:* this command will have your
```
postgres=# CREATE ROLE dba_devjobs WITH LOGIN;
postgres=# ALTER ROLE dba_devjobs WITH ENCRYPTED PASSWORD 'passpass';
postgres=# CREATE DATABASE devjobs OWNER dba_devjobs;
```
