use database sym
create table User (
    uid varchar(20) NOT NULL COMMENT "用户编号",
    username varchar(20) NOT NULL COMMENT "用户登录名",
    fullname varchar(50) NULL COMMENT "用户名称",
    password varchar(50) NULL COMMENT "登录密码",
    role varchar(10) NULL COMMENT "角色权限"
)