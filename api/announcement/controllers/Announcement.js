'use strict';

/**
 * Announcement.js controller
 *
 * @description: A set of functions called "actions" for managing `Announcement`.
 */

module.exports = {

  /**
   * Retrieve announcement records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.announcement.search(ctx.query);
    } else {
      return strapi.services.announcement.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a announcement record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.announcement.fetch(ctx.params);
  },

  /**
   * Count announcement records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.announcement.count(ctx.query);
  },

  /**
   * Create a/an announcement record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.announcement.add(ctx.request.body);
  },

  /**
   * Update a/an announcement record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.announcement.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an announcement record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.announcement.remove(ctx.params);
  }
};
