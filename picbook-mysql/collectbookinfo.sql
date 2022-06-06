-- phpMyAdmin SQL Dump
-- version 4.4.15.10
-- https://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: 2022-06-06 21:46:58
-- 服务器版本： 5.5.62-log
-- PHP Version: 7.0.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `userinfo`
--

-- --------------------------------------------------------

--
-- 表的结构 `collectbookinfo`
--

CREATE TABLE IF NOT EXISTS `collectbookinfo` (
  `BookName` varchar(50) NOT NULL,
  `BookID` varchar(50) NOT NULL,
  `CreatorName` varchar(50) NOT NULL,
  `UserID` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='被收藏的绘本们';

--
-- 转存表中的数据 `collectbookinfo`
--

INSERT INTO `collectbookinfo` (`BookName`, `BookID`, `CreatorName`, `UserID`) VALUES
('安娜的新大衣', 'pDKiyfPpB3vOsatjRcnhr', 'qsw是Vue的迷妹', 'oJYDZylNtegF769lTHaC4'),
('巨人的春天', 'rK4bfXV-HH1ZyM4m-fGTc', 'test', 'oJYDZylNtegF769lTHaC4'),
('巨人的春天', 'rK4bfXV-HH1ZyM4m-fGTc', 'test', 'nhSbrbci0xvB01z8rPnsD'),
('牛牛学姐记', 'yz6X7TalZu2bjWrBmY83U', '牛牛学姐', 'Rl27lF4QAVn5xMobb1y_v'),
('巨人的春天', 'rK4bfXV-HH1ZyM4m-fGTc', 'test', 'jBuWDOkcbQsWNTc707ryc'),
('巨人的春天', 'rK4bfXV-HH1ZyM4m-fGTc', 'test', 'dNerhOIXVF8HcQyreh0Bc');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
