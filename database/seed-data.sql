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

INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (1, "Ahmet", "Akinsql", "ahmet@akinsql.com", ("dgkojngıjwepjfpıfjpjfqewpfqew"), 224), 1, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (2, "Joe", "Bloggs","joebloggs@gmail.com", ("ndsknsdflknsdfklnfkln"), 224), 2, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (3, "Jim", "Bloggs" , "jimbloggs@yahoo.com", ("jdsnsjdnfodsn"), 224), 2, "2020-11-20 12:00:00");


INSERT INTO users (user_id, username, email, password, created_at)
VALUES (1, "Erdem Ayhan",  "ayhanerdem510@gmail.com", "sdnonoıwekrpkbplövsdpnoıhep","2023-12-16 12:00:00");
INSERT INTO users (user_id, username, email, password, created_at)
VALUES (2, "Hazan Serifli",  "hazanserifli@gmail.com", "sdnonoıwekrp21332pnoıhep","2023-12-16 12:00:00");
INSERT INTO users (user_id, username, email, password, created_at)
VALUES (3, "Faruk Sertbay",  "faruktsertbay@gmail.com", "sdnonoıwekr743lövsdpnoıhep","2023-12-16 12:00:00");
INSERT INTO users (user_id, username, email, password, created_at)
VALUES (4, "Ahmet Akinsel",  "ahmet@akinsql.com", "sdnonoıwekrpkb11sdpnoıhep","2023-12-16 12:00:00");
INSERT INTO users (user_id, username, email, password, created_at)
VALUES (5, "Muhammed Rajab",  "rajabM@gmail.com", "sdnonoıwe22lövsdpnoıhep","2023-12-16 12:00:00");


INSERT INTO houses (house_id, house_name, location, property_type, no_of_bedrooms, no_of_bathrooms)
VALUES (1, "House 1", "Girne", "Flat", 2, 1);
INSERT INTO houses (house_id, house_name, location, property_type, no_of_bedrooms, no_of_bathrooms)
VALUES (2, "House 2", "Magusa", "Detached", 3, 2);
INSERT INTO houses (house_id, house_name, location, property_type, no_of_bedrooms, no_of_bathrooms)
VALUES (3, "House 3", "Iskele", "Semi-Detached", 4, 3);
INSERT INTO houses (house_id, house_name, location, property_type, no_of_bedrooms, no_of_bathrooms)
VALUES (4, "House 4", "Güzelyurt", "Studio", 5, 4);
INSERT INTO houses (house_id, house_name, location, property_type, no_of_bedrooms, no_of_bathrooms)
VALUES (5, "House 5", "Lefkoşa", "Penthouse", 6, 5);

/*
User type istermiyiz ? 
Neden xx fresh houses and users çıkmadı? (sadece migration ve user types çıktı)
Passwordü nasıl hashleyeceğiz?
house name silinsin mi ? 
*/