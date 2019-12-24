-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 24, 2019 at 04:00 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.2.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `flavaste`
--

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id` bigint(20) NOT NULL,
  `name` varchar(55) DEFAULT NULL,
  `description` text NOT NULL,
  `restaurant_id` bigint(20) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `name`, `description`, `restaurant_id`, `status`) VALUES
(1, 'Soups', '', 2, 1),
(2, 'Mains', '', 2, 1),
(3, 'Pizza', '', 2, 1),
(4, 'Desserts', '', 2, 1),
(5, 'Appetizers', '', 2, 1),
(6, 'Rice and Noodles', '', 1, 1),
(7, 'Soups', '', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `menu_category`
--

CREATE TABLE `menu_category` (
  `id` bigint(20) NOT NULL,
  `name` varchar(55) DEFAULT NULL,
  `description` text NOT NULL,
  `menu_id` bigint(20) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `menu_items`
--

CREATE TABLE `menu_items` (
  `id` bigint(20) NOT NULL,
  `name` varchar(55) DEFAULT NULL,
  `price` double(7,2) DEFAULT NULL,
  `tax` bigint(20) DEFAULT 0,
  `menu_id` bigint(20) NOT NULL,
  `menu_category_id` bigint(20) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menu_items`
--

INSERT INTO `menu_items` (`id`, `name`, `price`, `tax`, `menu_id`, `menu_category_id`, `status`) VALUES
(1, 'Fresh Pan Pizza', 118.00, 10, 3, 0, 1),
(2, 'Chicken loaded Pizza', 200.00, 0, 3, 0, 1),
(3, 'French Fries', 100.00, 0, 5, 0, 1),
(4, 'Hakka Noodles', 100.00, 0, 6, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_11_21_121355_create_restaurants_table', 1),
(4, '2016_06_01_000001_create_oauth_auth_codes_table', 2),
(5, '2016_06_01_000002_create_oauth_access_tokens_table', 2),
(6, '2016_06_01_000003_create_oauth_refresh_tokens_table', 2),
(7, '2016_06_01_000004_create_oauth_clients_table', 2),
(8, '2016_06_01_000005_create_oauth_personal_access_clients_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('053761d4d06057905966ad19ab2bd3bc6b61f834886ce8e7edef16ce6dfe56792516322dc26722f4', 3, 1, 'Personal Access Token', '[]', 0, '2019-12-23 06:50:01', '2019-12-23 06:50:01', '2020-12-23 12:20:01'),
('0d05c13679a2351aa2042acc0c842f20e01f22ace4fb83cc90fd256dc20df77c1bd5ed8cc404271a', 3, 1, 'Personal Access Token', '[]', 0, '2019-12-17 06:27:02', '2019-12-17 06:27:02', '2020-12-17 11:57:02'),
('14d7ededc25bf0b374fbd6d0a57957b0da21764c87828cc045835b6b72c671d657d57c353ba448d2', 3, 1, 'Personal Access Token', '[]', 0, '2019-12-22 06:18:36', '2019-12-22 06:18:36', '2020-12-22 11:48:36'),
('157fb5603106e420065fe485101bd5fbf970b9fa54d24a8d4c6ed7642c91b69317744cac4829190d', 2, 1, 'Personal Access Token', '[]', 0, '2019-12-23 06:30:01', '2019-12-23 06:30:01', '2020-12-23 12:00:01'),
('1eb0998f49a11f1641b89e2b03d1b2b8984f9949b683991de517194dc8a75098d5a92671cd030a96', 3, 1, 'Personal Access Token', '[]', 0, '2019-12-22 12:50:33', '2019-12-22 12:50:33', '2020-12-22 18:20:33'),
('31c7a96f26eda2daaba69c5f13b23cd1c7b73839d1ebfb3cf35471b5c04d7ca7c30ff58812dde646', 3, 1, 'Personal Access Token', '[]', 0, '2019-12-16 07:30:22', '2019-12-16 07:30:22', '2020-12-16 13:00:22'),
('4e132f0cae5761a0ce5afa0c943bbb34328eb6b385df51d3fb139958b6e2219eb355cc442b5eef7b', 3, 1, 'Personal Access Token', '[]', 0, '2019-12-16 07:16:17', '2019-12-16 07:16:17', '2020-12-16 12:46:17'),
('5040fd8281f068d623ea8e77cf9b4c2589543f2ee8fec256e296ab9079a12d93fdf7fe6c7ed51e8b', 3, 1, 'Personal Access Token', '[]', 0, '2019-12-22 12:39:07', '2019-12-22 12:39:07', '2020-12-22 18:09:07'),
('559da505d5d93811f222f53729ef30401cf0fa2f541055baea0ba8943c858c293af0bcf2296d4650', 2, 1, 'Personal Access Token', '[]', 0, '2019-12-23 06:47:13', '2019-12-23 06:47:13', '2020-12-23 12:17:13'),
('582c4ec336c165f5139f5430adcc450ad52ce319d8d55b3e6f0298e2c039d6d59395f95388f87a3c', 3, 1, 'Personal Access Token', '[]', 0, '2019-12-22 06:57:49', '2019-12-22 06:57:49', '2020-12-22 12:27:49'),
('9ae1f9523a26ff017604127b33c6fab77b03676bc4e23376a714b225d1a0a551ddd10e11356c225e', 3, 1, 'Personal Access Token', '[]', 0, '2019-12-16 08:56:05', '2019-12-16 08:56:05', '2020-12-16 14:26:05'),
('a5fc3d86291ba19e337f3122481cff97089840d6b2d37e69c9a893e82264ae7c4e52c504e82af128', 3, 1, 'Personal Access Token', '[]', 0, '2019-12-17 06:22:54', '2019-12-17 06:22:54', '2020-12-17 11:52:54'),
('b45fe8b57a92d0de06caa0c3a1ded8eafb838d1aa0dabe5ba67de7cbd37ade5790a02bc2564fb67f', 3, 1, 'Personal Access Token', '[]', 0, '2019-12-23 06:17:41', '2019-12-23 06:17:41', '2020-12-23 11:47:41'),
('b5963d18f76d2a336757219a0a97aa27a020ad79c0bd56e00a1925f4632eae5242df2cb816689090', 3, 1, 'Personal Access Token', '[]', 0, '2019-12-16 07:29:21', '2019-12-16 07:29:21', '2020-12-16 12:59:21'),
('c5b330a2f2541969386686d075c68c190c5e3d2c2db968f4c35be84e9f859f0c944a5750845da210', 3, 1, 'Personal Access Token', '[]', 0, '2019-12-16 07:24:14', '2019-12-16 07:24:14', '2020-12-16 12:54:14'),
('c8f4574c7e17ca6d6634d54ec817c3b10bf5d4cd8f69008e971be90fac920de21f12c1f69e927b4d', 3, 1, 'Personal Access Token', '[]', 0, '2019-12-17 10:28:26', '2019-12-17 10:28:26', '2020-12-17 15:58:26'),
('c99d4fd198c64ce4f93d8a2a428e020bc9c27e036dbe1c467dcd3ad22df8bb36e63cb011f8be1aa4', 2, 1, 'Personal Access Token', '[]', 0, '2019-12-22 12:56:53', '2019-12-22 12:56:53', '2020-12-22 18:26:53'),
('caa72148e5c92e4c86a06443f5b6aa6b9ce42dec5c8a5107327ae2aa0145bd271c683172c6bde5a4', 3, 1, 'Personal Access Token', '[]', 0, '2019-12-16 08:48:03', '2019-12-16 08:48:03', '2020-12-16 14:18:03'),
('cf7b97a09519fe6505ba7a9433f9d1edc489e5bf1692868ac478619ca6ab9fdad441f75574d68e44', 3, 1, 'Personal Access Token', '[]', 0, '2019-12-22 06:44:01', '2019-12-22 06:44:01', '2020-12-22 12:14:01'),
('d62e99695c401df7bf9d728bc59d7078543b2a8de33a358fd96a8fd380ed4d647ef6f8e9abe3d0ab', 2, 1, 'Personal Access Token', '[]', 0, '2019-12-23 06:50:33', '2019-12-23 06:50:33', '2020-12-23 12:20:33'),
('d9975e3ff2e7a7050819736ec0b341f2d3ad5f49dce2bc2dcddacd49db35cc3a59bbf70feed6e745', 3, 1, 'Personal Access Token', '[]', 0, '2019-12-23 06:29:04', '2019-12-23 06:29:04', '2020-12-23 11:59:04'),
('de2040b250d24a748735caa86d78e8c42ebec42baf57083997abc67226297f08cf818a7e0e9b2eba', 3, 1, 'Personal Access Token', '[]', 0, '2019-12-22 06:22:37', '2019-12-22 06:22:37', '2020-12-22 11:52:37'),
('f466975358411e5f9deaac1dbedbe1dc94077849274241d43cbacceb592674d796262924d687772c', 3, 1, 'Personal Access Token', '[]', 0, '2019-12-16 07:25:43', '2019-12-16 07:25:43', '2020-12-16 12:55:43'),
('f9785a4e05ea2c1af477c9ab90dc8dd96a72085bb40154864adc3af86fcdc4929f62d24a5b75f317', 3, 1, 'Personal Access Token', '[]', 0, '2019-12-22 12:45:43', '2019-12-22 12:45:43', '2020-12-22 18:15:43');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', 'D9ArHGnbkx3Z1zhGmF6vY9EdfIbEXlDM7sIO4pFj', 'http://localhost', 1, 0, 0, '2019-12-16 07:12:52', '2019-12-16 07:12:52'),
(2, NULL, 'Laravel Password Grant Client', 'UINI0TuIDSp3YeuhTtocZBAqAyxCBmTpihIMRker', 'http://localhost', 0, 1, 0, '2019-12-16 07:12:52', '2019-12-16 07:12:52');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2019-12-16 07:12:52', '2019-12-16 07:12:52');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` mediumint(9) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `telephone_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `zipcode` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lat` double(8,6) NOT NULL,
  `lng` double(8,6) NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`id`, `user_id`, `name`, `description`, `telephone_no`, `address`, `zipcode`, `lat`, `lng`, `remember_token`, `is_active`, `created_at`) VALUES
(1, 1, 'Test', 'Test', '999999999', '', '', 0.000000, 0.000000, NULL, 1, NULL),
(2, 1, 'Restaurant 02', 'Test', '999999999', '', '', 0.000000, 0.000000, NULL, 1, NULL),
(3, 1, 'Restaurant 03', 'Test', '999999999', '', '', 0.000000, 0.000000, NULL, 1, NULL),
(4, 1, 'Restaurant 04', 'Test', '999999999', '', '', 0.000000, 0.000000, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `scheduler_questionnaire`
--

CREATE TABLE `scheduler_questionnaire` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `scheduler_questionnaire`
--

INSERT INTO `scheduler_questionnaire` (`id`, `name`, `active`) VALUES
(1, 'What days?', 1),
(2, 'What time?', 1),
(3, 'How long?', 1);

-- --------------------------------------------------------

--
-- Table structure for table `scheduler_questionnaire_week_options`
--

CREATE TABLE `scheduler_questionnaire_week_options` (
  `id` int(11) NOT NULL,
  `Sunday` tinyint(1) NOT NULL DEFAULT 1,
  `Monday` tinyint(1) DEFAULT 1,
  `Tuesday` tinyint(1) NOT NULL DEFAULT 1,
  `Wednesday` tinyint(1) NOT NULL DEFAULT 1,
  `Thursday` tinyint(1) NOT NULL DEFAULT 1,
  `Friday` tinyint(1) NOT NULL DEFAULT 1,
  `Saturday` tinyint(1) NOT NULL DEFAULT 1,
  `restaurant_id` int(11) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `scheduler_questionnaire_week_options`
--

INSERT INTO `scheduler_questionnaire_week_options` (`id`, `Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `restaurant_id`, `active`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, 1, 1, 1, 1, 2, 1, NULL, NULL),
(2, 1, 1, 1, 1, 1, 1, 1, 1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `scheduler_reminders`
--

CREATE TABLE `scheduler_reminders` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL DEFAULT 0,
  `menu_item_id` int(10) NOT NULL DEFAULT 0,
  `restaurant` varchar(255) NOT NULL,
  `restaurant_id` bigint(20) NOT NULL,
  `day_scheduled` varchar(55) DEFAULT '00',
  `time_scheduled` varchar(55) DEFAULT NULL,
  `how_long` int(11) DEFAULT NULL,
  `day_weeks_month` varchar(11) NOT NULL DEFAULT 'D',
  `inactivate` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 0,
  `deleted_at` varchar(55) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `role_id` int(11) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `active`, `deleted_at`, `created_at`, `updated_at`, `role_id`) VALUES
(1, 'admin', 'superadmin@test.com', NULL, '$2y$10$v91c/C1N1WP87xYZcXLVgO0Q3aEmZGefZjSN1LxznoqreGXjP2.Lu', NULL, 1, NULL, NULL, NULL, 1),
(2, 'test', 'admin@test.com', NULL, '$2y$10$v91c/C1N1WP87xYZcXLVgO0Q3aEmZGefZjSN1LxznoqreGXjP2.Lu', NULL, 1, NULL, '2019-12-16 06:41:06', '2019-12-16 06:41:06', 3),
(3, 'Customer1', 'cust@test.com', NULL, '$2y$10$v91c/C1N1WP87xYZcXLVgO0Q3aEmZGefZjSN1LxznoqreGXjP2.Lu', NULL, 1, NULL, '2019-12-16 06:48:05', '2019-12-16 06:48:05', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu_category`
--
ALTER TABLE `menu_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu_items`
--
ALTER TABLE `menu_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_personal_access_clients_client_id_index` (`client_id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `scheduler_questionnaire`
--
ALTER TABLE `scheduler_questionnaire`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `scheduler_questionnaire_week_options`
--
ALTER TABLE `scheduler_questionnaire_week_options`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `scheduler_reminders`
--
ALTER TABLE `scheduler_reminders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `menu_category`
--
ALTER TABLE `menu_category`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `menu_items`
--
ALTER TABLE `menu_items`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `scheduler_questionnaire`
--
ALTER TABLE `scheduler_questionnaire`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `scheduler_questionnaire_week_options`
--
ALTER TABLE `scheduler_questionnaire_week_options`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `scheduler_reminders`
--
ALTER TABLE `scheduler_reminders`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
