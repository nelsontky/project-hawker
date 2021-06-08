import axios from "axios";

import { StallsService } from "modules/stalls/stalls.service";

export class SearchService {
  stallsService: StallsService;

  constructor(stallsService: StallsService) {
    this.stallsService = stallsService;
  }

  static async build() {
    const stallsService = await StallsService.build();
    return new SearchService(stallsService);
  }

  async search(query: string) {
    const response = await axios.post("http://es:9200/stalls/_search", {
      query: {
        multi_match: {
          query,
        },
      },
      fields: ["id"],
      _source: false,
    });

    const stallIds = response.data.hits.hits.map(
      (hit: { _id: string }) => hit._id
    );

    return this.stallsService.findAllIds(stallIds);
  }
}
