drop database if exists bamazon_db;

create database bamazon_db;

use bamazon_db;

create table products (
    item_id int not null,
    product_name varchar (35) not null,
    department_name varchar (25) not null,
    price decimal (10,4) not null,
    stock_quantity int default 10,
    primary key (item_id)
);

insert into products (item_id,product_name,department_name,price,stock_quantity)
values (1, 'Computer Science Coffee Mug','Kitchen', 19.99, 27),
(2, 'Fire TV Stick','Electronics', 30.99, 34),
(3, 'Writing Computer Desk', 'Furniture', 59.99, 18),
(4, 'Portable Charger','Electronics', 32.99, 38),
(5, 'Food Dehydrator','Home & Kitchen', 37.99, 13),
(6, 'Google Mini','Electronics', 35.99, 25),
(7, 'Anti-Theft Backpack', 'Travel', 55.99, 22),
(8, 'First-Aid Kit ', 'Health & Household', 27.99, 54),
(9, 'Cold-brew Coffee Maker', 'Home and Kitchen', 21.99, 5),
(10, 'iPhone Screen Protector','Electronics', 6.99, 39);
