-- 文章表
CREATE TABLE `article`(
`id` int(11) NOT NULL AUTO_INCREMENT,
`title` varchar(50) NOT NULL,
`bg_img` varchar(100) NOT NULL,
`create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间', 
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




-- sql分页查询语句
SELECT * from t_stu ORDER BY age DESC LIMIT 0, 10
-- 查询总量
SELECT count(*) from t_stu
SELECT count(id) from t_stu
