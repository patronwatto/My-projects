import { PGlite } from '@electric-sql/PGlite'
import fs from 'fs'

( async () => {
    const db = new PGlite()
    await db.exec(`
        CREATE TABLE IF NOT EXISTS cars (
        id  SERIAL PRIMARY KEY,
        brand TEXT,
        model TEXT,
        year INTEGER,
        price INTEGER,
        color TEXT,
        condition INTEGER,
        sold BOOLEAN
        );
        INSERT INTO cars (brand, model, year, price, color, condition, sold) VALUES
        ('Ford', 'Mustang', 1965, 45000, 'white', 4, false),
        ('Chevrolet', 'Camaro', 1970, 48000, 'red', 2, false),
        ('Dodge', 'Charger', 1969, 58000, 'black', 4, true),
        ('Porsche', '911', 1985, 85000, 'silver', 5, false),
        ('Jaguar', 'E-Type', 1967, 56000, 'green', 2, true),
        ('Jaguar', 'S-Type', 1963, 100000, 'dark green', 3, true),
        ('Jaguar', 'X-Type', 2001, 10000, 'black', 3, true),
        ('BMW', 'M3', 1990, 35000, 'green-yellow', 1, true),
        ('Ferrari', 'F355', 1997, 150000, 'red', 5, false),
        ('Ford', 'Mustang', 1967, 15000, 'dark blue', 0, false),
        ('Aston Martin', 'DB5', 1964, 595000, 'silver', 5, false),
        ('Aston Martin', 'DB4', 1960, 465000, 'light green', 5, false),
        ('Aston Martin', 'DB5', 1965, 99000, 'red', 2, false),
        ('Toyota', 'Supra', 1994, 68000, 'black', 4, true),
        ('Nissan', 'Skyline GT-R', 1999, 95000, 'blue', 5, false),
        ('Volkswagen', 'Beetle', 1963, 25000, 'yellow', 3, true),
        ('Lamborghini', 'Countach', 1989, 320000, 'red', 5, false),
        ('Rolls-Royce', 'Silver Shadow', 1975, 55000, 'white', 2, true),
        ('Bentley', 'Continental GT', 2005, 85000, 'black', 5, false),
        ('Masserati', 'GranTurismo', 2010, 75000, 'blue', 4, true);    
        `);

        // Load the SQL file
        const query = fs.readFileSync('query.sql', 'utf8');

        // Executing simple queries for sections 1 - 3
        const response = await db.query(query);

        console.clear();
        console.table(response.rows);
})();
