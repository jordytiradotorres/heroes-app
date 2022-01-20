import { heroes } from '../data/heroes';

export const getHeroById = (id) => {
  if (!id) {
    throw new Error(`id ${id} no encontrado`);
  }

  return heroes.find((hero) => hero.id === id);
};
