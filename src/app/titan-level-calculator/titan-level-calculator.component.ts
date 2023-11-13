import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-titan-level-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './titan-level-calculator.component.html',
  styleUrl: './titan-level-calculator.component.scss',
})
export class TitanLevelCalculatorComponent {
  levelsToUp = 0;

  TitanList = [
    {
      name: 'Araji',
      image: '../assets/Araji.jpg',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
    },
    {
      name: 'Hyperion',
      image: '../assets/Hyperion.png',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
    },
    {
      name: 'Eden',
      image: '../assets/Eden.png',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
    },
    {
      name: 'Solaris',
      image: '../assets/Solaris.png',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
    },
    {
      name: 'Tenebris',
      image: '../assets/Tenebris.jpg',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
    },
    {
      name: 'Moloch',
      image: '../assets/Moloch.jpg',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
    },
    {
      name: 'Sigurd',
      image: '../assets/Sigurd.jpg',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
    },
    {
      name: 'Angus',
      image: '../assets/Angus.jpg',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
    },
    {
      name: 'Brustar',
      image: '../assets/Brustar.jpg',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
    },
    {
      name: 'Rigel',
      image: '../assets/Rigel.jpg',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
    },
    {
      name: 'Vulcan',
      image: '../assets/Vulcan.jpg',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
    },
    {
      name: 'Nova',
      image: '../assets/Nova.jpg',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
    },
    {
      name: 'Silva',
      image: '../assets/Silva.jpg',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
    },
    {
      name: 'Keros',
      image: '../assets/Keros.jpg',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
    },
    {
      name: 'Amon',
      image: '../assets/Amon.jpg',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
    },
    {
      name: 'Ignis',
      image: '../assets/Ignis.jpg',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
    },
    {
      name: 'Mairi',
      image: '../assets/Mairi.jpg',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
    },
    {
      name: 'Avalon',
      image: '../assets/Avalon.jpg',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
    },
    {
      name: 'Mort',
      image: '../assets/Mort.jpg',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
    },
    {
      name: 'Iyari',
      image: '../assets/Iyari.jpg',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
    },
  ];
}
