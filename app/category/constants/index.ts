import { z } from 'zod';

export const initialValues = {
  categories: __DEV__ ? [] : undefined,
};

export const ZCategoriesSchema = z.object({
  categories: z.array(z.string()).min(1, { message: 'Debes seleccionar al menos una categoría' }),
});
