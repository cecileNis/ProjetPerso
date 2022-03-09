import { Injectable} from "@angular/core";
import { Product } from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class  ProductsService {
  products: Product[] = [
    new Product(
      "Peluche miniature Simba",
      "Le jeune Simba a hâte de régner sur votre collection de peluches ! Inspirée du Roi Lion, cette peluche miniature adorable comporte une queue et une crinière touffues, ainsi qu'un visage brodé.",
      "https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/412359718947?fmt=webp&qlt=70&wid=2060&hei=2060&defaultImage=no-image-image_fr",
      1290,
      false,
      0,
      new Date('2022-02-26'),
      ['S']
    ),
    new Product(
      "Peluche Lucky, Les 101 Dalmatiens",
      "Laissez-vous séduire par notre douce et câline peluche Lucky ! Criant de vérité, l'adorable chiot des 101 Dalmatiens arbore des taches sur sa robe en peluche et porte un collier en tissu rouge.",
      "https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/412355696072?fmt=webp&qlt=70&wid=2060&hei=2060&defaultImage=no-image-image_fr",
      1290,
      false,
      0,
      new Date('2022-02-27'),
      ['S', 'M']
    ),
    new Product(
      "Peluche La Bête de La Belle et la Bête",
      "Superbement détaillée, cette peluche La Bête est aussi vraie que nature. Dotée d'une élégante veste, de longs poils, d'une queue et de griffes, elle est parfaitement effrayante !",
      "https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/412314333901?fmt=webp&qlt=70&wid=2060&hei=2060&defaultImage=no-image-image_fr",
      1590,
      false,
      0,
      new Date('2022-02-28'),
      ['S','M','XL']
    ),
    new Product(
      "Peluche Belle Disney nuiMOs",
      "Plongez votre collection de peluches Disney nuiMOs dans la magie d'une histoire éternelle avec Belle ! Les nuiMOs nous viennent tout droit du Japon. Il s'agit d'une nouvelle collection toute douce de vos compagnons Disney préférés, que vous pouvez habiller avec un large éventail de tenues chic, colorées et amusantes au gré de vos envies. Vous allez adorer la collection Disney nuiMOs !",
      "https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/412342385583?fmt=webp&qlt=70&wid=2060&hei=2060&defaultImage=no-image-image_fr",
      2290,
      false,
      0,
      new Date('2022-02-09'),
      ['S','M','XL']
    ),
    new Product(
      "Peluche Lady, La Belle et le Clochard",
      "La jolie cocker a tout d'une lady avec ses oreilles tombantes duveteuses et ses grands yeux rêveurs. Cette adorable peluche s'accompagne d'un collier et d'une médaille en relief.",
      "https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/412322163316?fmt=webp&qlt=70&wid=2060&hei=2060&defaultImage=no-image-image_fr",
      1290,
      false,
      0,
      new Date('2022-02-27'),
      ['S', 'M', 'XL', 'XXL']
    ),
    new Product(
      "Peluche miniature Stitch",
      "L'extraterrestre le plus adorable de la galaxie rejoint votre ohana avec notre ravissante peluche miniature Stitch ! Avec ses grands yeux brodés et ses cheveux ébouriffés, il donnera le sourire à votre tout-petit.",
      "https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/412358469550?fmt=webp&qlt=70&wid=2060&hei=2060&defaultImage=no-image-image_fr",
      1290,
      false,
      0,
      new Date('2022-02-27'),
      ['S']
    ),
    new Product(
      "Peluche Dumbo assis",
      "L'adorable éléphanteau va conquérir tous les coeurs avec ses grands yeux bleus et ses oreilles géantes ! Petit et doux, il accompagnera votre petit trésor dans toutes ses aventures. Ce compagnon de jeu idéal est toujours là pour de gros câlins.",
      "https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/412359084660?fmt=webp&qlt=70&wid=2060&hei=2060&defaultImage=no-image-image_fr",
      1290,
      false,
      0,
      new Date('2022-02-27'),
      ['S', 'M']
    ),
    new Product(
      "Peluche Tigrou Disney nuiMOs",
      "Ti-grrrr-ouh ! Ça se prononce Tigrou ! Les nuiMOs nous viennent tout droit du Japon. Il s'agit d'une nouvelle collection toute douce de vos compagnons Disney préférés, que vous pouvez habiller avec un large éventail de tenues chic, colorées et amusantes au gré de vos envies. Vous allez adorer la collection Disney nuiMOs !",
      "https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/412341304820?fmt=webp&qlt=70&wid=2060&hei=2060&defaultImage=no-image-image_fr",
      1790,
      false,
      0,
      new Date('2022-02-27'),
      ['S', 'XL']
    ),
    new Product(
      "Peluche Rox, Rox et Rouky",
      "Voilà une peluche rusée comme tout ! Plus vraie que nature, elle présente une texture toute douce et des détails brodés. Rox n'a jamais été aussi craquant !",
      "https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/412315692199?fmt=webp&qlt=70&wid=2060&hei=2060&defaultImage=no-image-image_fr",
      3090,
      false,
      0,
      new Date('2022-02-27'),
      ['M', 'XL']
    ),
    new Product(
      "Peluche Rouky, Rox et Rouky",
      "Quoi de plus beau que l'amitié entre un renard et un chien de chasse ? Plus vraie que nature, cette peluche présente une texture toute douce et des détails brodés. Rouky n'a jamais été aussi craquant !",
      "https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/412315692274?fmt=webp&qlt=70&wid=2060&hei=2060&defaultImage=no-image-image_fr",
      3090,
      false,
      0,
      new Date('2022-02-27'),
      ['M', 'XL']
    )
  ];

  getAllProducts(): Product[] {
    return this.products;
  }

  onLikeProduct(product:Product): void {
    if(product.isLiked) {
      product.likes--;
    } else {
      product.likes++;
    }
    product.isLiked = !product.isLiked;
  }
}

