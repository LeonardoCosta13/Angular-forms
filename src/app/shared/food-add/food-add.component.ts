import { Component, OnInit } from '@angular/core';

// Service
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  constructor(private foodListerService: FoodListService) { }

  ngOnInit(): void {
  }

    public listAddItem(value: string){
      return this.foodListerService.foodListAdd(value);
    }
}
