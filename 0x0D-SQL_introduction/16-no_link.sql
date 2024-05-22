-- Listing all records of the table second_table of the database hbtn_0c_0.
-- List rows with a name value.
-- List by descending score & display the score and the name (in this order).
SELECT score, name FROM second_table WHERE name IS NOT NULL ORDER BY score DESC;
