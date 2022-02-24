import { Api } from "../../../api/api";

type FindSummonerByNameResponse = {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
};

class FindSummonerByName extends Api {
  constructor() {
    super(process.env.NEXT_PUBLIC_API_LOL)
  };
  
  async execute(summonerName: string) {
    const { data } = await this.server.get<FindSummonerByNameResponse>(summonerName);
    
    return data;
  };

};

const findSummonerByName = new FindSummonerByName();

export { findSummonerByName };