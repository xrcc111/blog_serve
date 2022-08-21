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



-- CREATE TABLE `article` (
--   `id` int(11) NOT NULL AUTO_INCREMENT,
--   `label_id` int(11) DEFAULT NULL,
--   `title` varchar(50) NOT NULL,
--   `cover_img` varchar(100) NOT NULL,
--   `content` longtext NOT NULL,
--   `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
--   `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '文章编号',
  `title` varchar(100) DEFAULT '' COMMENT '文章名称',
  `label_id` int(11) DEFAULT NULL,
  `cover_img` varchar(200) DEFAULT '' COMMENT '背景图片',
  `content` longtext COMMENT '文本内容',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COMMENT='文章表';


-- 文章表更新
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label_id` int(11) NULL DEFAULT NULL,
  `title` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `cover_img` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;



DROP TABLE IF EXISTS `sitelog`;
CREATE TABLE `sitelog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content`varchar(200) NOT NULL,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='网站日志表';