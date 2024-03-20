-- Database: student_directory

-- DROP DATABASE IF EXISTS student_directory;

CREATE DATABASE student_directory
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
	
-- Drop table if exists
DROP TABLE IF EXISTS student;

-- Create table
CREATE TABLE student (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(45),
  last_name VARCHAR(45),
  email VARCHAR(45)
);

-- Insert data
INSERT INTO student (first_name, last_name, email) VALUES 
  ('Moin Uddin', 'Rahat', 'rh400405@gmail.com'),
  ('Emma', 'Baumgarten', 'emma@luv2code.com'),
  ('Avani', 'Gupta', 'avani@luv2code.com'),
  ('Yuri', 'Petrov', 'yuri@luv2code.com'),
  ('Juan', 'Vega', 'juan@luv2code.com');