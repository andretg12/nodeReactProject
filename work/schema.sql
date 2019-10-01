
-- -----------------------------------------------------
-- Schema ecommerce
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `ecommerce` ;

-- -----------------------------------------------------
-- Schema ecommerce
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ecommerce` DEFAULT CHARACTER SET utf8 ;
USE `ecommerce` ;

-- -----------------------------------------------------
-- Table `ecommerce`.`products`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `products` ;

CREATE TABLE `products` (
  `product_id` INT NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(255) NOT NULL,
  `product_description` TEXT NOT NULL,
  `product_img` VARCHAR(255) NOT NULL,
  `product_category` VARCHAR(45) NOT NULL,
  `product_stock` INT NOT NULL,
  PRIMARY KEY (`product_id`));
  
  INSERT INTO `products` (`product_name`, `product_description`, `product_img`, `product_category`, `product_stock`)
  VALUES 
  ("919 Shirt", "Cotton Shirt with an exclusive design from S.N.M","https://i.imgur.com/1UolmmD.png","Clothing", 10)
  ,("NC Baseball Cap", "Baseball cap with an exclusive S.N.M design celebrating North Carolina","https://i.imgur.com/XgQW8sZ.png","Clothing", 10)
  ,("Martin Commemorative Shirt","Exclusive design from S.N.M celebrating the TV show 'Martin'", "https://i.imgur.com/w6tCDHX.png","Clothing", 10)
  ,("American DJ Pro Event Table II Foldable Portable DJ Booth","Cool Table for events.","https://images-na.ssl-images-amazon.com/images/I/71s5FCjIkoL._SX425_.jpg","Equipment", 3)
  ,("Rockville ROCKFORCE 384 Light/Fog Controller","Professional Event lighting controller from Rockville","https://images-na.ssl-images-amazon.com/images/I/71%2Bc4Qvj1iL._SX679_.jpg","Equipment", 2)
  ,("JBL Powered 3-Way High Directivity Line Array","Array of JBL speakers for events","https://images-na.ssl-images-amazon.com/images/I/511XZRVO22L._SX425_.jpg","Equipment", 40)
  ,("VTX M22 Dual 12\" Professional Stage Monitor","Professional stage monitor.","https://www.springtree.net/image/cache/data/jm22-900x900.jpg","Equipment",20)
  ,("JBL VRX932LAP","12 in. Two-Way Powered Line Array Loudspeaker System","https://media.sweetwater.com/api/i/q-82__ha-5fe3891258096e1b__hmac-0868ec9def1e08118e35266cd8a5d1332a1521f5/images/items/750/VRX932LAP-large.jpg","Equpment",30)
  ,("JBL VRX918SP","18 in. High Power Powered Flying Subwoofer","https://media.sweetwater.com/api/i/q-82__ha-24b0e1ddb59c9bd9__hmac-7606b7c2d05588e6bd582e401edf36853a39d723/images/items/750/VRX918SP-large.jpg","Equipment",35)
  ,("VRX915M","15 in. Two-Way Stage Monitor","https://www.gearcity.ca/wp-content/uploads/2017/01/JBL-VRX915M-Front.jpg","Equipment",8)
  ,("USA vs. KOR", "Women's Football Match OCT 03 at 8pm","https://cdn.ussoccer.com/-/media/project/ussf/2019-stories/08/wntvkor-release/wntvkor-releasetn.ashx?h=1440&la=en-US&w=1440&rev=92e63463cc0d4a2aa5c93072ffccfc40&hash=2D838A470CDDB13D4FE3F17A0E6375B2","Ticket", 30)
  ,("Lucki at Spectrum Center", "Lucki Hip-Hop Show OCT 03 at 8pm","https://touring.apa-agency.com/wp-content/uploads/2018/05/lucki.jpg", "Ticket", 20);



-- -----------------------------------------------------
-- Table `ecommerce`.`contacts`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `contacts` ;

CREATE TABLE  `contacts` (
  `contact_id` INT NOT NULL AUTO_INCREMENT,	
  `contact_name` VARCHAR(128) NOT NULL,
  `contact_category` VARCHAR(128),
  `contact_email` VARCHAR(128) NOT NULL,
  `contact_message` VARCHAR(255) NOT NULL,
  `contact_date` DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`contact_id`));
  INSERT INTO `contacts` (`contact_name`, `contact_email`,`contact_category`, `contact_message`)
  VALUES 
  ("Andre Torrealba", "andre.torrealba@icloud.com","Equipment", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium qui")
  ,("Jony Giler", "jonathangiler@hotmail.com","Clothing", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium qui")
  ,("Rafa Botello", "rafaelbotellov@outlook.es","Tickets", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu")
  ,("Lucy Yang", "ly.yang005@gmail.com","Equipment", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu")
  ,("Braxton Jackson", "bcjackson95@gmail.com","Question", "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see")
  ,("Reginald Johnson Jr.", "reggiejohnson1997@gmail.com","Question", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta");
  
  



-- -----------------------------------------------------
-- Table `ecommerce`.`price`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `price` ;

CREATE TABLE  `price` (
	`id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `price` DECIMAL(8,2) NOT NULL,
  `region` VARCHAR(45) NULL,
  `start_date` DATETIME NOT NULL DEFAULT NOW(),
  `end_date` DATETIME NULL,
  `coupons` VARCHAR(255) NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `product_id`
    FOREIGN KEY (`product_id`)
    REFERENCES ecommerce.products (`product_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
INSERT INTO `price` (`price`,`product_id`, `region`)
VALUES
(30.00,1, "Continental US")
,(19.99, 2, "Continental US")
,(29.99,3,"Continental US")
,(389.99,4,"Continental US")
,(9995.95,5,"Continental US")
,(55775.99,6,"Continental US")
,(3500.99,7,"Continental US")
,(2699.99,8,"Continental US")
,(1999.99,9,"Continental US")
,(1699.99,10,"Continental US")
,(33.00,11,"Continental US")
,(10.99,12,"Continental US");

-- -----------------------------------------------------
-- Table `ecommerce`.`customers`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `customers` ;

CREATE TABLE  `customers` (
  `customer_id` INT NOT NULL AUTO_INCREMENT,
  `customer_fname` VARCHAR(45) NULL,
  `customer_lname` VARCHAR(45) NULL,
  `customer_address` VARCHAR(45) NULL,
  PRIMARY KEY (`customer_id`));


-- -----------------------------------------------------
-- Table `ecommerce`.`cart`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cart` ;

CREATE TABLE  `cart` (
  `cart_id` INT NOT NULL AUTO_INCREMENT,
  `customer_id` INT NOT NULL,
  `date_placed` DATETIME NOT NULL,
  PRIMARY KEY (`cart_id`),
  CONSTRAINT `customer_id`
    FOREIGN KEY (`customer_id`)
    REFERENCES `customers` (`customer_id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE);

-- -----------------------------------------------------
-- Table `ecommerce`.`cart_detail`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cart_detail` ;

CREATE TABLE `cart_detail` (
  `cartDetail_id` INT NOT NULL AUTO_INCREMENT,
  `cart_id` INT NULL,
  `product_id` VARCHAR(45) NULL,
  `product_category` VARCHAR(45) NULL,
  `quantity` VARCHAR(45) NULL,
  `date_added` INT NULL,
  PRIMARY KEY (`cartDetail_id`),
  FOREIGN KEY(cart_id)
  REFERENCES `cart`(`cart_id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE);


