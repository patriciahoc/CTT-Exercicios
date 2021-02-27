import api from "./api";

const HeroesService = {
  getHeroes: (hero: any) => api.get(`${hero}`),
};

export default HeroesService;
