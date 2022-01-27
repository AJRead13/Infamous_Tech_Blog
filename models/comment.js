const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');
class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        comment_body: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [10]
        },
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',
      }
);

module.exports = Comment;