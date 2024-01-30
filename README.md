
# README

## Requirements
- Ruby v2.5.1
- Ruby on Rails v5.1.7
- MySQL v5.7

## MySQL Database Setup

### Importing the Database Schema

Before running the application, you need to set up the MySQL database using the exported schema. Follow these steps:

1. Download the schema exported from MySQL Workbench https://drive.google.com/file/d/1YSKrhthiidkSWvZ7JU0IlQBovRjrctAV/view?usp=sharing
2. Open MySQL Workbench.
3. Connect to your MySQL server.
4. Select the database you want to use for the parking allocation system.
5. Go to `Server` > `Data Import` in MySQL Workbench.
6. Choose the folder that contains the downloaded sql files (`files.sql`)
7. Start import.

## Installation 
```bash
$ git clone https://github.com/millaresluis/parking-allocation-system.git
$ cd parking-allocation-system
$ bundle install
$ rails s (please read note before running the server)
```
## Note
Set the right credentials of your MySQL server in the `config/database.yml` file before running the application. 
### Steps to Update Database Credentials 
1. Navigate to the `config` directory. 
2. Open the `database.yml` file. 
3. Locate the `default` and `development` section within the file. 
4. Update the `username` and `password` fields with your MySQL server credentials. 
5. Save changes.
