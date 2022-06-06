-- phpMyAdmin SQL Dump
-- version 4.4.15.10
-- https://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: 2022-06-06 21:46:44
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
-- 表的结构 `userinfo`
--

CREATE TABLE IF NOT EXISTS `userinfo` (
  `UserName` varchar(20) NOT NULL,
  `PassWord` varchar(20) NOT NULL,
  `UserId` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='用于存储用户基本信息';

--
-- 转存表中的数据 `userinfo`
--

INSERT INTO `userinfo` (`UserName`, `PassWord`, `UserId`) VALUES
('test', '123', 'oJYDZylNtegF769lTHaC4'),
('qsw是Vue的迷妹', '123456', '0NKdH_xh3jXTf0af-2uCf'),
('jennie', '12345', 'nhSbrbci0xvB01z8rPnsD'),
('456', '456', 'ykXFxb3WzHjnISIbRkGgH'),
('qq', '123', '7hUODknP_lPMuJJUA5zfL'),
('bigyu', '1234', 'hLvd5yofW0-8ozJJS7H19'),
('牛牛学姐', '123456', 'Rl27lF4QAVn5xMobb1y_v'),
('Isabella', 'peggy995', 'Opf8qrbvtck7BfNkX0YB5'),
('lalala', '123456', 'jBuWDOkcbQsWNTc707ryc'),
('778', '123456789', 'dNerhOIXVF8HcQyreh0Bc'),
('234', '234', '79pgvimXI0RudjQ4YgePx');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
