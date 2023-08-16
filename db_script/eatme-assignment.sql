-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Aug 16, 2023 at 12:47 AM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eatme-assignment`
--

-- --------------------------------------------------------

--
-- Table structure for table `Dishes`
--

CREATE TABLE `Dishes` (
  `dish_id` int(10) UNSIGNED NOT NULL,
  `resturent_id` int(10) UNSIGNED DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `rating` varchar(255) NOT NULL,
  `rate_count` int(10) UNSIGNED NOT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Dishes`
--

INSERT INTO `Dishes` (`dish_id`, `resturent_id`, `name`, `price`, `description`, `category`, `image`, `rating`, `rate_count`, `is_active`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 'Product 1', '20.2', 'This is the description for Product 1.', 'Chinese', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPn2zUylueZFtDOPLsrUoWkcf9LJL44haHbg&usqp=CAU', '100', 5, 1, '2023-08-13 08:25:32', '2023-08-13 08:25:32', NULL),
(2, 1, 'Product 2', '12.5', 'This is the description for Product 2.', 'Chinese', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRnbZEGD5_z5u1R_Oji_DDm7HtqNWGGShUxA&usqp=CAU', '120', 4, 1, '2023-08-13 08:25:35', '2023-08-13 08:25:35', NULL),
(3, 1, 'Product 3', '16.9', 'This is the description for Product 3.', 'Chinese', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUotFdbxG4yWhZV0vxU4HnxqRy6UUicp5ntg&usqp=CAU', '95', 2, 1, '2023-08-13 08:25:36', '2023-08-13 08:25:36', NULL),
(4, 1, 'Product 4', '25.8', 'This is the description for Product 4.', 'Chinese', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoLk18JM-y5CMA_kelGhVzWTt8erE4b809nQ&usqp=CAU', '12', 5, 1, '2023-08-13 08:25:36', '2023-08-13 08:25:36', NULL),
(5, 1, 'Product 5', '38.0', 'This is the description for Product 5.', 'Chinese', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPn2zUylueZFtDOPLsrUoWkcf9LJL44haHbg&usqp=CAU', '45', 3, 1, '2023-08-13 08:25:37', '2023-08-13 08:25:37', NULL),
(6, 1, 'Product 6', '24', 'This is the description for Product 6.', 'Chinese', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUotFdbxG4yWhZV0vxU4HnxqRy6UUicp5ntg&usqp=CAU', '68', 1, 1, '2023-08-13 08:25:37', '2023-08-13 08:25:37', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `OrderDishes`
--

CREATE TABLE `OrderDishes` (
  `order_dish_id` int(10) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED DEFAULT NULL,
  `dish_id` int(10) UNSIGNED DEFAULT NULL,
  `quantity` int(10) UNSIGNED NOT NULL,
  `price` float NOT NULL,
  `total` float NOT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `OrderDishes`
--

INSERT INTO `OrderDishes` (`order_dish_id`, `order_id`, `dish_id`, `quantity`, `price`, `total`, `is_active`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 4, 1, 10, 100, 1000, 1, '2023-08-16 00:06:04', '2023-08-16 00:06:04', NULL),
(2, 4, 2, 10, 120, 1200, 1, '2023-08-16 00:06:04', '2023-08-16 00:06:04', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Orders`
--

CREATE TABLE `Orders` (
  `order_id` int(10) UNSIGNED NOT NULL,
  `resturent_id` int(10) UNSIGNED DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `total` float NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Pending',
  `is_active` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Orders`
--

INSERT INTO `Orders` (`order_id`, `resturent_id`, `user_id`, `total`, `status`, `is_active`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, '5c3e6fe2-07f9-45ba-9142-7b6087bdefb1', 400, 'Pending', 1, '2023-08-13 08:25:23', '2023-08-13 08:25:23', NULL),
(2, 1, '5c3e6fe2-07f9-45ba-9142-7b6087bdefb1', 250, 'Pending', 1, '2023-08-13 08:25:45', '2023-08-13 08:25:45', NULL),
(3, 1, '5c3e6fe2-07f9-45ba-9142-7b6087bdefb1', 300, 'Pending', 1, '2023-08-13 08:26:15', '2023-08-13 08:26:15', NULL),
(4, 1, '4520a4ca-e974-4bbc-861d-fa292b3b2784', 320, 'Pending', 1, '2023-08-16 00:06:04', '2023-08-16 00:06:04', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Resturents`
--

CREATE TABLE `Resturents` (
  `resturent_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `cuisine` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `zip` varchar(255) NOT NULL,
  `phone_no` varchar(255) NOT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Resturents`
--

INSERT INTO `Resturents` (`resturent_id`, `name`, `cuisine`, `address`, `city`, `state`, `zip`, `phone_no`, `is_active`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Saman Resturent', 'Cheinense', 'Galler Fort, Galle', 'Galle', 'Galle Fort', '80000', '07735353535', 1, '2023-08-13 06:06:18', '2023-08-13 06:06:18', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Sessions`
--

CREATE TABLE `Sessions` (
  `session_id` varchar(255) NOT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `user_agent` varchar(255) DEFAULT NULL,
  `valid` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Sessions`
--

INSERT INTO `Sessions` (`session_id`, `user_id`, `user_agent`, `valid`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
('214a1b7d-e973-4a46-b524-291578baf36e', '4520a4ca-e974-4bbc-861d-fa292b3b2784', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36', 1, '2023-08-15 01:23:15', '2023-08-15 01:23:15', NULL),
('3431f57f-27c0-43d0-bdae-5981c9f65420', '5c3e6fe2-07f9-45ba-9142-7b6087bdefb1', 'PostmanRuntime/7.32.3', 1, '2023-08-13 06:03:32', '2023-08-13 06:03:32', NULL),
('4229634e-d16d-4336-b740-c841ba209f17', '4520a4ca-e974-4bbc-861d-fa292b3b2784', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36', 1, '2023-08-15 01:26:46', '2023-08-15 01:26:46', NULL),
('531be878-4b40-4f17-94dd-6ad6f44f800d', 'e59904b2-9a44-467b-8c44-77ebb5e92977', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36', 1, '2023-08-16 00:40:25', '2023-08-16 00:40:25', NULL),
('5b1acafc-9211-44af-aea7-1774cee95f1e', '854ce401-32c0-423f-a6fd-d8dc7335652e', 'PostmanRuntime/7.32.3', 1, '2023-08-16 00:24:17', '2023-08-16 00:24:17', NULL),
('5f0fd466-a18d-42a4-9507-05298859f0df', '4520a4ca-e974-4bbc-861d-fa292b3b2784', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36', 1, '2023-08-13 15:24:13', '2023-08-13 15:24:13', NULL),
('759e3c85-ee1a-49ac-8fff-ab14693791bb', '4520a4ca-e974-4bbc-861d-fa292b3b2784', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36', 1, '2023-08-13 15:25:28', '2023-08-13 15:25:28', NULL),
('7bf8f747-f69a-4591-ae7c-7bdc89db8d7b', 'd06b48e3-1f27-4c37-8e24-3db4ff704074', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36', 1, '2023-08-13 15:31:53', '2023-08-13 15:31:53', NULL),
('b8813bea-ebd4-4bcc-964c-75d2f45c8146', '4520a4ca-e974-4bbc-861d-fa292b3b2784', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36', 1, '2023-08-13 15:23:32', '2023-08-13 15:23:32', NULL),
('c636cd53-a2c6-4144-9961-d61584f0ee55', '5c3e6fe2-07f9-45ba-9142-7b6087bdefb1', 'PostmanRuntime/7.32.3', 1, '2023-08-13 10:30:28', '2023-08-13 10:30:28', NULL),
('dd101b24-c3f9-4c12-853e-1b33f5400feb', '5c3e6fe2-07f9-45ba-9142-7b6087bdefb1', 'PostmanRuntime/7.32.3', 1, '2023-08-13 15:35:37', '2023-08-13 15:35:37', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `user_id` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `user_type` varchar(255) NOT NULL DEFAULT 'Customer',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`user_id`, `first_name`, `last_name`, `email`, `password`, `is_active`, `user_type`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
('4520a4ca-e974-4bbc-861d-fa292b3b2784', 'Prasad', 'Lakshan', 'prasadlakshan9984@gmail.com', '', 1, 'Customer', '2023-08-13 15:23:32', '2023-08-13 15:23:32', NULL),
('5c3e6fe2-07f9-45ba-9142-7b6087bdefb1', 'Samantha ', 'Perera', 'www@gmail.com', '$2b$10$2zrF/feIspt2uSf9V/z47OdeawZtpryZePv8sDH1L.km1dwoFHoXC', 1, 'Customer', '2023-08-13 06:03:25', '2023-08-13 06:03:25', NULL),
('854ce401-32c0-423f-a6fd-d8dc7335652e', 'John', 'Doe', 'john@gmail.com', '$2b$10$fethmW2wuH6UYzbSZamZBOrEJ83.io5RZausA9tET2pu2nLoLXApu', 1, 'Customer', '2023-08-16 00:23:43', '2023-08-16 00:23:43', NULL),
('d06b48e3-1f27-4c37-8e24-3db4ff704074', 'Sportizza', 'Account', 'contact.sportizza@gmail.com', '', 1, 'Customer', '2023-08-13 15:31:53', '2023-08-13 15:31:53', NULL),
('e59904b2-9a44-467b-8c44-77ebb5e92977', 'Prasad', 'Lakshan', 'kpdplakshan@gmail.com', '', 1, 'Customer', '2023-08-16 00:40:25', '2023-08-16 00:40:25', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Dishes`
--
ALTER TABLE `Dishes`
  ADD PRIMARY KEY (`dish_id`),
  ADD KEY `resturent_id` (`resturent_id`);

--
-- Indexes for table `OrderDishes`
--
ALTER TABLE `OrderDishes`
  ADD PRIMARY KEY (`order_dish_id`),
  ADD UNIQUE KEY `OrderDishes_dish_id_order_id_unique` (`order_id`,`dish_id`),
  ADD KEY `dish_id` (`dish_id`);

--
-- Indexes for table `Orders`
--
ALTER TABLE `Orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `Resturents`
--
ALTER TABLE `Resturents`
  ADD PRIMARY KEY (`resturent_id`);

--
-- Indexes for table `Sessions`
--
ALTER TABLE `Sessions`
  ADD PRIMARY KEY (`session_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Dishes`
--
ALTER TABLE `Dishes`
  MODIFY `dish_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `OrderDishes`
--
ALTER TABLE `OrderDishes`
  MODIFY `order_dish_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Orders`
--
ALTER TABLE `Orders`
  MODIFY `order_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Resturents`
--
ALTER TABLE `Resturents`
  MODIFY `resturent_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Dishes`
--
ALTER TABLE `Dishes`
  ADD CONSTRAINT `dishes_ibfk_1` FOREIGN KEY (`resturent_id`) REFERENCES `Resturents` (`resturent_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `OrderDishes`
--
ALTER TABLE `OrderDishes`
  ADD CONSTRAINT `orderdishes_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `Orders` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orderdishes_ibfk_2` FOREIGN KEY (`dish_id`) REFERENCES `Dishes` (`dish_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Sessions`
--
ALTER TABLE `Sessions`
  ADD CONSTRAINT `sessions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
