import { Component } from '@angular/core';
import { CatalogService } from '../catalog-service';
@Component({
  selector: 'app-catalog',
  standalone: false,
  styleUrl: './catalog.css',
  templateUrl: './catalog.html',
})
export class Catalog {
  categories: any = [];

  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.categories = this.catalogService.getCategories();
  }
}
