import { int, mysqlEnum, mysqlTable, uniqueIndex, varchar, serial } from 'drizzle-orm/mysql-core';

export const countries = mysqlTable('countries', {
    id: serial("id").primaryKey(),
    name: varchar('name', { length: 256 }),
}, (countries) => ({
    nameIndex: uniqueIndex('name_idx').on(countries.name),
}));

export const cities = mysqlTable('cities', {
    id: serial("id").primaryKey(),
    name: varchar('name', { length: 256 }),
    countryId: int('country_id').references(() => countries.id),
    popularity: mysqlEnum('popularity', ['unknown', 'known', 'popular']),
});