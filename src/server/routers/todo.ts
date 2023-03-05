// import { z } from "zod";
// import {procedure, router} from '../trpc';

// export const todoRouter = router({
//   all: procedure.query(({ctx}) => {
//     return ctx.task.findMany({
//       orderBy: {
//         createdAt: 'asc'
//       }
//     })
//   })
// });

import { z } from 'zod';
import { procedure, router } from '../trpc';

export const todoRouter = router({
  all: procedure.query(({ ctx }) => {
    return ctx.task.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });
  }),
  add: procedure
    .input(
      z.object({
        id: z.string().optional(),
        text: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const todo = await ctx.task.create({
        data: input,
      });
      return todo;
    }),
  edit: procedure
    .input(
      z.object({
        id: z.string().uuid(),
        data: z.object({
          completed: z.boolean().optional(),
          text: z.string().min(1).optional(),
        }),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { id, data } = input;
      const todo = await ctx.task.update({
        where: { id },
        data,
      });
      return todo;
    }),
  delete: procedure
    .input(z.string().uuid())
    .mutation(async ({ ctx, input: id }) => {
      await ctx.task.delete({ where: { id } });
      return id;
    }),
  clearCompleted: procedure.mutation(async ({ ctx }) => {
    await ctx.task.deleteMany({ where: { completed: true } });

    return ctx.task.findMany();
  }),
});