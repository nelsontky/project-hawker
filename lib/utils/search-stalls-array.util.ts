import Fuse from "fuse.js";

import { Stall } from "modules/stalls/entities/stall.entity";

export function searchStallsArray(searchTerm: string, stallsArray: Stall[]) {
  const keys = [
    "name",
    "location.name",
    "stallNumber",
    "information.deliveryAvailable",
    "information.contact",
    "information.foodTheyServe",
    "information.favorites",
    "information.dietaryRestrictions",
    "information.priceRange",
    "information.nameOfHawker",
    "information.moreAboutThisHawker",
    "information.openingHours",
    "information.whatAreTheConcernsThisHawkerIsFacing",
    "information.recommendedBy",
  ];

  const fuse = new Fuse(stallsArray, {
    includeScore: true,
    minMatchCharLength: 3,
    keys,
  });
  return fuse.search(searchTerm);
}
