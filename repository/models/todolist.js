'use strict';
module.exports = (sequelize, DataTypes) => {
  const TodoList = sequelize.define('TodoList', {
    id: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    // 创建模型默认的开始和更新时间去掉
    timestamps: false
  });
  TodoList.associate = function(models) {
    // associations can be defined here
  };
  return TodoList;
};