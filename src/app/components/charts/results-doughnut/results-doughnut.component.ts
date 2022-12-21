import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-results-doughnut',
  templateUrl: './results-doughnut.component.html',
  styleUrls: ['./results-doughnut.component.scss']
})



export class ResultsDoughnutComponent implements OnInit {
  @Input() data!: any;
  dataSet : number[] = [];
  labelSet : string[] = [];
  ngOnInit(): void {

    console.log(this.data)
    for(let answer  of this.data){
      // Push In value
      this.dataSet.push(answer.value)

      // Push in Label
      this.labelSet.push(answer.name)

    }

    var myChart = new Chart("myChart", {
      type: 'doughnut',
      data: {
          labels: this.labelSet,
          datasets: [{
              label: '# of Votes',
              data: this.dataSet,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
          }]
      }
  });
  }
}
