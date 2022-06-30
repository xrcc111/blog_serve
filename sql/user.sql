-- 生成树
CREATE TABLE `tree` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`qq` varchar(50) NOT NULL,
`message` varchar(100) NOT NULL,
`nickname` varchar(50) NOT NULL,
`parent_id` int(11) NOT NULL DEFAULT '0',
`create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间', 
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- mysql生成创建时间
CREATE TABLE `timer` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间', 
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
