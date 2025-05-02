DROP DATABASE IF EXISTS social_app; 
CREATE DATABASE social_app; 
USE social_app;

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    nick VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(150) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE followers(
    id_user INT NOT NULL,
    id_follower INT NOT NULL, 
    FOREIGN KEY(id_user) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY(id_follower) REFERENCES users(id) ON DELETE CASCADE,
    PRIMARY KEY(id_user, id_follower)
);

CREATE TABLE posts(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    body VARCHAR(300) NOT NULL,

    author_id INT NOT NULL,
    FOREIGN KEY(author_id) 
    REFERENCES users(id)
    ON DELETE CASCADE,

    likes INT DEFAULT 0,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE likes (
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    likeddAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(user_id, post_id),
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY(post_id) REFERENCES posts(id) ON DELETE CASCADE
);

SELECT 
    id, 
    name, 
    nick,
    id = 21,
    (SELECT COUNT(*) FROM followers WHERE id_user = 1 AND id_follower = 21) as segue,
    (SELECT COUNT(*) FROM followers WHERE id_user = 1) AS total_seguidores,
    (SELECT COUNT(*) FROM followers WHERE id_follower = 1) AS total_seguindo
FROM 
    users
WHERE 
    id = 1;

SELECT COUNT(*) AS segue FROM followers WHERE id_user = 1 AND id_follower = 21;

SELECT * FROM users;