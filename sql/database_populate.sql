USE social_app;

-- Inserindo usuários na tabela users
INSERT INTO users (name, nick, email, password) VALUES
('Alice Silva', 'alice', 'alice@example.com', 'senha123'),
('Bruno Costa', 'bruno', 'bruno@example.com', 'senha123'),
('Carla Oliveira', 'carla', 'carla@example.com', 'senha123'),
('Daniela Santos', 'daniela', 'daniela@example.com', 'senha123'),
('Eduardo Lima', 'eduardo', 'eduardo@example.com', 'senha123'),
('Fernanda Pereira', 'fernanda', 'fernanda@example.com', 'senha123'),
('Gabriel Almeida', 'gabriel', 'gabriel@example.com', 'senha123'),
('Helena Rocha', 'helena', 'helena@example.com', 'senha123'),
('Igor Martins', 'igor', 'igor@example.com', 'senha123'),
('Juliana Ferreira', 'juliana', 'juliana@example.com', 'senha123'),
('Kleber Mendes', 'kleber', 'kleber@example.com', 'senha123'),
('Larissa Nascimento', 'larissa', 'larissa@example.com', 'senha123'),
('Marcos Vinicius', 'marcos', 'marcos@example.com', 'senha123'),
('Natália Souza', 'natalia', 'natalia@example.com', 'senha123'),
('Otávio Pires', 'otavio', 'otavio@example.com', 'senha123'),
('Patrícia Lima', 'patricia', 'patricia@example.com', 'senha123'),
('Quiteria Dias', 'quiteria', 'quiteria@example.com', 'senha123'),
('Rafael Gomes', 'rafael', 'rafael@example.com', 'senha123'),
('Sofia Martins', 'sofia', 'sofia@example.com', 'senha123'),
('Tiago Ribeiro', 'tiago', 'tiago@example.com', 'senha123');


-- Inserindo seguidores na tabela followers
INSERT INTO followers (id_user, id_follower) VALUES
(1, 2), (1, 3), (1, 4),  -- Alice segue Bruno, Carla, Daniela
(2, 1), (2, 3),          -- Bruno segue Alice, Carla
(3, 1), (3, 2), (3, 4),  -- Carla segue Alice, Bruno, Daniela
(4, 5),                  -- Daniela segue Eduardo
(5, 1), (5, 6),         -- Eduardo segue Alice, Fernanda
(6, 2), (6, 3),         -- Fernanda segue Bruno, Carla
(7, 1), (7, 8),         -- Gabriel segue Alice, Helena
(8, 9),                  -- Helena segue Igor
(9, 10),                 -- Igor segue Juliana
(10, 11),                -- Juliana segue Kleber
(11, 12),                -- Kleber segue Larissa
(12, 13),                -- Larissa segue Marcos
(13, 14),                -- Marcos segue Natália
(14, 15),                -- Natália segue Otávio
(15, 16),                -- Otávio segue Patrícia
(16, 17),                -- Patrícia segue Quitéria
(17, 18),                -- Quitéria segue Rafael
(18, 19),                -- Rafael segue Sofia
(19, 20);                -- Sofia segue Tiago

INSERT INTO followers (id_user, id_follower) VALUES
(21, 10),                 -- Igor segue Juliana
(21, 11),                -- Juliana segue Kleber
(21, 12),                -- Kleber segue Larissa
(21, 13),                -- Larissa segue Marcos
(21, 14),                -- Marcos segue Natália
(21, 15),                -- Natália segue Otávio
(21, 16),                -- Otávio segue Patrícia
(21, 17),                -- Patrícia segue Quitéria
(21, 18),                -- Quitéria segue Rafael
(21, 19),                -- Rafael segue Sofia
(21, 20);                -- Sofia segue Tiago


INSERT INTO posts (title, body, author_id) VALUES
('Meu primeiro post', 'Este é o meu primeiro post no blog!', 1),
('Aprendendo SQL', 'Hoje eu aprendi sobre SQL e como usar bancos de dados.', 2),
('Dicas de programação', 'Aqui estão algumas dicas para programadores iniciantes.', 3),
('Viagem dos sonhos', 'Acabei de voltar de uma viagem incrível!', 4),
('Receitas fáceis', 'Vou compartilhar algumas receitas fáceis que eu adoro.', 5),
('Minhas músicas favoritas', 'Aqui estão algumas das minhas músicas favoritas.', 6),
('Como fazer amigos', 'Dicas sobre como fazer amigos e socializar.', 7),
('O que eu aprendi este mês', 'Reflexões sobre o que aprendi este mês.', 8),
('Desafios da vida', 'Falar sobre os desafios que enfrentei.', 9),
('Livros que eu recomendo', 'Aqui estão alguns livros que eu recomendo para leitura.', 10),
('Tecnologia e futuro', 'Reflexões sobre como a tecnologia está moldando nosso futuro.', 11),
('A importância da saúde mental', 'Falar sobre a importância de cuidar da saúde mental.', 12),
('Meus filmes favoritos', 'Uma lista dos meus filmes favoritos de todos os tempos.', 13),
('Como manter a motivação', 'Dicas sobre como manter a motivação em tempos difíceis.', 14),
('Aprendendo uma nova língua', 'Minha experiência aprendendo uma nova língua.', 15),
('O que eu faço para relaxar', 'Compartilhando algumas atividades que me ajudam a relaxar.', 16),
('Histórias de viagem', 'Contando algumas histórias engraçadas de minhas viagens.', 17),
('Reflexões sobre a vida', 'Pensamentos sobre a vida e suas complexidades.', 18),
('Dicas de produtividade', 'Como ser mais produtivo no dia a dia.', 19),
('O que eu aprendi com meus erros', 'Reflexões sobre os erros que cometi e o que aprendi com eles.', 20);
