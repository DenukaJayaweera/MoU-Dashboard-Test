CREATE DATABASE DASHBOARD;
USE DASHBOARD;

create table role(
                     role_id varchar(36) not null primary key,
                     role_name varchar(30)

                     
);

create table user(
                     user_id varchar(36)not null primary key,
                     email varchar(50),
                     password varchar(250),
                     first_name varchar(30),
                     last_name varchar(30),
                     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                     token varchar(300),
                     role_id varchar(36),

                    foreign key (role_id) references role(role_id) ON DELETE CASCADE

);

CREATE TABLE Country(
    CountryName Char(60),
    CountryCode char(2) not null Primary key
);

CREATE TABLE Faculty (
    faculty_id varchar(36) not null primary key,
    faculty_name varchar(36),
    email varchar(36),
    phone_number varchar(16)
);