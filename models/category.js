module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      nom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Category;
  };
  
//if i haved create the db in sql i implenment i like this : 
//   -- Create the Categories table
// CREATE TABLE Categories (
//     CategoryID INT PRIMARY KEY,
//     CategoryName NVARCHAR(50) NOT NULL
// );

// -- Insert categories
// INSERT INTO Categories (CategoryID, CategoryName) VALUES
//     (1, 'Fruits'),
//     (2, 'Vegetables'),
//     (3, 'Household Products'),
//     (4, 'Pastries'),
//     (5, 'Meat'),
//     (6, 'Fish');

// -- Create the Products table
// CREATE TABLE Products (
//     ProductID INT PRIMARY KEY,
//     ProductName NVARCHAR(100) NOT NULL,
//     CategoryID INT,
//     Price DECIMAL(10, 2),
//     FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID)
// );

// -- Insert products
// INSERT INTO Products (ProductID, ProductName, CategoryID, Price) VALUES
//     (1, 'Apple', 1, 1.50),
//     (2, 'Banana', 1, 1.20),
//     (3, 'Orange', 1, 1.80),
//     (4, 'Carrot', 2, 0.80),
//     (5, 'Tomato', 2, 1.00),
//     (6, 'Cucumber', 2, 1.20),
//     (7, 'Detergent', 3, 5.99),
//     (8, 'All-Purpose Cleaner', 3, 3.50),
//     (9, 'Dish Soap', 3, 2.99),
//     (10, 'Croissant', 4, 2.50),
//     (11, 'Chocolate Eclair', 4, 3.00),
//     (12, 'Apple Pie', 4, 4.50),
//     (13, 'Chicken', 5, 8.99),
//     (14, 'Beef Steak', 5, 12.50),
//     (15, 'Lamb Chops', 5, 15.99),
//     (16, 'Salmon', 6, 12.99),
//     (17, 'Shrimp', 6, 14.50),
//     (18, 'Canned Tuna', 6, 5.99),
//     (19, 'Mango', 1, 2.50),
//     (20, 'Pineapple', 1, 3.00),
//     (21, 'Pear', 1, 1.75),
//     (22, 'Broccoli', 2, 1.25),
//     (23, 'Red Bell Pepper', 2, 1.50),
//     (24, 'Eggplant', 2, 2.00),
//     (25, 'Laundry Detergent', 3, 8.99),
//     (26, 'Window Cleaner', 3, 4.50),
//     (27, 'All-Purpose Disinfectant', 3, 6.99),
//     (28, 'Chocolate Bread', 4, 2.75),
//     (29, 'Lemon Tart', 4, 4.75),
//     (30, 'Vanilla Eclair', 4, 3.50),
//     (31, 'Pork Chops', 5, 10.99),
//     (32, 'Filet Mignon', 5, 18.50),
//     (33, 'Salmon Steak', 5, 15.99),
//     (34, 'Rainbow Trout', 6, 11.99),
//     (35, 'Canned Sardines', 6, 3.99),
//     (36, 'Cod', 6, 14.99);
