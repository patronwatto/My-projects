-- checking stocks on the database
SELECT * FROM cars;

-- select brand model and price from the cars table
SELECT brand, model, price FROM cars;

-- selecting car infos where color is black
SELECT brand, model, color, price FROM cars
    WHERE color = 'black';

-- select the brand model condition and price of cars where 
-- condtion is greater than 3
SELECT brand, model, condition, price FROM cars 
    WHERE condition >= 3;

-- could you show me the your cars which cost less than 50000 ??
SELECT brand, model, year, price, color, condition FROM cars 
    WHERE price < 50000  && sold = false;


-- 1965 was a bad year for me... Please don't show me cars from that year
SELECT * FROM  cars
    WHERE year != 1965 ;  -- we could also use WHERE year <> 1965 ;

-- I want a new ride but there's no way I can be seen in a yellow car
SELECT * FROM cars 
    WHERE color <> 'yellow' 
    AND sold = false ;

-- We also use the LIKE keywork with wildcard symbols in where query to get partially correct selections 
-- % is used for any number of any character 
--      e.g "%green%" will match on strings like 'light green', 'greenish-yellow', 'dark green' etc...
-- _ is used for one of any character
--      e.g "_-Type" will mathc on strings like 'X-Type', 'S-Type', 'E-Type'


-- Lets select branch, model, color, and year where the color include green

SELECT brand, model, color, year FROM cars 
    WHERE color LIKE '%green%' ;

-- Lets select cars without any shade of green in its color
SELECT brand, model, color, year FROM cars 
    WHERE color NOT LIKE '%green%' ;

-- I'm looking for one of the Aston Martin DB models 
SELECT * FROM cars
    WHERE model LIKE 'DB_' ;

-- I want a car made before 1970 which I can drive home in
SELECT brand, model, year, price, color, condition FROM cars
    WHERE year < 1970 
        AND condition >= 3
        AND sold = false ;

-- Gimme a car from the 80s please
SELECT * FROM cars 
    WHERE year >= 1980 
        AND year < 1990    -- We could also do it by using " year BETWEEN 1980 AND 1989"
        AND sold = false;

-- I've got a budget between $20k - 60k for this restoration and I've gotta drive 
-- it back to the repair shop. Ohh and do you have that in red 
SELECT * FROM cars 
    WHERE price BETWEEN 20000 AND 60000
        AND condition BETWEEN 1 AND 3
        AND color LIKE '%red%'
        AND sold IS false;
    
-- I want to spend less that 250k, but I'll consider more if its a porsche
SELECT * FROM cars 
    WHERE (price < 250000
        OR brand = 'Porsche')    --brackets make a great difference in the results of a query
        AND condition > 3 ;

-- Well, I could take a Ford, but I like Chevrolet too, and Ferrari is a great brand...
SELECT * FROM cars
    WHERE brand IN ('Ford', 'Chevrolet', 'Ferrari')
    AND sold IS false ;

-- I'd love a decent car from the 60s - but even numbers harsh my mellow, man!
SELECT * FROM cars
    WHERE year IN (1961, 1963, 1965, 1967, 1969)
        AND condition >= 3
        AND sold IS false ;

-- I'm looking for a Dodge from the 60s but I could take a Ford or Triumph from the 70s
SELECT * FROM cars
    WHERE ((brand = 'Dodge' AND year BETWEEN 1960 AND 1969)
        OR (brand IN ('Ford', 'Triumph') AND year BETWEEN 1970 AND 2979))
        AND sold IS false ;


-----------------------------------------------------------------------------------
-- Order and Aggregates --

-- ORDER BY are used to sort our results. it allows us to define columns which we can sort
-- our results by

SELECT brand, model year FROM cars
    ORDER BY brand DESC ;
     

SELECT brand, model year FROM cars
    ORDER BY brand DESC, year ;

-- Select the brand, model, condition and price from cars, order the table by condition in 
-- descending order and by price in ascending order.
SELECT brand, model, condtion, price FROM cars
WHERE sold IS false
ORDER BY condition DESC, price ASC ;

-- Setting Limit.

-- Select the most expensive car in the stock
SELECT brand, model, color, year , price FROM cars
ORDER BY price DESC 
LIMIT 1 ; 

-- Can you show me the 5 least expensive cars in stock which are any shades of red ??
SELECT * FROM cars
    WHERE color LIKE '%red%'
        AND sold IS false
    ORDER BY price ASC
    LIMIT 5 ;

-----------------------------------------------------------------------
---------- Aggregating the results --------------------------------

-- Aggregating is the art of turning the results of a column into a single value
-- like sum, product, count and so on.....


-- Count the number of cars where sold is true
SELECT COUNT(*) FROM cars
    WHERE sold IS true ;

-- Sum the price of cars sold
SELECT SUM(price) AS total-price FROM cars
    WHERE sold IS true ;

-- Select the maximum retail price where sold is true and use most expensive as its alias
SELECT MAX(price) AS most-expensive FROM cars 
    WHERE sold IS true ;

-- Find the average price of a Bentley ??
SELECT FLOOR(AVG(price)) AS avr-Bently-price FROM cars
    WHERE brand = 'Bentley' ;
 
-- Find the average, minimum and maximum price of all sold cars
SELECT CEIL(AVG(price)) AS average, MIN(price) AS minimum, MAX(price) AS maximum FROM cars
    WHERE sold IS true ;

-------------- Group By ---------------------------------------

-- How many of each brand do we have in stock ??
SELECT brand, COUNT(brand) AS frequency FROM cars
    GROUP BY brand ; 

-- How many cars do we have at each level of condition, what is the average price per level, and sort the results in ascending order of count ??
SELECT condition, COUNT(condition) AS condition-count, FLOOR(AVR(price)) AS average-price
FROM cars
GROUP BY condition 
ORDER BY condition ;

-- Select the brand, a count for each brand, and an average of the price for each brand
-- round the average down to the nearest number, alias the average as AVG in your output
-- from cars where the cars have not been sold, group the table by brand

SELECT brand, COUNT(brand) AS brand-count, FLOOR(AVG(price)) AS avg-price FROM cars
    WHERE sold IS false
    GROUP BY brand ;

----------------- Writing Conditions for Aggreagates --------------------------------
------ using HAVING --------------- to add conditions--------------------------------

-- Do the same thing above but this time only show results where the count is > 1
SELECT 
    brand, 
    COUNT(brand) AS brand-count, 
    FLOOR(AVG(price)) AS avg-price 
    FROM cars
        WHERE sold IS false
        GROUP BY brand 
        HAVING brand-count > 1 ;

-- The manager wants to know some cars which sell well based on the year they are manufactured
SELECT year, COUNT(year) AS car-count, MIN(price) AS min-price, MAX(price) AS max-price FROM cars 
    WHERE sold IS true
    ORDER BY car-count 
    GROUP BY year 
    HAVING COUNT(year) > 1 ;


-- What are the 5 oldest cars we have available
SELECT brand, model, year, price FROM cars
    WHERE sold IS false
    ORDER BY year 
    LIMIT 5 ;

-- What are the most common colors you have in stock??
SELECT color, COUNT(color) AS color-count FROM cars
    WHERE sold IS false
    GROUP BY color 
    ORDER BY COUNT(color) DESC; 
  
-------------------------------------------------------------------------------------

---------------------- Manipulating Data -------------------------------------------
-- Databases are dynamic we add, update/modify and delete data 

-- Insertion 
INSERT INTO cars (brand, model, year, price, color, condition, sold)
VALUES ('Ford', 'Escort RS2000', 1978, 39000, 'blue', 4, false),
        ('Aston Martin', 'V8 vantage', 1977, 145000, 'dark green', 5, false) ;

INSERT INTO cars (brand, model, year, price, color, condition, sold)
VALUES ('Chevrolet', 'Bel Air', 1955, 50000, 'purple', 5, false),
        ('Porsche', '944 Turbo', 1986, 48000, 'white', 4, false) ;


-- Update 
UPDATE cars SET sold = true 
WHERE brand = 'Ford'
    AND Model = 'Escort RS2000';

-- update the record of the Aston Martin DB4 with ID 14, set the condition to 5, and the price to $465000
UPDATE cars SET
    condition = 5, 
    price = 465000
    WHERE id = 14
        AND brand = "Aston Martin" ;

-- Set the condition to 1 and price to $10000 where the car's brand is Porsche and sold is false
UPDATE cars SET
    condition = 1,
    price = 10000
    WHERE brand = "Porsche"
        AND sold is false ;

-- Delete 

-- Delete from the cars table, any record where condition is 0
DELETE FROM cars 
    WHERE condition = 0 ;

-- Delete all records from the database that has already been sold already
DELETE FROM cars
    WHERE sold = true ;

    



