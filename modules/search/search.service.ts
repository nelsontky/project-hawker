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

  async search(options: { query: string; limit: number; skip: number }) {
    const response = await axios.post("http://es:9200/stalls/_search", {
      from: options.skip,
      size: options.limit,
      query: {
        multi_match: {
          query: options.query,
          fuzziness: "AUTO",
        },
      },
      _source: false,
    });

    const stallIds = response.data.hits.hits.map(
      (hit: { _id: string }) => hit._id
    );

    return this.stallsService.findAllByIds(stallIds);
  }
}
