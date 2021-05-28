import getDbConnection from "lib/utils/get-db-connection.util";
import { Connection, Repository } from "typeorm";
import slugify from "slugify";

import { Stall } from "modules/stalls/entities/stall.entity";
import { ImagesService } from "modules/images/image.service";
import { LocationsService } from "modules/locations/locations.service";

const stores = [
  {
    name: "Vegetarian",
    stallNumber: "01-70",
    openingHours: "6am - 2pm",
    description:
      "Delicious and homely tasting vegetarian noodles. Auntie can be abit grouchy but once you talk and get to know her she is very nice and will give you more liao",
    dishes: "",
    favorites: "",
    price: "",
  },
  {
    name: "63 Laksa",
    stallNumber: "01-20",
    openingHours: "8am - 3pm",
    description:
      "Cheap and homely tasting laksa with a fragrant kick of coconut. Owner is a cool and friendly guy!",
    dishes: "",
    favorites: "",
    price: "",
  },
  {
    name: "Alexandra Village Avocado Fruit Juice",
    stallNumber: "01-14",
    openingHours: "",
    description: "-",
    dishes: "",
    favorites: "",
    price: "",
  },
  {
    name: "An Ji Traditional Hainanese Chicken Rice",
    stallNumber: "01-15",
    openingHours: "",
    description:
      "Homely, simple chicken rice that tastes like those I had in primary school. Cooked by a pair of elderly aunties that live nearby. They are also open till quite late.",
    dishes: "",
    favorites: "",
    price: "",
  },
  {
    name: "Chuan Kee Boneless Braised Duck",
    stallNumber: "01-04",
    openingHours: "10am - 8pm ",
    description:
      "Been eating their duck rice before they were famous and at the old ghim moh market. Queues are insane but the duck rice and noodles are really nice and affordable. Chilli is bombs too. Definitely happy they got a michellin bib gourmand but also means even longer queues :(",
    dishes: "Braised Duck Rice and noodles",
    favorites: "Duck Hor Fun, Gizzards, Peanuts",
    price: "",
  },
  {
    name: "Deli Snacks ",
    stallNumber: "01-23",
    openingHours: "6am-12pm",
    description:
      "Butterfly, red bean pastry is really good, especially fresh. Queue is quite long in the mornings.",
    dishes: "You Tiao, Chinese fried pastries",
    favorites: "Butterfly. red bean",
    price: "",
  },
  {
    name: "Hong Seng Fish Soup",
    stallNumber: "01-08",
    openingHours: "11am - 8pm",
    description:
      "Started as a comforting fish soup stall with generous portion but their new additions of seafood pao fan and vinegar trotters are also delicious, which shows the talent of the chef. ",
    dishes: "Fish Soup, Vinegar Trotters, Seafood Pao Fan",
    favorites: "Seafood Pao Fan",
    price: "$5 - $8",
  },
  {
    name: "Tong Fong Fatt Hainanese Boneless Chicken Rice",
    stallNumber: "01-24",
    openingHours: "10am - 8pm",
    description:
      "Best Chicken Rice in SG. Favourite stall in Ghim Moh ever since childhood. Everyone I have ever brought to try has been a convert. Their chicken is soft, sauce is packed with flavour and the soup is comfort in a bowl. The price has also stayed at $2.50 even after 15 years. If I had 1 stall to recommend in Ghim Moh Market, this would be it. Am good friends with some of the loyal aunties and uncles that have stayed on. ",
    dishes: "Chicken Rice",
    favorites: "Half a chicken and 2 rice, gizzards!",
    price: "$3 - $5",
  },
  {
    name: "Western Delights",
    stallNumber: "01-58",
    openingHours: "11am-8.30pm",
    description:
      "Always go for their chicken chop and fried chicken wings.Has a very distinctive Singaporean western taste which makes it very familiar to anyone growing up in the early 2000s. The elderly couple running the store are really friendly and nice to talk to. I always ask for extra coleslaw lol",
    dishes: "Western Food, Chicken Chop etc",
    favorites: "Chicken Chop",
    price: "$5 - $8",
  },
  {
    name: "Jin Ji Fish Soup Ban Mian",
    stallNumber: "01-13",
    openingHours: "11am - 8.45pm",
    description:
      "Relatively new stall but does some delicious ban mian. Soup is super flavourful and free-flow spring onions also helps. The owner is a nice and generous guy and I used to always eat ban mian as a post-workout meal. Highly reccommend the dry you mian with their chilli, does not dissapoint.",
    dishes: "Ban Mian and Fish Soup",
    favorites: "You Mian Dry",
    price: "$3 - $5",
  },
  {
    name: "Jin Hua Mixed Veg Rice",
    stallNumber: "01-57",
    openingHours: "9.30am - 7.30pm. Rest day random",
    description:
      "Good and cheap cai fan. Very home-cooked style, run by uncle and auntie and their son. Somedays their dishes can be amazing when the chef feels like it. A staple in Ghim Moh market, would recommend it for the unique taste profile",
    dishes: "Economical Rice Cai Fan",
    favorites: "Cabbage, Minced Pork",
    price: "$3 - $5",
  },
  {
    name: "House of Prawn",
    stallNumber: "01-62",
    openingHours: "",
    description:
      "Took over from the previous prawn noodle recently, run by 2 aunties who know how to make a mean prawn noodle. The soup is super flavourful and the noodles tasty and springy. Small option is also at $3, so many people are lined up for breakfast, lunch and dinner! ",
    dishes: "Prawn Noodles",
    favorites: "Dry Prawn Noodles ",
    price: "$3 - $5",
  },
  {
    name: "HuaLe Curry Rice",
    stallNumber: "01-03",
    openingHours: "",
    description:
      "Not your typical Hainan Curry Rice stall, flavours are quite unique and more chinese influenced(?) The family that runs this business are friendly and pleasant to interact with. Sometimes you even get extra at the end of the day. Highly recommend the bitter gourd with egg, stir-fried to perfection",
    dishes: "Curry Rice",
    favorites: "Bitter gourd with egg, Fried Cutlet",
    price: "$3 - $5",
  },
];

export class StallsService {
  private connection: Connection;
  private stallsRepository: Repository<Stall>;
  private imagesService: ImagesService;
  private locationsService: LocationsService;

  constructor(
    connection: Connection,
    stallsRepository: Repository<Stall>,
    imagesService: ImagesService,
    locationsService: LocationsService
  ) {
    this.connection = connection;
    this.stallsRepository = stallsRepository;
    this.imagesService = imagesService;
    this.locationsService = locationsService;
  }

  static async build() {
    const connection = await getDbConnection();
    const stallsRepository = connection.getRepository(
      "Stall"
    ) as Repository<Stall>;
    const imagesService = await ImagesService.build();
    const locationsService = await LocationsService.build();

    return new StallsService(
      connection,
      stallsRepository,
      imagesService,
      locationsService
    );
  }

  findAllSlugs(locationSlug: string) {
    return this.stallsRepository
      .createQueryBuilder("stall")
      .select(["stall.slug"])
      .leftJoin("stall.location", "location")
      .where("location.slug = :locationSlug", { locationSlug })
      .getMany();
  }

  findAll(options: { limit?: number; skip?: number; orderBy?: any[] } = {}) {
    return this.stallsRepository
      .createQueryBuilder("stall")
      .select([
        "stall.id",
        "stall.name",
        "stall.stallNumber",
        "stall.information",
        "stall.slug",
        "stall.createdAt",
        "stall.updatedAt",
        "images.link",
        "images.compressedBase64",
        "location.name",
        "location.slug",
        "locationImages.link",
      ])
      .leftJoin("stall.images", "images")
      .leftJoin("stall.location", "location")
      .leftJoin("location.images", "locationImages")
      .orderBy(
        options.orderBy ? options.orderBy[0] : "stall.name",
        options.orderBy ? options.orderBy[1] : "ASC"
      )
      .skip(options.skip)
      .take(options.limit)
      .getMany();
  }

  findOneDeep(locationSlug: string, stallSlug: string) {
    return this.stallsRepository
      .createQueryBuilder("stall")
      .select([
        "stall.name",
        "stall.stallNumber",
        "stall.information",
        "stall.createdAt",
        "stall.updatedAt",
        "images.link",
        "images.compressedBase64",
        "locationImages.link",
      ])
      .leftJoin("stall.images", "images")
      .leftJoinAndSelect("stall.location", "location")
      .leftJoin("location.images", "locationImages")
      .where("location.slug = :locationSlug AND stall.slug = :stallSlug", {
        locationSlug,
        stallSlug,
      })
      .getOne();
  }

  async create() {
    if (process.env.NODE_ENV === "development") {
      for (const store of stores) {
        const image = await this.imagesService.create({
          link: `images/hawker-centers/ghim-moh-market-and-hawker-centre/${slugify(
            store.name,
            { replacement: "-", lower: true }
          )}.jpg`,
        });

        const stall = new Stall();
        stall.images = [image];
        stall.name = store.name;
        stall.stallNumber = store.stallNumber;

        const openingHours =
          store.openingHours.trim().length > 0 ? store.openingHours : undefined;
        const dishes =
          store.dishes.trim().length > 0 ? store.dishes : undefined;
        const description =
          store.description.trim().length > 0 ? store.description : undefined;
        const price = store.price.trim().length > 0 ? store.price : undefined;
        const favorites =
          store.favorites.trim().length > 0 ? store.favorites : undefined;
        let descriptionObj: any = {};
        if (openingHours) {
          descriptionObj.openingHours = openingHours;
        }
        if (dishes) {
          descriptionObj.dishes = dishes;
        }
        if (description) {
          descriptionObj.description = description;
        }
        if (price) {
          descriptionObj.price = price;
        }
        if (favorites) {
          descriptionObj.favorites = favorites;
        }

        stall.information = descriptionObj;
        stall.slug = slugify(store.name, { replacement: "-", lower: true });
        stall.location = await this.locationsService.findOne({
          where: { id: "ad62f958-5900-47e9-8597-bad96b0b2496" },
        });
        await this.stallsRepository.save(stall);
      }
    }
  }
}
