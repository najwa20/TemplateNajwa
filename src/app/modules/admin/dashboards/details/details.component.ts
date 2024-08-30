import { CurrencyPipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { ApexOptions, NgApexchartsModule } from 'ng-apexcharts';
import { Subject, takeUntil } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDateRangeInput, MatDateRangePicker } from '@angular/material/datepicker';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DetailsComponent,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDateRangeInput,
    MatDateRangePicker,
    TranslocoModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatMenuModule,
    MatTabsModule,
    MatButtonToggleModule,
    NgApexchartsModule,
    MatTableModule,
    NgClass,
    CurrencyPipe,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  menuItems = [
    'Adhérent / Souscripteur',
    'Informations contrat',
    'Garanties',
    'Informations bancaires',
    'Échéanciers',
    'Frais & Paiement',
    'Transactions financières',
    'Porte Documents',
    'Relation Affaire',
    'Tickets'
  ];
  activeItem: string;

  setActive(item: string): void {
    this.activeItem = item;
  }
  

}
