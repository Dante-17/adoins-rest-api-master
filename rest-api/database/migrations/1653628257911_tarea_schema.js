'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TareaSchema extends Schema {
  up () {
    this.create('tareas', (table) => {
      table.increments()
      table.integer('projecto_id').unsigned().references('id').inTable('projectos');
      table.string('descripcion',255).notNullable();
      table.boolean('completada').defaultTo(false);
      table.timestamps()
    })
  }

  down () {
    this.drop('tareas')
  }
}

module.exports = TareaSchema
