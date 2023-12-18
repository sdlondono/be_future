import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { PersistStorage, persist } from 'zustand/middleware';

export interface IUser {
  fullName?: string;
  age?: string;
  monthlyIncome?: string;
  saverType?: string;
  categories?: string[];
}

interface IStore {
  user: IUser;
  setUser: (user: IUser) => void;
}

const storage: PersistStorage<IUser> = {
  getItem: async (name) => {
    const value = await AsyncStorage.getItem(name);
    return value ? JSON.parse(value) : {};
  },
  setItem: async (name, value) => {
    await AsyncStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: async (name) => {
    await AsyncStorage.removeItem(name);
  },
};

export const useStore = create<IStore>()(
  persist(
    (set, get) => ({
      user: {
        fullName: '',
        age: '',
        monthlyIncome: '',
        saverType: '',
        categories: [],
      },
      setUser: (user: IUser) => set({ ...get().user, user }),
    }),
    {
      name: 'user-storage', // unique name
      storage,
    }
  )
);
