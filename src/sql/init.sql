-- Create the database
CREATE DATABASE IF NOT EXISTS todolist;

-- Use the database
USE todolist;

-- Create the todos table
CREATE TABLE IF NOT EXISTS todos (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  text VARCHAR(255) NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  list VARCHAR(50) NOT NULL DEFAULT 'Personal'
);