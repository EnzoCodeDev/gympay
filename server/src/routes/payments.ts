import { Elysia, t } from "elysia";
import { db } from "../db";

export const paymentsRoutes = new Elysia({ prefix: "/payments" })
  .get("/", () => {
    return db
      .query(
        `
      SELECT p.*, c.name as client_name 
      FROM payments p 
      JOIN clients c ON p.client_id = c.id 
      ORDER BY p.payment_date DESC
    `,
      )
      .all();
  })
  .post(
    "/",
    ({ body }) => {
      const result = db
        .query(
          "INSERT INTO payments (client_id, membership_id, amount, method, reference) VALUES (?, ?, ?, ?, ?) RETURNING *",
        )
        .get(
          body.client_id,
          body.membership_id || null,
          body.amount,
          body.method,
          body.reference || null,
        );
      return { success: true, data: result };
    },
    {
      body: t.Object({
        client_id: t.Number(),
        membership_id: t.Optional(t.Number()),
        amount: t.Number(),
        method: t.String(),
        reference: t.Optional(t.String()),
      }),
    },
  );
