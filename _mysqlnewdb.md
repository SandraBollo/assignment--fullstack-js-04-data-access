## MySQL -- Create DB

#### (1) Create db for project for your MySQL user:

+ put the project name inside the `"......"`
```
DBNAME="......"
mysql -u $USER -p -e "CREATE DATABASE $DBNAME```
````

+ *Note:* this command will have your mysql user create the database
