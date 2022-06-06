-- phpMyAdmin SQL Dump
-- version 4.4.15.10
-- https://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: 2022-06-06 21:47:09
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
-- 表的结构 `bookinfo`
--

CREATE TABLE IF NOT EXISTS `bookinfo` (
  `BookID` varchar(30) NOT NULL,
  `BookName` varchar(30) NOT NULL,
  `isPrivate` tinyint(1) NOT NULL,
  `CreatorName` varchar(20) NOT NULL COMMENT '作者名',
  `CreatorID` varchar(30) NOT NULL COMMENT '作者ID',
  `createDate` varchar(100) NOT NULL COMMENT '绘本创作时间'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='书本的信息';

--
-- 转存表中的数据 `bookinfo`
--

INSERT INTO `bookinfo` (`BookID`, `BookName`, `isPrivate`, `CreatorName`, `CreatorID`, `createDate`) VALUES
('CvDMGZulT5XU5XkFMhxKC', '123', 0, '456', 'ykXFxb3WzHjnISIbRkGgH', '2022-05-25 14:52:47.477195'),
('RVhdGzE9b2XqmjozXEnN3', '试一试1', 0, 'test', 'oJYDZylNtegF769lTHaC4', '2022-05-25 08:43:53.102626'),
('rK4bfXV-HH1ZyM4m-fGTc', '巨人的春天', 0, 'test', 'oJYDZylNtegF769lTHaC4', '2022-05-23 12:00:34.930734'),
('0YlZuw9ylrISrQwbo2IIg', '在北语的一天', 0, 'test', 'oJYDZylNtegF769lTHaC4', '2022-05-23 15:49:43.180788'),
('pDKiyfPpB3vOsatjRcnhr', '安娜的新大衣', 0, 'qsw是Vue的迷妹', '0NKdH_xh3jXTf0af-2uCf', '2022-05-23 00:02:34.196365'),
('eqaeC4rbZTe7wGpX3CE40', '个人绘本', 1, 'jennie', 'nhSbrbci0xvB01z8rPnsD', '2022-05-25 11:05:19.055937'),
('C7b2VftSQ0wV0wA7iOmCf', '太难了', 0, 'test', 'oJYDZylNtegF769lTHaC4', '2022-05-25 13:00:12.602713'),
('1I7VgmgaFXGh2zJGlAP02', 'easy', 0, 'test', 'oJYDZylNtegF769lTHaC4', '2022-05-25 13:00:20.040207'),
('-9CCWM00BiLnnGtk2cwcb', '问题不大', 0, 'test', 'oJYDZylNtegF769lTHaC4', '2022-05-25 13:00:01.962151'),
('MZtp-8ms6xxq3fFwtmZV7', '111', 0, 'test', 'oJYDZylNtegF769lTHaC4', '2022-05-25 13:38:25.133327'),
('DphGkaabSFvLIRKvTLVZQ', '你好', 0, 'qq', '7hUODknP_lPMuJJUA5zfL', '2022-05-25 15:05:33.056087'),
('yz6X7TalZu2bjWrBmY83U', '牛牛学姐记', 0, '牛牛学姐', 'Rl27lF4QAVn5xMobb1y_v', '2022-05-25 15:53:57.148462'),
('UT2NEaTeDdyuQv6K7dpxT', '1', 0, 'Isabella', 'Opf8qrbvtck7BfNkX0YB5', '2022-05-25 16:07:38.945953'),
('xzPt8ox8ELOWRHs02FANu', '小猪佩奇', 0, '234', '79pgvimXI0RudjQ4YgePx', '2022-06-06 21:01:22.075518'),
('k3f-oIkaO66_gXR2AP2C_', '哈哈哈', 0, '778', 'dNerhOIXVF8HcQyreh0Bc', '2022-05-26 08:50:56.900045');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
