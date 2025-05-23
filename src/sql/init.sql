-- Create the database
CREATE DATABASE todolist;

-- Use the database
USE todolist;

-- Create the todos table
CREATE TABLE todos (
  id BIGINT PRIMARY KEY,
  text VARCHAR(255) NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--- Add column on todos table
ALTER TABLE todos ADD COLUMN list VARCHAR(50) NOT NULL DEFAULT 'Personal';