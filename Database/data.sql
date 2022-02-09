USE DASHBOARD;

INSERT INTO Country(CountryName,CountryCode)
VALUES('Sri Lanka','LK'),
('Russia','RU'),
('United States','US'),
('United Kingdom','GB');

INSERT INTO Role(role_id,role_name) VALUES 
('4c141265-cd5e-3dbe-950c-09022d09e040','SUPER_ADMIN'),
('bb40baa1-7477-3016-a0d6-ad69b33cdc5b','ADMIN'),
('cbf7e9d9-068f-317b-80a5-2c229a01ff39','EDITOR'),
('f15ebfad-19b5-3765-8240-d9d0407d7f45','VIEWERS');

INSERT INTO user (user_id,email,password,first_name,last_name,created_at,token,role_id) VALUES 
('3fbfbecc-2960-322b-9d04-dd54bc860387','admin@mou.com','$2a$10$iMx8KQrDguJrny/I1Zd2puzYdIZr6Sh3MUi.qz27Qy7qZJaMqrzNi','Admin','Mou','2021-06-20 09:00:19','30b47a91c865cc6db2187bd0b1d593d6310335a1078547e3b1849e5c83901ce7','bb40baa1-7477-3016-a0d6-ad69b33cdc5b'),
('587642d4-f256-328d-b30d-b424ef00e7f3','editor@mou.com','$2a$10$iMx8KQrDguJrny/I1Zd2puzYdIZr6Sh3MUi.qz27Qy7qZJaMqrzNi','Editor','Mou','2021-06-20 06:42:09','c127988cb6ae70e257e110808356c0e8cd760a5b4d7ebf9de78e543c8e93b074','cbf7e9d9-068f-317b-80a5-2c229a01ff39'),
('ae9c29e3-5951-3884-95d4-7940e98ce218', 'superadmin@mou.com', '$2a$10$iMx8KQrDguJrny/I1Zd2puzYdIZr6Sh3MUi.qz27Qy7qZJaMqrzNi', 'Super Admin', 'Mou', '2021-06-20 19:52:18', '3a49ec6721aaa8584fa9d8dd1199f71052852e7b0be6e4d6eb8741e3deba23b8', '4c141265-cd5e-3dbe-950c-09022d09e040'),
('c355b5bd-7d54-3c10-8f98-be17ea3e1789', 'viewer@mou.com', '$2a$10$iMx8KQrDguJrny/I1Zd2puzYdIZr6Sh3MUi.qz27Qy7qZJaMqrzNi', 'Viewer', 'Mou', '2021-06-20 21:42:38', '206dc79d64665650def02d8a4faf95c923cdc92f0fd9e51c4863e39b6d690286', 'f15ebfad-19b5-3765-8240-d9d0407d7f45'),
('c750dcc2-e489-3722-9441-982549ffb62c', 'senet@mou.com', 'b02cb36b1be47515cc199870e3bbc51caf183d35', 'Senet', 'Mou', '2021-06-20 10:08:19', '', 'bb40baa1-7477-3016-a0d6-ad69b33cdc5b'),
('c950dcc2-e489-3722-9441-982549ffb62c', 'efac@mou.com', '$2a$10$iMx8KQrDguJrny/I1Zd2puzYdIZr6Sh3MUi.qz27Qy7qZJaMqrzNi', 'Efac', 'Mou', '2021-06-20 10:08:19', '', 'bb40baa1-7477-3016-a0d6-ad69b33cdc5b');

INSERT INTO Faculty(faculty_id,faculty_name,email,phone_number)
VALUES
('42685c28-c703-11eb-b8bc-0242ac130003', 'International Relations', '', ''),
('42685b60-c703-11eb-b8bc-0242ac130003', 'Faculty of Agriculture', 'aragri@pdn.ac.lk', '+94 81 238 8041'),
('42685dcc-c703-11eb-b8bc-0242ac130003', 'Faculty of Applied Health Sciences', 'deanahs@pdn.ac.lk', '+94-81-2065796'),
('42685eb2-c703-11eb-b8bc-0242ac130003', 'Faculty of Arts', 'deanarts@pdn.ac.lk', '081-2388345'),
('42686532-c703-11eb-b8bc-0242ac130003', 'Faculty of Management', '', ''),
('42686272-c703-11eb-b8bc-0242ac130003', 'Faculty of Dental Sciences', '', '081-2397504'),
('42686330-c703-11eb-b8bc-0242ac130003', 'Faculty of Engineering', '', '+94812393300'),
('426863e4-c703-11eb-b8bc-0242ac130003', 'Faculty of Medicine', '', '+94812396207'),
('42686498-c703-11eb-b8bc-0242ac130003', 'Faculty of Science', 'arsci@pdn.ac.lk', '+94 81 239 4404'),
('42686542-c703-11eb-b8bc-0242ac130003', 'Faculty of Veterinary Science', 'deanvet@pdn.ac.lk', '+94812395707'),
('426865f6-c703-11eb-b8bc-0242ac130003', 'Postgraduate Institute', '', ''),
('426866aa-c703-11eb-b8bc-0242ac130003', 'PGIHS', '', ''),
('42686902-c703-11eb-b8bc-0242ac130003', 'PGIA', '', ''),
('42686a4c-c703-11eb-b8bc-0242ac130003', 'CGU', '', ''),
('42686b14-c703-11eb-b8bc-0242ac130003', 'Senate', '', ''),
('4268bb00-c703-11eb-b8bc-0242ac130003', 'Not available', '', '');