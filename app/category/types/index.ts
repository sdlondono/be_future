import { z } from 'zod';

import type { ZCategoriesSchema } from '../constants';

export type ICategories = z.infer<typeof ZCategoriesSchema>;
