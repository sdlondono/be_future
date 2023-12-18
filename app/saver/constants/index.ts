import { z } from 'zod';

export const initialSaverValues = {
  saver: __DEV__ ? '' : undefined,
};

export const ZSaverSchema = z.object({
  saver: z.string().min(1, { message: 'Debes seleccionar al menos un tipo' }),
});
