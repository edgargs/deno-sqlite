import { db } from "./database.ts";
import { Context } from "@oak";

export const peopleController = {
  createPerson: async (ctx: Context) => {
    const { name, age } = await ctx.request.body.json();
    const id = db.insertPerson(name, age);
    ctx.response.status = 201;
    ctx.response.body = { id, name, age };
  },
  getAllPeople: (ctx: Context) => {
    const users = db.getAllPeople();
    ctx.response.body = users;
  },
  updatePerson: async (ctx: Context) => {
    const { name, age } = await ctx.request.body.json();
    const id = Number(ctx.params.id);
    db.updatePerson(id, name, age);
    ctx.response.body = { message: "Person updated successfully" };
  },
  deletePerson: (ctx: Context) => {
    const id = Number(ctx.params.id);
    db.deletePerson(id);
    ctx.response.body = { message: "Person removed successfully" };
  },
};