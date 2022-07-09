-- 标签表
CREATE TABLE `label` (
`label_id` int(11) NOT NULL AUTO_INCREMENT,
`label_name` varchar(50) NOT NULL,
`create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间', 
PRIMARY KEY (`label_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `article`(
`id` int(11) NOT NULL AUTO_INCREMENT,
`title` varchar(50) NOT NULL,
`cover_img` varchar(100) NOT NULL,
`label_id`  int(11) DEFAULT NULL,
`create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间', 
`update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间', 
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 右关联和内关联查询
-- select * from label a right join article b on a.label_id=b.label_id; 
-- select * from label a inner join article b on a.label_id=b.label_id;

-- 更新语句
 UPDATE label SET label_name='DB' WHERE label_id=2;

