import { Pipe, PipeTransform }  from "@angular/core";
import { Product } from "../models/product.model";

@Pipe({ name: 'sortByDate' })
export class SortByDatePipe implements PipeTransform{
  transform(products: Product[], order?: any) {
    let desc = !(order && order === 'asc');
    return products.sort((a,b) => {
      if (desc) return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
      else return new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime()
    });
  }
}

@Pipe({ name: 'filterByName' })
export class FilterByNamePipe implements PipeTransform {
  transform(products: Product[], term: string, order?: any) {
    let desc = !(order && order === 'asc');
    if(term) {
      return products.filter((p) =>p.title.toLowerCase().includes(term.toLowerCase()))
    } else return products;

  }
}

@Pipe({ name: 'toBold' })
export class ToBoldPipe implements PipeTransform {
  transform(text: string) {
    return `<b>${text}</b>`
  }
}
