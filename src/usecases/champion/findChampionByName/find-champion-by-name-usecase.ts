import { Api } from "../../../api/api";

type FindChampionByNameResponse = {
  id: string;
  name: string;
  blurb: string;
};

class FindChampionByName extends Api {
  constructor() {
    super(process.env.NEXT_PUBLIC_API_DDRAGON);
  };

  async execute() {
    const { data } = await this.server.get<FindChampionByNameResponse>('');

    return data;
  };

};

const findChampionByName = new FindChampionByName();

export { findChampionByName };