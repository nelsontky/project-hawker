import axios from "axios";

import { StallsService } from "modules/stalls/stalls.service";
import { LocationsService } from "modules/locations/locations.service";

export class SearchService {
  stallsService: StallsService;
  locationsService: LocationsService;

  constructor(
    stallsService: StallsService,
    locationsService: LocationsService
  ) {
    this.stallsService = stallsService;
    this.locationsService = locationsService;
  }

  static async build() {
    const stallsService = await StallsService.build();
    const locationsService = await LocationsService.build();
    return new SearchService(stallsService, locationsService);
  }

  async searchStalls(options: { query: string; limit: number; skip: number }) {
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

  async searchLocations(options: { query: string }) {
    const response = await axios.post("http://es:9200/locations/_search", {
      query: {
        multi_match: {
          query: options.query,
          fuzziness: "AUTO",
        },
      },
      _source: false,
    });

    const locationIds = response.data.hits.hits.map(
      (hit: { _id: string }) => hit._id
    );

    return this.locationsService.findAllByIds(locationIds);
  }
}
