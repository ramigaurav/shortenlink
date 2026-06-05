const { Client } = require('pg');

const connectionString =
  'postgresql://neondb_owner:npg_yHmpZl7j6hFL@ep-small-sunset-abze312s-pooler.eu-west-2.aws.neon.tech/neondb?channel_binding=require&sslmode=require';

const client = new Client({
  connectionString,
});

const data = [
  {
    userId: 'user_3Ea9CJxKEfjIAyVhJj4ejBjNVTj',
    originalUrl: 'https://www.github.com/user/repository',
    shortCode: 'gh7x2k',
    clicks: 42,
    createdAt: '2026-06-01 10:30:00',
  },
  {
    userId: 'user_3Ea9CJxKEfjIAyVhJj4ejBjNVTj',
    originalUrl: 'https://docs.nextjs.org/docs/getting-started',
    shortCode: 'nx5m9p',
    clicks: 18,
    createdAt: '2026-06-01 11:15:00',
  },
  {
    userId: 'user_3Ea9CJxKEfjIAyVhJj4ejBjNVTj',
    originalUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    shortCode: 'yt3k8b',
    clicks: 156,
    createdAt: '2026-05-30 14:20:00',
  },
  {
    userId: 'user_3Ea9CJxKEfjIAyVhJj4ejBjNVTj',
    originalUrl: 'https://www.twitter.com/username/status/1234567890',
    shortCode: 'tw2x5q',
    clicks: 89,
    createdAt: '2026-05-28 09:45:00',
  },
  {
    userId: 'user_3Ea9CJxKEfjIAyVhJj4ejBjNVTj',
    originalUrl: 'https://www.notion.so/workspace/page-with-long-uuid',
    shortCode: 'nt7f1w',
    clicks: 23,
    createdAt: '2026-06-02 08:00:00',
  },
  {
    userId: 'user_3Ea9CJxKEfjIAyVhJj4ejBjNVTj',
    originalUrl: 'https://www.linkedin.com/posts/user-id-1234567890',
    shortCode: 'ln4r9d',
    clicks: 67,
    createdAt: '2026-06-02 16:30:00',
  },
  {
    userId: 'user_3Ea9CJxKEfjIAyVhJj4ejBjNVTj',
    originalUrl: 'https://www.medium.com/@author/article-title-slug-here',
    shortCode: 'md8h2v',
    clicks: 31,
    createdAt: '2026-06-01 13:20:00',
  },
  {
    userId: 'user_3Ea9CJxKEfjIAyVhJj4ejBjNVTj',
    originalUrl: 'https://www.figma.com/file/design-uuid/Project-Name',
    shortCode: 'fg6c4j',
    clicks: 12,
    createdAt: '2026-06-03 10:10:00',
  },
  {
    userId: 'user_3Ea9CJxKEfjIAyVhJj4ejBjNVTj',
    originalUrl: 'https://www.dribbble.com/shots/1234567-design-showcase',
    shortCode: 'dr5n7s',
    clicks: 45,
    createdAt: '2026-05-29 15:45:00',
  },
  {
    userId: 'user_3Ea9CJxKEfjIAyVhJj4ejBjNVTj',
    originalUrl: 'https://www.producthunt.com/posts/product-name-with-slug',
    shortCode: 'ph9w3e',
    clicks: 78,
    createdAt: '2026-05-31 12:00:00',
  },
];

async function insertData() {
  try {
    await client.connect();
    console.log('Connected to Neon database');

    const query = `
      INSERT INTO shortened_links (user_id, original_url, short_code, clicks, created_at)
      VALUES ($1, $2, $3, $4, $5)
    `;

    for (const item of data) {
      await client.query(query, [
        item.userId,
        item.originalUrl,
        item.shortCode,
        item.clicks,
        item.createdAt,
      ]);
    }

    console.log(
      `✓ Successfully inserted ${data.length} links into the database`
    );
  } catch (err) {
    console.error('Error inserting data:', err.message);
  } finally {
    await client.end();
  }
}

insertData();
