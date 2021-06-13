import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsArray,
  ArrayNotEmpty,
} from "class-validator";

export class CreateStallDto {
  @IsString()
  @IsNotEmpty()
  recommendedBy: string;

  @IsString()
  @IsNotEmpty()
  stallName: string;

  @IsString()
  @IsNotEmpty()
  moreAboutThisHawker: string;

  @IsString()
  @IsNotEmpty()
  locationId: string;

  @IsArray()
  @ArrayNotEmpty()
  imageLinks: string[];

  @IsString()
  @IsOptional()
  contact?: string;

  @IsString()
  @IsOptional()
  deliveryAvailable?: string;

  @IsString()
  @IsOptional()
  dietaryRestrictions?: string;

  @IsString()
  @IsOptional()
  favorites?: string;

  @IsString()
  @IsOptional()
  foodTheyServe?: string;

  @IsString()
  @IsOptional()
  nameOfHawker?: string;

  @IsString()
  @IsOptional()
  openingHours?: string;

  @IsString()
  @IsOptional()
  priceRange?: string;

  @IsString()
  @IsOptional()
  stallNumber?: string;

  @IsString()
  @IsOptional()
  whatAreTheConcernsThisHawkerIsFacing?: string;
}
