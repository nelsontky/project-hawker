import { IsString, IsOptional, IsEnum } from "class-validator";
import { PostStatus } from "../entities/scrape-facebook.entity";

export class UpdateFacebookDto {
  @IsString()
  @IsOptional()
  recommendedBy?: string;

  @IsString()
  @IsOptional()
  stallName?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  locationId?: string;

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

  @IsEnum(PostStatus)
  status?: PostStatus;

  @IsString()
  @IsOptional()
  whatAreTheConcernsThisHawkerIsFacing?: string;
}