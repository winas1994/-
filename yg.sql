/*
Navicat MySQL Data Transfer

Source Server         : yg
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : yg

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-08-27 20:02:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodsmessage
-- ----------------------------
DROP TABLE IF EXISTS `goodsmessage`;
CREATE TABLE `goodsmessage` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `title1` varchar(255) NOT NULL,
  `title2` varchar(255) NOT NULL,
  `date` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodsmessage
-- ----------------------------

-- ----------------------------
-- Table structure for ygzc
-- ----------------------------
DROP TABLE IF EXISTS `ygzc`;
CREATE TABLE `ygzc` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) DEFAULT NULL,
  `pwd` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ygzc
-- ----------------------------
INSERT INTO `ygzc` VALUES ('32', '115@qq.com', '123456');
INSERT INTO `ygzc` VALUES ('31', '114@qq.com', '123456');
INSERT INTO `ygzc` VALUES ('30', '114@qq.com', '123456');
INSERT INTO `ygzc` VALUES ('35', 'gqg@qq.com', 'asdfg123');
INSERT INTO `ygzc` VALUES ('23', '123@qq.com', '123456');
INSERT INTO `ygzc` VALUES ('20', null, null);
INSERT INTO `ygzc` VALUES ('36', '777@qq.com', '123456');
INSERT INTO `ygzc` VALUES ('34', '999@qq.com', '123456');
INSERT INTO `ygzc` VALUES ('33', '116@qq.com', '123456');
INSERT INTO `ygzc` VALUES ('28', '112@qq.com', '123456');
INSERT INTO `ygzc` VALUES ('19', '123456@qq.com', '123456');
SET FOREIGN_KEY_CHECKS=1;
