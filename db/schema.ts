import {
  pgTable,
  text,
  serial,
  timestamp,
  integer,
  index,
} from 'drizzle-orm/pg-core';

export const shortenedLinks = pgTable(
  'shortened_links',
  {
    id: serial('id').primaryKey(),
    userId: text('user_id').notNull(),
    originalUrl: text('original_url').notNull(),
    shortCode: text('short_code').notNull().unique(),
    clicks: integer('clicks').notNull().default(0),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (table) => ({
    userIdIdx: index('user_id_idx').on(table.userId),
    userCreatedIdx: index('user_created_idx').on(table.userId, table.createdAt),
  })
);
