import slugify from "slugify";

import getDbConnection from "../../lib/utils/get-db-connection.util";
import { compressImage } from "./compress-image";
import { Stall } from "../../modules/stalls/entities/stall.entity";
import { Image } from "../../modules/images/entities/image.entity";
import { Location } from "../../modules/locations/entities/location.entity";
import { Repository } from "typeorm";

export async function addToDatabase(row: any, imageNames: any[] = []) {
  const connection = await getDbConnection();
  const stallsRepository = connection.getRepository(
    "Stall"
  ) as Repository<Stall>;
  const imagesRepository = connection.getRepository(
    "Image"
  ) as Repository<Image>;
  const locationsRepository = connection.getRepository(
    "Location"
  ) as Repository<Location>;

  const {
    stallName,
    region,
    stallNumber,
    postalCode,
    locationName,
    images: imagesRemoved,
    folderId,
    ...rest
  } = row;

  let location = await locationsRepository.findOne({ postalCode });
  if (!location) {
    // Create new location
    const newLocation = new Location();
    newLocation.name = locationName;
    newLocation.slug = slugify(locationName, {
      replacement: "-",
      lower: true,
    });
    newLocation.postalCode = "" + postalCode;
    newLocation.region = region;

    location = await locationsRepository.save(newLocation);
  }

  const images = [];
  for (const imageName of imageNames) {
    const image = new Image();
    const path = "public/images/submissions/" + imageName.fileName;
    image.compressedImage = await compressImage(path);
    image.link = "/images/submissions/" + imageName.fileName;
    const result = await imagesRepository.save(image);
    images.push(result);
  }

  const stall = new Stall();
  stall.images = images;
  stall.name = stallName;
  stall.slug = slugify(stallName, { replacement: "-", lower: true });
  stall.stallNumber = stallNumber;
  stall.location = location;
  stall.information = Object.keys(rest).reduce((acc, curr) => {
    if (
      !rest[curr] ||
      curr.trim().length == 0 ||
      rest[curr].trim().length === 0
    ) {
      return acc;
    }
    return { ...acc, [curr]: rest[curr] };
  }, {});
  await stallsRepository.save(stall);
}
