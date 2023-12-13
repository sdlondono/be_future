import { z } from 'zod';

import type { ZDetailsSchema } from '../constants';

export type IDetails = z.infer<typeof ZDetailsSchema>;
