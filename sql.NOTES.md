# Basic Introduction to a mySQL Database and query structures.


## Commands
- **USE** [db];
    - This command is used to let mysql know which database to have selected.

- **SELECT** [*] **FROM** [db];
    - This command is used to select either all columns or specific columns in a specified database.

- SELECT [*] FROM [db] **WHERE** [expression];
    - The **WHERE** clause can be added to the end of the selected database to specific what values have to be meet.

- SELECT [*] FROM [db] WHERE [expression] **ORDER BY** [db.column];


### SELECT Clause
- Syntax:

**SELECT**
    **DISTINCT** [db.parameterOne],
    [db.parameterTwo],
    [db.parameterThree+1] **AS** "Modified Value"
FROM  [db] 

- Notes:
    - When using the select clause, the order in which the parameters count and will be returned in the specified order.
    - Arithmetic Operations can be used in junction with the parameters.
    - Using the **AS** clause, it will return specific parameter's column header as what was specificed.
    - Using the **DISTINCT** clause will let sql know to not return any duplicates of the specified parameter.


### WHERE Clause 
- Syntax:

SELECT *
FROM [db]
**WHERE** [db.parameter] **IN** (value, value2, value3)

- Notes:   
    - The **WHERE** attribute helps you describe what the requirements must be for the data tobe returned.
    - Instead of using the **AND** or **OR** Operator; you could use the **IN** operator to describe what values must be in the [db].


### REGEX OPERATOR clause
- Syntax:

SELECT *
FROM [db]
WHERE [db.parameter]
**REGEXP** 'field$'

- Keys:

- ^ Beggining of field.
- $ End of field.
- | Logical OR.
- [abcde] any char between a-e.
- [a-z] any char betweem a-z.

## IS Null Clause
- Syntax:

SELECT *
FROM [db]
WHERE [db.parameter] **IS NULL**


- Notes:
- Returns all the specified parameters that are null.

## ORDER BY Clause

- Syntax:

SELECT * 
FROM [db]
**ORDER BY** [db.parameter] **ASC** | **DESC**

- Notes:
- Using this syntax you can sort the order in which order it is returned.
- **ONLY** in mysql, you can sort by any data even if not returned.

### Limit Clause

- Syntax:
SELECT * 
FROM [db]
**LIMIT** [offset,number]

- Notes:
- This clause limits the total amount of data returned.
- **offset** is used to let mysql know to skip the certain amount of values by group.

### JOIN Clause

- Syntax:
SELECT * 
FROM [db1] a
**JOIN** [parameter] b
    **ON** [a.id] = [b.id]

- Notes:
- This will join two tables and the specified location. 
- **A** and **B** attributes are used as aliases and does not ened to be specifed. Short hand syntax.

## JOINING mutliple databases accross sites
