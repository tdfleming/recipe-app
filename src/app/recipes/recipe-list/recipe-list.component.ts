import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a test', 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Indonesian_Food.png'), 
    new Recipe('A test recipe', 'this is a test', 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Indonesian_Food.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
