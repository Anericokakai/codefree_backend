'use strict';

/**
 * nodejs-blog router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::nodejs-blog.nodejs-blog');
