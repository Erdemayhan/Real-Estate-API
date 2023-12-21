/* Initialize DB with some seed data */
USE `real_estate_api_db`;

-- DONT MODIFY THIS MIGRATION
-- it is used by Xest local development pipeline
INSERT INTO `migrations` (
  name,
  run_on
) VALUES (
  "/20211107064324-seed-data",
  "20211107064324"
);

-- YOU CAN MODIFY BELOW THIS LINE
INSERT INTO user_types (user_type_id, user_type)
VALUES (1, "admin");
INSERT INTO user_types (user_type_id, user_type)
VALUES (2, "user");
INSERT INTO user_types (user_type_id, user_type)
VALUES (3, "agents");

-- Inserting multiple rows into property_statuses
INSERT INTO property_statuses (property_status_id, property_status)
VALUES 
(1, "For Sale"),
(2, "For rent"),
(3, "Off the market"),
(4, "NEW!");

-- Inserting multiple rows into property_types
INSERT INTO property_types (property_type_id, property_type)
VALUES 
(1, "apartment"),
(2, "house"),
(3, "villa"),
(4, "land"),
(5, "office"),
(6, "semi-detached house"),
(7, "penthouse"),
(8, "dormitory");

-- Inserting rows into users (Assuming user_id is auto-incremented and removed it from the statements)
INSERT INTO users (user_id, username, email, password, user_type_id, created_at)
VALUES 
(1, "Erdem Ayhan", "ayhanerdem510@gmail.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 256), 1, "2023-12-16 12:00:00"),
(2, "Hazan Serifli", "hazanserifli@gmail.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 256), 3, "2023-12-16 12:00:00"),
(3, "Faruk Sertbay", "faruktsertbay@gmail.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 256), 3, "2023-12-16 12:00:00"),
(4, "Ahmet Akinsel", "ahmet@akinsql.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 256), 2, "2023-12-16 12:00:00"),
(5, "Muhammed Rajab", "rajabM@gmail.com", SHA2(CONCAT("password","SUPER_DUPER_SECRET"), 256), 2, "2023-12-16 12:00:00");


-- Inserting rows into properties (Assuming property_id is auto-incremented and removed it from the statements)
INSERT INTO properties (property_id, user_id, property_type_id, property_status_id, description, location, size_sq_meters, no_of_bedrooms, no_of_bathrooms, no_of_rooms, price)
VALUES 
(1, 1, 2, 3, "A spacious villa in the suburbs", "Famagusta", 200.00, 4, 2, 6, 500000),
(2, 2, 3, 4, "A cozy cottage in the countryside", "Nicosia", 150.00, 3, 2, 5, 300000),
(3, 3, 4, 4, "A modern loft in the city center", "Kyrenia", 120.00, 2, 1, 3, 200000),
(4, 4, 5, 1, "A luxurious penthouse with a city view", "Omorfou", 250.00, 4, 3, 7, 1000000),
(5, 5, 1, 3, "A charming studio in the city center", "Limassol", 80.00, 1, 1, 2, 15000000)