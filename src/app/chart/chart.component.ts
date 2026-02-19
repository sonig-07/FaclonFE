// import { Component, Input } from '@angular/core';

// export interface ChartSeries {
//   name: string;
//   value: number;
//   color: string;
// }

// export interface ChartOptions {
//   type: 'column' | 'line' | 'pie';
//   title: string;
//   series: ChartSeries[];
// }

// @Component({
//   selector: 'io-chart',
//   templateUrl: './chart.component.html',
//   styleUrls: ['./chart.component.scss']
// })
// export class ChartComponent {

//   @Input() chartOptions!: ChartOptions;

//   // fixed multiplier so bars always visible
//   multiplier = 3;

// }



import { Component, Input, OnChanges } from '@angular/core';

export interface ChartSeries {
  name: string;
  value: number;
  color: string;
}

export interface ChartOptions {
  type: 'column' | 'line' | 'pie';
  title: string;
  series: ChartSeries[];
}

@Component({
  selector: 'io-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnChanges {

  @Input() chartOptions!: ChartOptions;

  maxValue = 0;
  multiplier = 1;

  ngOnChanges() {

    if (!this.chartOptions) return;

    this.maxValue = Math.max(...this.chartOptions.series.map(s => s.value));

    this.multiplier = 250 / this.maxValue;

  }

  getLinePoints() {

    return this.chartOptions.series
      .map((s, i) => {

        const x = 100 + i * 150;
        const y = 300 - s.value * this.multiplier;

        return `${x},${y}`;

      }).join(' ');

  }

  getTotal() {

    return this.chartOptions.series.reduce((sum, s) => sum + s.value, 0);

  }

  getPieSlice(index: number) {

    const total = this.getTotal();

    let startAngle = 0;

    for (let i = 0; i < index; i++) {

      startAngle += this.chartOptions.series[i].value / total * 360;

    }

    const value = this.chartOptions.series[index].value;

    const angle = value / total * 360;

    const endAngle = startAngle + angle;

    const radius = 100;

    const cx = 300;
    const cy = 200;

    const x1 = cx + radius * Math.cos(Math.PI * startAngle / 180);
    const y1 = cy + radius * Math.sin(Math.PI * startAngle / 180);

    const x2 = cx + radius * Math.cos(Math.PI * endAngle / 180);
    const y2 = cy + radius * Math.sin(Math.PI * endAngle / 180);

    const largeArc = angle > 180 ? 1 : 0;

    return `
      M ${cx} ${cy}
      L ${x1} ${y1}
      A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}
      Z
    `;

  }

}
