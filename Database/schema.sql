CREATE DATABASE DASHBOARD;
USE DASHBOARD;

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