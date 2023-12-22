import type { z } from 'zod';

import type { ZExpensesSchema } from '../constants';

export type IExpenses = z.infer<typeof ZExpensesSchema>;
