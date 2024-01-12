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

  TitanCost: TitanLevelUpInformation[] = [
    {
      level: 1,
      titanPotionToNext: '100',
      total: 0,
    },
    {
      level: 2,
      titanPotionToNext: '110',
      total: 100,
    },
    {
      level: 3,
      titanPotionToNext: '120',
      total: 210,
    },
    {
      level: 4,
      titanPotionToNext: '130',
      total: 330,
    },
    {
      level: 5,
      titanPotionToNext: '140',
      total: 460,
    },
    {
      level: 6,
      titanPotionToNext: '150',
      total: 600,
    },
    {
      level: 7,
      titanPotionToNext: '160',
      total: 750,
    },
    {
      level: 8,
      titanPotionToNext: '170',
      total: 910,
    },
    {
      level: 9,
      titanPotionToNext: '180',
      total: 1080,
    },
    {
      level: 10,
      titanPotionToNext: '190',
      total: 1260,
    },
    {
      level: 11,
      titanPotionToNext: '200',
      total: 1450,
    },
    {
      level: 12,
      titanPotionToNext: '210',
      total: 1650,
    },
    {
      level: 13,
      titanPotionToNext: '220',
      total: 1860,
    },
    {
      level: 14,
      titanPotionToNext: '230',
      total: 2080,
    },
    {
      level: 15,
      titanPotionToNext: '240',
      total: 2310,
    },
    {
      level: 16,
      titanPotionToNext: '250',
      total: 2550,
    },
    {
      level: 17,
      titanPotionToNext: '260',
      total: 2800,
    },
    {
      level: 18,
      titanPotionToNext: '270',
      total: 3060,
    },
    {
      level: 19,
      titanPotionToNext: '280',
      total: 3330,
    },
    {
      level: 20,
      titanPotionToNext: '290',
      total: 3610,
    },
    {
      level: 21,
      titanPotionToNext: '300',
      total: 3900,
    },
    {
      level: 22,
      titanPotionToNext: '310',
      total: 4200,
    },
    {
      level: 23,
      titanPotionToNext: '320',
      total: 4510,
    },
    {
      level: 24,
      titanPotionToNext: '330',
      total: 4830,
    },
    {
      level: 25,
      titanPotionToNext: '340',
      total: 5160,
    },
    {
      level: 26,
      titanPotionToNext: '350',
      total: 5500,
    },
    {
      level: 27,
      titanPotionToNext: '360',
      total: 5850,
    },
    {
      level: 28,
      titanPotionToNext: '370',
      total: 6210,
    },
    {
      level: 29,
      titanPotionToNext: '380',
      total: 6580,
    },
    {
      level: 30,
      titanPotionToNext: '390',
      total: 6960,
    },
    {
      level: 31,
      titanPotionToNext: '440',
      total: 7350,
    },
    {
      level: 32,
      titanPotionToNext: '490',
      total: 7790,
    },
    {
      level: 33,
      titanPotionToNext: '540',
      total: 8280,
    },
    {
      level: 34,
      titanPotionToNext: '590',
      total: 8820,
    },
    {
      level: 35,
      titanPotionToNext: '640',
      total: 9410,
    },
    {
      level: 36,
      titanPotionToNext: '690',
      total: 10050,
    },
    {
      level: 37,
      titanPotionToNext: '740',
      total: 10740,
    },
    {
      level: 38,
      titanPotionToNext: '790',
      total: 11480,
    },
    {
      level: 39,
      titanPotionToNext: '840',
      total: 12270,
    },
    {
      level: 40,
      titanPotionToNext: '890',
      total: 13110,
    },
    {
      level: 41,
      titanPotionToNext: '940',
      total: 14000,
    },
    {
      level: 42,
      titanPotionToNext: '990',
      total: 14940,
    },
    {
      level: 43,
      titanPotionToNext: '1040',
      total: 15930,
    },
    {
      level: 44,
      titanPotionToNext: '1090',
      total: 16970,
    },
    {
      level: 45,
      titanPotionToNext: '1140',
      total: 18060,
    },
    {
      level: 46,
      titanPotionToNext: '1190',
      total: 19200,
    },
    {
      level: 47,
      titanPotionToNext: '1240',
      total: 20390,
    },
    {
      level: 48,
      titanPotionToNext: '1290',
      total: 21630,
    },
    {
      level: 49,
      titanPotionToNext: '1340',
      total: 22920,
    },
    {
      level: 50,
      titanPotionToNext: '1390',
      total: 24260,
    },
    {
      level: 51,
      titanPotionToNext: '1490',
      total: 25650,
    },
    {
      level: 52,
      titanPotionToNext: '1590',
      total: 27140,
    },
    {
      level: 53,
      titanPotionToNext: '1690',
      total: 28730,
    },
    {
      level: 54,
      titanPotionToNext: '1790',
      total: 30420,
    },
    {
      level: 55,
      titanPotionToNext: '1890',
      total: 32210,
    },
    {
      level: 56,
      titanPotionToNext: '1990',
      total: 34100,
    },
    {
      level: 57,
      titanPotionToNext: '2090',
      total: 36090,
    },
    {
      level: 58,
      titanPotionToNext: '2190',
      total: 38180,
    },
    {
      level: 59,
      titanPotionToNext: '2290',
      total: 40370,
    },
    {
      level: 60,
      titanPotionToNext: '2390',
      total: 42660,
    },
    {
      level: 61,
      titanPotionToNext: '2490',
      total: 45050,
    },
    {
      level: 62,
      titanPotionToNext: '2590',
      total: 47540,
    },
    {
      level: 63,
      titanPotionToNext: '2690',
      total: 50130,
    },
    {
      level: 64,
      titanPotionToNext: '2790',
      total: 52820,
    },
    {
      level: 65,
      titanPotionToNext: '2890',
      total: 55610,
    },
    {
      level: 66,
      titanPotionToNext: '2990',
      total: 58500,
    },
    {
      level: 67,
      titanPotionToNext: '3090',
      total: 61490,
    },
    {
      level: 68,
      titanPotionToNext: '3190',
      total: 64580,
    },
    {
      level: 69,
      titanPotionToNext: '3290',
      total: 67770,
    },
    {
      level: 70,
      titanPotionToNext: '3390',
      total: 71060,
    },
    {
      level: 71,
      titanPotionToNext: '3590',
      total: 74450,
    },
    {
      level: 72,
      titanPotionToNext: '3790',
      total: 78040,
    },
    {
      level: 73,
      titanPotionToNext: '3990',
      total: 81830,
    },
    {
      level: 74,
      titanPotionToNext: '4190',
      total: 85820,
    },
    {
      level: 75,
      titanPotionToNext: '4390',
      total: 90010,
    },
    {
      level: 76,
      titanPotionToNext: '4590',
      total: 94400,
    },
    {
      level: 77,
      titanPotionToNext: '4790',
      total: 98990,
    },
    {
      level: 78,
      titanPotionToNext: '4990',
      total: 103780,
    },
    {
      level: 79,
      titanPotionToNext: '5190',
      total: 108770,
    },
    {
      level: 80,
      titanPotionToNext: '5390',
      total: 113960,
    },
    {
      level: 81,
      titanPotionToNext: '5590',
      total: 119350,
    },
    {
      level: 82,
      titanPotionToNext: '5990',
      total: 124940,
    },
    {
      level: 83,
      titanPotionToNext: '6390',
      total: 130930,
    },
    {
      level: 84,
      titanPotionToNext: '6790',
      total: 137320,
    },
    {
      level: 85,
      titanPotionToNext: '7190',
      total: 144110,
    },
    {
      level: 86,
      titanPotionToNext: '7590',
      total: 151300,
    },
    {
      level: 87,
      titanPotionToNext: '7990',
      total: 158890,
    },
    {
      level: 88,
      titanPotionToNext: '8390',
      total: 166880,
    },
    {
      level: 89,
      titanPotionToNext: '8790',
      total: 175270,
    },
    {
      level: 90,
      titanPotionToNext: '9190',
      total: 184060,
    },
    {
      level: 91,
      titanPotionToNext: '9590',
      total: 193250,
    },
    {
      level: 92,
      titanPotionToNext: '9990',
      total: 202840,
    },
    {
      level: 93,
      titanPotionToNext: '10390',
      total: 212830,
    },
    {
      level: 94,
      titanPotionToNext: '10790',
      total: 223220,
    },
    {
      level: 95,
      titanPotionToNext: '11190',
      total: 234010,
    },
    {
      level: 96,
      titanPotionToNext: '11590',
      total: 245200,
    },
    {
      level: 97,
      titanPotionToNext: '11990',
      total: 256790,
    },
    {
      level: 98,
      titanPotionToNext: '12390',
      total: 268780,
    },
    {
      level: 99,
      titanPotionToNext: '12790',
      total: 281170,
    },
    {
      level: 100,
      titanPotionToNext: '13390',
      total: 293960,
    },
    {
      level: 101,
      titanPotionToNext: '13990',
      total: 307350,
    },
    {
      level: 102,
      titanPotionToNext: '14590',
      total: 321340,
    },
    {
      level: 103,
      titanPotionToNext: '15190',
      total: 335930,
    },
    {
      level: 104,
      titanPotionToNext: '15790',
      total: 351120,
    },
    {
      level: 105,
      titanPotionToNext: '16390',
      total: 366910,
    },
    {
      level: 106,
      titanPotionToNext: '16990',
      total: 383300,
    },
    {
      level: 107,
      titanPotionToNext: '17590',
      total: 400290,
    },
    {
      level: 108,
      titanPotionToNext: '18190',
      total: 417880,
    },
    {
      level: 109,
      titanPotionToNext: '18790',
      total: 436070,
    },
    {
      level: 110,
      titanPotionToNext: '19590',
      total: 454860,
    },
    {
      level: 111,
      titanPotionToNext: '20390',
      total: 474450,
    },
    {
      level: 112,
      titanPotionToNext: '21190',
      total: 494840,
    },
    {
      level: 113,
      titanPotionToNext: '21990',
      total: 516030,
    },
    {
      level: 114,
      titanPotionToNext: '22790',
      total: 538020,
    },
    {
      level: 115,
      titanPotionToNext: '23590',
      total: 560810,
    },
    {
      level: 116,
      titanPotionToNext: '24390',
      total: 584400,
    },
    {
      level: 117,
      titanPotionToNext: '25190',
      total: 608790,
    },
    {
      level: 118,
      titanPotionToNext: '25990',
      total: 633980,
    },
    {
      level: 119,
      titanPotionToNext: '26790',
      total: 659970,
    },
    {
      level: 120,
      titanPotionToNext: '-',
      total: 686760,
    },
  ];

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
    // this.http
    //   .get<TitanLevelUpInformation[]>('./assets/titan-cost.json')
    //   .subscribe(
    //     (data) => {
    //       this.TitanCost = data; // Assign the fetched data to TitanCost
    //     },
    //     (error) => {
    //       console.error('Error fetching titan-cost.json', error);
    //     }
    //   );
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
