BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS `Users` (
  `id` integer PRIMARY KEY AUTOINCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
);


/*
INSERT INTO `Users` (
  `username`,
  `password`,
  `email`,
  `created_at`,
  `updated_at`
) VALUES
('admin', 'admin', 'toto@mail.com', datetime('now'), datetime('now'));
*/

COMMIT;
