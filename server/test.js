const db = require('better-sqlite3')('project.db');
db.pragma('journal_mode = WAL');

db.exec(`INSERT INTO Friend (user1_id, user2_id)
        VALUES ('1', '2')`);
