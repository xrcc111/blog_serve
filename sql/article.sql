-- 文章表
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label_id` int(11) DEFAULT NULL,
  `title` varchar(50) NOT NULL,
  `cover_img` varchar(100) NOT NULL,
  `content` varchar(1500) NOT NULL,
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;




-- sql分页查询语句
SELECT * from t_stu ORDER BY age DESC LIMIT 0, 10
-- 查询总量
SELECT count(*) from t_stu
SELECT count(id) from t_stu


-- mysql的模糊查询
SELECT * from student WHERE INSTR(st_name,'王')> 0;



CREATE TABLE `tree` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `qq` varchar(50) NOT NULL,
  `message` varchar(100) NOT NULL,
  `nickname` varchar(50) NOT NULL,
  `parent_id` int(11) NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;