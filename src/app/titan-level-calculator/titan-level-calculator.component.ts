import { Component, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TitanInformation } from '../interfaces/titan-information';
import { TitanLevelUpInformation } from '../interfaces/titan-level-up-information';

@Component({
  selector: 'app-titan-level-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './titan-level-calculator.component.html',
  styleUrl: './titan-level-calculator.component.scss',
})
export class TitanLevelCalculatorComponent implements OnInit {
  levelsToUp: number = 0;
  totalCost: number = 0;

  TitanCost: TitanLevelUpInformation[];

  constructor(private http: HttpClient) {
    this.TitanCost = [];
  }

  TitanList: TitanInformation[] = [
    {
      name: 'Araji',
      image: '../assets/titan-images/Araji.jpg',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
      selected: true,
    },
    {
      name: 'Hyperion',
      image: '../assets/titan-images/Hyperion.png',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
      selected: true,
    },
    {
      name: 'Eden',
      image: '../assets/titan-images/Eden.png',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
      selected: true,
    },
    {
      name: 'Solaris',
      image: '../assets/titan-images/Solaris.png',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
      selected: true,
    },
    {
      name: 'Tenebris',
      image: '../assets/titan-images/Tenebris.png',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
      selected: true,
    },
    {
      name: 'Moloch',
      image: '../assets/titan-images/Moloch.png',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
      selected: true,
    },
    {
      name: 'Sigurd',
      image: '../assets/titan-images/Sigurd.jpg',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
      selected: true,
    },
    {
      name: 'Angus',
      image: '../assets/titan-images/Angus.jpg',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
      selected: true,
    },
    {
      name: 'Brustar',
      image: '../assets/titan-images/Brustar.png',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
      selected: true,
    },
    {
      name: 'Rigel',
      image: '../assets/titan-images/Rigel.png',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
      selected: true,
    },
    {
      name: 'Vulcan',
      image: '../assets/titan-images/Vulcan.png',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
      selected: true,
    },
    {
      name: 'Nova',
      image: '../assets/titan-images/Nova.jpg',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
      selected: true,
    },
    {
      name: 'Silva',
      image: '../assets/titan-images/Silva.png',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
      selected: true,
    },
    {
      name: 'Keros',
      image: '../assets/titan-images/Keros.png',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
      selected: true,
    },
    {
      name: 'Amon',
      image: '../assets/titan-images/Amon.png',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
      selected: true,
    },
    {
      name: 'Ignis',
      image: '../assets/titan-images/Ignis.png',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
      selected: true,
    },
    {
      name: 'Mairi',
      image: '../assets/titan-images/Mairi.jpg',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
      selected: true,
    },
    {
      name: 'Avalon',
      image: '../assets/titan-images/Avalon.png',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
      selected: true,
    },
    {
      name: 'Mort',
      image: '../assets/titan-images/Mort.png',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
      selected: true,
    },
    {
      name: 'Iyari',
      image: '../assets/titan-images/Iyari.png',
      currentLevel: 1,
      timesToLevelUp: 0,
      cost: 0,
      selected: true,
    },
  ];

  exportTitanList() {
    const exportedData = this.TitanList.map(
      ({ name, currentLevel, selected }) => ({ name, currentLevel, selected })
    );

    const jsonBlob = new Blob([JSON.stringify(exportedData)], {
      type: 'application/json',
    });
    const url = window.URL.createObjectURL(jsonBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'titan_list.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  importTitanList() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (event: any) => {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const importedData = JSON.parse(reader.result as string);
        this.TitanList.forEach((titan) => {
          const importedTitan = importedData.find(
            (importedTitan: any) => importedTitan.name === titan.name
          );
          if (importedTitan) {
            titan.currentLevel = importedTitan.currentLevel;
            titan.selected = importedTitan.selected;
          }
        });
        this.calculateTitanCost(this.levelsToUp);
      };

      reader.readAsText(file);
    };

    input.click();
  }

  ngOnInit(): void {
    this.http
      .get<TitanLevelUpInformation[]>('./assets/titan-cost.json')
      .subscribe(
        (data) => {
          this.TitanCost = data; // Assign the fetched data to TitanCost
        },
        (error) => {
          console.error('Error fetching titan-cost.json', error);
        }
      );
  }

  calculateTitanCost(levelsRequired: number) {
    this.totalCost = 0;
    this.TitanList.forEach((titan) => {
      titan.timesToLevelUp = 0;
      titan.cost = 0;
    });

    const selectedTitans = this.TitanList.filter((titan) => titan.selected);

    for (let i = 0; i < levelsRequired; i++) {
      const lowestLevel = Math.min(
        ...selectedTitans.map(
          (titan: TitanInformation) => titan.currentLevel + titan.timesToLevelUp
        )
      );

      const titanToLevel: TitanInformation | undefined = selectedTitans.find(
        (titan: TitanInformation) =>
          titan.currentLevel + titan.timesToLevelUp == lowestLevel
      );

      if (titanToLevel) {
        const titanCostForLevel: TitanLevelUpInformation | undefined =
          this.TitanCost.find(
            (cost: TitanLevelUpInformation) =>
              cost.level ==
              titanToLevel.currentLevel + titanToLevel.timesToLevelUp
          );
        if (titanCostForLevel) {
          this.totalCost += parseInt(titanCostForLevel.titanPotionToNext, 10);
          titanToLevel.cost += parseInt(
            titanCostForLevel.titanPotionToNext,
            10
          );
        }
        titanToLevel.timesToLevelUp += 1;
      }
    }
  }
}
