const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define("articles", {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
});

Category.hasMany(Article); // Uma categoria tem muitos artigos (1-P-N)
// `category_id` INT NOT NULL FOREIGN REFERENCES `category`
Article.belongsTo(Category); // Um (1) Artigo (pertence) a uma (1) Categoria

module.exports = Article;