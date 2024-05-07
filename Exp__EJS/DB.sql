CREATE DATABASE IF NOT EXISTS DB;
USE DB;
CREATE TABLE IF NOT EXISTS serie (
    ID INT PRIMARY KEY,
    Title VARCHAR(255),
    Country VARCHAR(255)
);
INSERT INTO serie (ID, Title, Country)
VALUES
    (1, 'One Piece', 'Japan'),
    (2, 'Naruto', 'Japan'),
    (3, 'Descendants of the Sun', 'Korea'),
    (4, 'Vagabond', 'Korea'),
    (5, 'test', 'Indonesia'),
    (6, 'lose', 'Japan');
