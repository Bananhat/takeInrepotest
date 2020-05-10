'use strict';

/**
 * Produits.js controller
 *
 * @description: A set of functions called "actions" for managing `Produits`.
 */

module.exports = {

  /**
   * Retrieve produits records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.produits.search(ctx.query);
    } else {
      return strapi.services.produits.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a produits record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.produits.fetch(ctx.params);
  },

  /**
   * Count produits records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.produits.count(ctx.query, populate);
  },

  /**
   * Create a/an produits record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.produits.add(ctx.request.body);
  },

  /**
   * Update a/an produits record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.produits.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an produits record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.produits.remove(ctx.params);
  }
};
