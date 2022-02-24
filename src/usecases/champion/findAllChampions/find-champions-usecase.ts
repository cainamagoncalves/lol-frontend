import { Api } from "../../../api/api";

type FindChampionsResponse = {
  id: string;
  name: string;
  blurb: string;
};

class FindChampions extends Api {
  constructor() {
    super(process.env.NEXT_PUBLIC_API_DDRAGON);
  };

  async execute() {
    const { data } = await this.server.get<FindChampionsResponse>('');

    return data;
  };

};

const findChampions = new FindChampions();

export { findChampions };