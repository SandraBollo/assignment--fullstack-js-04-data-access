## MySQL User Config

#### (1) Create db password for user
+ put your own password inide the `"......"`
```
DBPW="......."
```

#### (2) Create db user
```
mysql -u root -p -e "CREATE USER '$USER'@'localhost' IDENTIFIED BY '$DBPW'";
```

#### (3) Grant 'root' privileges to user
```
mysql -u root -p -e "GRANT ALL ON *.* TO '$USER'@'localhost'";
```
