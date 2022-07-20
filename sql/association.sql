-- 关联查询

-- 学校表
CREATE TABLE school (
sch_id int(11) NOT NULL AUTO_INCREMENT,
sch_name varchar(50) NOT NULL,
sch_addr varchar(100) DEFAULT NULL,
PRIMARY KEY (sch_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- 学生表
CREATE TABLE student (
st_id int(11) NOT NULL AUTO_INCREMENT,
st_name varchar(20) NOT NULL,
age smallint(6) DEFAULT NULL,
hight int(5) DEFAULT NULL,
sch_id int(11) DEFAULT NULL,
PRIMARY KEY (st_id),
KEY sch_id (sch_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

-- 插入数据 学校表
INSERT INTO school VALUES 
(1,'南开大学','南开'),
(2,'中央财经大学','北京'),
(3,'香港理工大学','香港'),
(4,'西安交通大学','西安'),
(5,'悉尼大学','悉尼'),
(6,'曼彻斯特大学','曼彻斯特'),
(8,'延安抗日军政大学','延安');

-- 插入数据学生表
INSERT INTO student VALUES 
(1,'王晓阳',26,168,6),
(2,'王楠',28,162,2),
(3,'杨振宇',30,178,1),
(4,'苗昕',28,162,3),
(5,'张诗雨',27,171,5),
(8,'李倩',28,162,4),
(9,'蒋结石',26,178,7);

-- 1.左关联：以左表为中心，查出左表的全部数据，关联字段值不相等则右表查出的数据显示为空；
select * from school a left join student b on a.sch_id=b.sch_id;

-- 2.右关联：以右表为中心，查出右表的全部数据，关联字段值不相等则左表查出的数据显示为空；
select * from school a right join student b on a.sch_id=b.sch_id;

-- 3.内关联：查出两表关联字段等值的数据
select * from school a inner join student b on a.sch_id=b.sch_id;

-- 4.内联查询并且升序
select * from school a inner join student b on a.sch_id=b.sch_id ORDER BY hight, age ASC;

-- 5.内联查询降序 
select * from school a inner join student b on a.sch_id=b.sch_id ORDER BY hight DESC, age DESC;



-- CREATE TABLE `son` (
--   `parent_id` int(11) NOT NULL AUTO_INCREMENT,
--   `qq` varchar(50) NOT NULL,
--   `message` varchar(100) NOT NULL,
--   `nickname` varchar(50) NOT NULL,
--   `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
--   PRIMARY KEY (`parent_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- CREATE TABLE `parent` (
--   `id` int(11) NOT NULL AUTO_INCREMENT,
--   `qq` varchar(50) NOT NULL,
--   `message` varchar(100) NOT NULL,
--   `nickname` varchar(50) NOT NULL,
--   `parent_id` int(11) NOT NULL DEFAULT '0',
--   `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;