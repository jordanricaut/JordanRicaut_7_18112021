-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : dim. 30 jan. 2022 à 18:07
-- Version du serveur :  5.7.34
-- Version de PHP : 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `bdd_groupomania`
--

-- --------------------------------------------------------

--
-- Structure de la table `commentaires`
--

CREATE TABLE `commentaires` (
  `id` int(11) NOT NULL,
  `userId` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `postId` int(100) NOT NULL,
  `message` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `userNom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userPrenom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `commentaires`
--

INSERT INTO `commentaires` (`id`, `userId`, `postId`, `message`, `createdAt`, `updatedAt`, `userNom`, `userPrenom`) VALUES
(3, 'ca75b7e5-d91d-4d6c-9d9a-9e282dee7d90', 53, 'Magnifique cette voiture', '2022-01-30 15:47:14', '2022-01-30 15:47:14', 'Jean', 'Pascal');

-- --------------------------------------------------------

--
-- Structure de la table `likes`
--

CREATE TABLE `likes` (
  `id` int(100) NOT NULL,
  `userId` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `postId` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `likes`
--

INSERT INTO `likes` (`id`, `userId`, `postId`) VALUES
(1, '36cf0714-8092-422e-a9d2-bb7cabfcd79e', 61),
(2, '36cf0714-8092-422e-a9d2-bb7cabfcd79e', 60);

-- --------------------------------------------------------

--
-- Structure de la table `posts`
--

CREATE TABLE `posts` (
  `id` int(100) NOT NULL,
  `message` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imageUrl` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `userId` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `posts`
--

INSERT INTO `posts` (`id`, `message`, `imageUrl`, `userId`, `createdAt`, `updatedAt`) VALUES
(53, 'Ferrari', 'http://localhost:3030/images/post/wallpaperflare_21012022.jpg', 'af241ccb-1ec9-4ac1-b3ab-24a03a59c714', '2022-01-21 02:00:08', '2022-01-21 02:00:08'),
(60, '', 'http://localhost:3030/images/post/muhammad-asyfaul-m-UvdXKnf7I-unsplash_30012022.jpg', 'ca75b7e5-d91d-4d6c-9d9a-9e282dee7d90', '2022-01-30 15:46:59', '2022-01-30 15:46:59'),
(61, 'Bonjour à tous, bienvenue sur le forum de l\'entreprise Groupomania', NULL, 'af241ccb-1ec9-4ac1-b3ab-24a03a59c714', '2022-01-30 15:56:24', '2022-01-30 15:56:24');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(160) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nom` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenom` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mdp` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `nom`, `prenom`, `mdp`, `createdAt`, `updatedAt`) VALUES
('36cf0714-8092-422e-a9d2-bb7cabfcd79e', 'jordan-ricaut@gmail.com', 'Ricaut', 'Jordan', '$2b$10$jAbAEx5c8lQkq.Eb63RIYemC0xcTTHqLdJeqQVmIprf7nlE5XM5/q', '2022-01-30 16:14:19', '2022-01-30 16:14:19'),
('9807a1ea-fd00-4e05-b02b-37ebcab29fd1', 'pascal-jean@gmail.com', 'Pascal', 'Jean', '$2b$10$OYTq.JqXozNswZ.hmVHeyuCSusc59xsDDxcQcdUMBhlP/1MUYYP56', '2022-01-18 15:27:13', '2022-01-19 10:51:40'),
('af241ccb-1ec9-4ac1-b3ab-24a03a59c714', 'jordan.ricaut5@gmail.com', 'Ricaut', 'Jordan', '$2b$10$XFgqdUb5WCItzSpfyhTqe.MMZrX203rhwX6VyOnJLuZh7Q6ixNFpW', '2022-01-15 13:12:40', '2022-01-27 20:00:43'),
('ca75b7e5-d91d-4d6c-9d9a-9e282dee7d90', 'jean-pascal@gmail.com', 'Jean', 'Pascal', '$2b$10$piFK.8by39ZmPwZze/WZpu9ejO5nzd6cRTJeG6CEWb3h2ox.lnYCC', '2022-01-30 15:46:06', '2022-01-30 15:46:06');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `commentaires`
--
ALTER TABLE `commentaires`
  ADD PRIMARY KEY (`id`),
  ADD KEY `postId Commentaire` (`postId`),
  ADD KEY `userId Commentaire` (`userId`);

--
-- Index pour la table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `postid` (`postId`),
  ADD KEY `userId Like` (`userId`);

--
-- Index pour la table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `commentaires`
--
ALTER TABLE `commentaires`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `likes`
--
ALTER TABLE `likes`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `commentaires`
--
ALTER TABLE `commentaires`
  ADD CONSTRAINT `postId Commentaire` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userId Commentaire` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `postid` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userId Like` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
