import { z } from 'zod';

export const ZExpensesSchema = z.object({
  id: z.string().uuid(),
  fieldsArray: z.array(
    z.object({
      id: z.string().uuid(),
      name: z.string(),
      value: z.string().max(100).min(3, { message: 'El valor debe tener al menos 3 caracteres' }),
    })
  ),
});
