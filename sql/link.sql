-- 友链表
CREATE TABLE `links` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
	`type` int(11) DEFAULT '1' COMMENT '是否失联',
  `link_name` varchar(20) NOT NULL COMMENT '网站名称',
	`link_tag` varchar(50) NOT NULL COMMENT '网站标签',
  `profile` varchar(100) NOT NULL COMMENT '头像',
  `web_link` varchar(200) DEFAULT '' COMMENT '网站链接',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;



-- 网站日志表
CREATE TABLE `weblog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `log` varchar(500) NOT NULL COMMENT '日志内容',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;