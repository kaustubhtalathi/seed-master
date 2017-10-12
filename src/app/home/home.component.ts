import { Component, OnInit } from '@angular/core';

export class Seed {
  id: number;
  name: string;
  url: string;
  image: string;
  imageAlt: string;
  author: string;
}

const SEEDS: Seed[] = [
  {
    id: 1,
    name: "Angular 4",
    url: "https://github.com/mgechev/angular-seed",
    image: "../assets/images/angular.svg",
    imageAlt: "angular logo",
    author: "Minko Gechev"
  },
  {
    id: 2,
    name: "React JS",
    url: "https://github.com/badsyntax/react-seed",
    image: "../assets/images/react.svg",
    imageAlt: "react logo",
    author: "Richard Willis"
  },
  {
    id: 3,
    name: "Angular 4",
    url: "https://github.com/angular/angular-seed",
    image: "../assets/images/angular.svg",
    imageAlt: "angular logo",
    author: "Angular"
  },
  {
    id: 4,
    name: "Django",
    url: "https://github.com/Brobin/django-seed",
    image: "../assets/images/django.png",
    imageAlt: "django logo",
    author: "Tobin Brown"
  }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  seeds = SEEDS;

  constructor() { }

  ngOnInit() {
  }

}
