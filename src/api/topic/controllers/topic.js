"use strict";

/**
 * topic controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
module.exports = createCoreController("api::topic.topic", ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.db.query("api::topic.topic").findOne({
      where: {
        slug: id,
      },
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
