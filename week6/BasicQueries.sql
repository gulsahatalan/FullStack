/*
Revising the Select Query I
*/

SELECT *
  FROM CITY
 WHERE POPULATION > 100000
   AND COUNTRYCODE = 'USA';

/*
Revising the Select Query II
*/

SELECT NAME
    FROM CITY
    WHERE POPULATION > 120000
    AND COUNTRYCODE = 'USA'
/*
Select All
*/

SELECT * FROM CITY;

/*
Select By ID
*/

SELECT * FROM CITY WHERE ID = 1661;

/*
Japanese Cities' Attributes
*/

SELECT * FROM CITY WHERE COUNTRYCODE = 'JPN';

/*
Japanese Cities' Names
*/

SELECT NAME
    FROM CITY
    WHERE COUNTRYCODE = 'JPN';

/*
Weather Observation Station 1
*/

SELECT  CITY , STATE FROM STATION;

/*
Weather Observation Station 3
*/

SELECT DISTINCT CITY FROM STATION WHERE MOD(STATION.ID,2)=0 ORDER BY CITY;

/*
Weather Observation Station 4
*/

SELECT COUNT(CITY) - COUNT(DISTINCT CITY) AS New FROM STATION

/*
Weather Observation Station 5
*/

SELECT CITY, length(CITY) from STATION
ORDER BY length(CITY),CITY asc
limit 1;
SELECT CITY, length(CITY) from STATION
ORDER BY length(CITY) desc
Limit 1;

/*
Weather Observation Station 6
*/


SELECT City From STATION WHERE LEFT(City,1) IN ('A','E','I','O','U')

/*
Weather Observation Station 7
*/

SELECT DISTINCT CITY FROM STATION WHERE RIGHT(CITY,1) IN ('a','i','e','o','u');

/*
Weather Observation Station 8
*/

SELECT DISTINCT city FROM station 
WHERE LEFT(city,1) in ('a','e','i','o','u') 
AND RIGHT(city, 1) in ('a','e','i','o','u')

/*
Weather Observation Station 9
*/

SELECT DISTINCT(CITY) FROM STATION WHERE LEFT(CITY,1) NOT IN ('A','E','I','O','U');

/* 
Weather Observation Station 10
*/

SELECT DISTINCT CITY FROM STATION WHERE RIGHT(CITY,1) NOT IN ('a','e','i','o','u');

/*
Weather Observation Station 11
*/

SELECT DISTINCT CITY FROM STATION WHERE LEFT(CITY, 1) NOT IN ('A', 'E', 'I', 'O', 'U') OR RIGHT(CITY, 1) NOT IN ('a', 'e', 'i', 'o', 'u')

/*
Weather Observation Station 12
*/

SELECT DISTINCT CITY FROM STATION WHERE NOT (CITY LIKE 'A%' OR CITY LIKE 'E%' OR CITY LIKE 'I%' OR CITY LIKE 'O%' OR CITY LIKE 'U%') AND NOT (CITY LIKE '%a' OR CITY LIKE '%e' OR CITY LIKE '%i' OR CITY LIKE '%o' OR CITY LIKE '%u')

/*
Higher Than 75 Marks
*/

SELECT NAME FROM STUDENTS WHERE MARKS > 75 ORDER BY RIGHT(NAME, 3),ID;

/*
Employee Names
*/

SELECT NAME FROM EMPLOYEE order by NAME;
