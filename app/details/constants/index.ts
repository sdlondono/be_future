import { z } from 'zod';

export const initialDetailsValue = {
  fullName: __DEV__ ? 'Samuel David' : undefined,
  age: __DEV__ ? '18' : undefined,
  monthlyIncome: __DEV__ ? '12000' : undefined,
  monthlyExpenses: __DEV__ ? '13000' : undefined,
};

export const ZDetailsSchema = z.object({
  fullName: z
    .string({ required_error: 'El nombre es requerido' })
    .max(100)
    .min(3, { message: 'El nombre debe tener al menos 3 caracteres' }),
  age: z
    .string({ required_error: 'La edad es requerida' })
    .max(2)
    .min(2, { message: 'La edad debe tener al menos 2 caracteres' }),
  monthlyIncome: z
    .string({ required_error: 'El ingreso mensual es requerido' })
    .max(100)
    .min(3, { message: 'El ingreso mensual debe tener al menos 3 caracteres' }),
  monthlyExpenses: z
    .string({ required_error: 'El gasto mensual es requerido' })
    .max(100)
    .min(3, { message: 'El gasto mensual debe tener al menos 3 caracteres' }),
});
