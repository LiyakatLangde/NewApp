import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-filter',
  imports: [FormsModule],
  templateUrl: './select-filter.component.html',
  styleUrl: './select-filter.component.css'
})
export class SelectFilterComponent {
  title = 'Mango'; // Set the title to compare with
  items = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Grapes', 'Mango'];
  selectedValue = ''; // Holds the current dropdown selection

  // Get items to display based on the selected value
  getFilteredItems() {
    if (this.selectedValue === this.title) {
      return [this.selectedValue];
    }
    return [];
  }
}
