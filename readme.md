mysql server 설치

sudo apt install mysql-server

3. MySQL 기본 설정
   3-1. 외부 접속 기능 설정 (포트 3306 오픈)
   처음에 이 부분을 설정을 안해줬더니 MySQL Workbench를 사용하려고 했더니 오류가 발생했다.

$ sudo ufw allow mysql
3-2. MySQL 실행
$ sudo systemctl start mysql
3-3. Ubuntu 서버 재시작시 MySQL 자동 재시작
$ sudo systemctl enable mysql 4. MySQL 접속
$ sudo /usr/bin/mysql -u root -p
ERROR 1698 (28000)
처음에 $ sudo mysql -u root -p 로 진행했더니 아래와 같은 에러가 발생했다.

ERROR 1698 (28000): Access denied for user 'root'@'localhost'
해결방법: mysql 대신 /usr/bin/mysql 과 같이 경로를 정확하게 명시해주면 된다.

성공적으로 접속하면 터미널 창이 아래와 같이 변경된다.

mysql> 여기다가 입력하면 된다

5-1. 사용자 정보 확인
mysql> SELECT User, Host, authentication_string FROM mysql.user;

5-2. TESTDB 라는 데이터 베이스 만들고 확인
mysql> CREATE DATABASE TESTDB;
mysql> SHOW DATABASES;

5-3. TESTDB 데이터베이스를 사용할 계정 testuser 만들고 확인
mysql> CREATE USER 'testuser'@'localhost' IDENTIFIED BY 'mysql비번';
mysql> FLUSH PRIVILEGES;
mysql> SELECT User, Host, authentication_string FROM mysql.user;
5-4. TESTDB 데이터베이스를 사용할 계정 testuser 에 권한 부여
mysql> GRANT ALL PRIVILEGES ON 데이터베이스이름.\* FOR'testuser'@'localhost';
mysql> FLUSH PRIVILEGES;
mysql> SHOW GRANTS FOR'testuser'@'localhost';
mysql> SELECT User, Host, authentication_string FROM mysql.user;

Option 1. MySQL 버전 확인
mysql> show variables like "%version%";

Option 2. Mysql 비밀번호 변경 방법
mysql> SET PASSWORD FOR 'root'@'localhost' = PASSWORD('바꿀비번');
또는

mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '바꿀비번';
