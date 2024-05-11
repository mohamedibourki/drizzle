import { mysqlTable, int, text, timestamp, date, decimal } from 'drizzle-orm/mysql-core';

export const cart = mysqlTable('cart', {
    id: int('id').primaryKey(),
    customerId: int('customerId'),
    name: text('name'),
});

export const cartItem = mysqlTable("cart_item", {
    cartId: int("cartId"),
    productId: int("productId"),
    itemQty: int("itemQty"),
    lastUpdated: timestamp("lastUpdated")
})

export const category = mysqlTable("category", {
    id: int("id").primaryKey(),
    name: text("name"),
    description: text('description')
})

export const customer = mysqlTable('customer', {
    id: int('id').primaryKey(),
    name: text('name'),
    password: text('password'),
    lastUpdated: timestamp('lastUpdated'),
    registrationDate: date('registrationDate'),
});

export const product = mysqlTable("product", {
    id: int("id").primaryKey(),
    name: text("name"),
    description: text("description"),
    price: decimal("price"),
    stockQty: int("stockQty"),
    lastUpdated: timestamp("lastUpdated"),
    categoryId: int("categoryId")
})