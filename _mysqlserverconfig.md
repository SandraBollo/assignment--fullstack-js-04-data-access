## MySQL Servr Config

#### (1) Install MySQL-Server
```
sudo apt-get update
sudo apt-get install mysql-server
```

#### (2) Configure  MySQL-Server service for proper directory

```sh
sudo service mysql stop
sudo usermod -d /var/lib/mysql mysql
```

#### (3) Start  MySQL-Server
```sh
sudo service mysql start
```
