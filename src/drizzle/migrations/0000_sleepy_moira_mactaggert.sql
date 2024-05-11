CREATE TABLE `cart` (
	`id` int NOT NULL,
	`customerId` int,
	`name` text,
	CONSTRAINT `cart_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `cart_item` (
	`cartId` int,
	`productId` int,
	`itemQty` int,
	`lastUpdated` timestamp
);
--> statement-breakpoint
CREATE TABLE `category` (
	`id` int NOT NULL,
	`name` text,
	`description` text,
	CONSTRAINT `category_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `customer` (
	`id` int NOT NULL,
	`name` text,
	`password` text,
	`lastUpdated` timestamp,
	`registrationDate` date,
	CONSTRAINT `customer_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `product` (
	`id` int NOT NULL,
	`name` text,
	`description` text,
	`price` decimal,
	`stockQty` int,
	`lastUpdated` timestamp,
	`categoryId` int,
	CONSTRAINT `product_id` PRIMARY KEY(`id`)
);
