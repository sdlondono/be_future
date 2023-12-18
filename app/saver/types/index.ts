import { z } from 'zod';

import type { ZSaverSchema } from '../constants';

export type ISaver = z.infer<typeof ZSaverSchema>;
