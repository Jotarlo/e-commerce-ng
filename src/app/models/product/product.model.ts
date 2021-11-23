import { BrandModel } from "../parameters/brand.model";
import { CategoryModel } from "../parameters/category.model";

export class ProductModel {
    id?: number;
    name?: string;
    main_image?: string;
    price?: number;
    stock?: number;
    stars?: number;
    discount?: number;
    brandId?: number;
    brand?: BrandModel;
    categories?: CategoryModel[]; 
}