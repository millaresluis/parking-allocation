

# README

## Requirements
- Ruby v2.5.1
- Ruby on Rails v5.1.7
- MySQL v5.7

## MySQL Database Setup

### Importing the Database Schema

Before running the application, you need to set up the MySQL database using the exported schema. Follow these steps:

1. Download the exported schema: https://drive.google.com/file/d/1YSKrhthiidkSWvZ7JU0IlQBovRjrctAV/view?usp=sharing
2. Open MySQL Workbench.
3. Connect to your MySQL server.
4. Select the database you want to use for the parking allocation system.
5. Go to `Server` > `Data Import` in MySQL Workbench.
6. Choose the folder that contains the downloaded sql files (`files.sql`)
7. Start import.

## Rails Database Setup
Set the right credentials of your MySQL server in the `config/database.yml` file before running the application. 
### Steps to Update Database Credentials 
1. Clone the app.
2. Navigate to the `config` directory. 
3. Open the `database.yml` file. 
4. Locate the `default` and `development` section within the file. 
5. Update the `username` and `password` fields with your MySQL server credentials. 
6. Save changes.

## Installation 
```bash
$ cd parking-allocation-system
```
```bash
$ gem install bundler -v 2.2.3
```
```bash
$ bundle install
```
```bash
$ rails s
```

## Updates
1. Introduced a new parking layout design and improved parking slot auto-assign function. (Please download the new exported schema here: https://drive.google.com/file/d/1YCuOBgKfRFIJRlzK8rLaQGr5Jyo8HXPM/view?usp=sharing)
2. Refactored code in controllers & models (transferred all the logic and data handling in their corresponding model).
3. Dynamic entry points.
