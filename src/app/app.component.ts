import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('picker') datePicker: any;

  availableDates = ['5', '6', '10', '13', '16', '17', '21', '26', '27'];

  openDatePicker() {
    this.datePicker.open();
  }

  datePickerOpened(event) {
    setTimeout(() => {
      const cells = document.querySelectorAll('.mat-calendar-body-cell-content');
      for (let cell of cells) {
        if (this.availableDates.includes(cell.textContent)) {
          cell.classList.add('available-date');
        }
      }
    }, 200);
  }
}
