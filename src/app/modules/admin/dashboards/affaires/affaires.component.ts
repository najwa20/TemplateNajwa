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
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-affaires',
  standalone: true,
  templateUrl: './affaires.component.html',
  styleUrls: ['./affaires.component.scss'],
  imports: [
    DetailsComponent,
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
})
export class AffairesComponent implements OnInit, OnDestroy {
  
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _router: Router,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public dialog: MatDialog
  ) {
   
  }

  openFilterDialog(): void {
    // Ensure no additional dialogs are opened unintentionally
    this.dialog.open(FilterDialogComponent, {
      width: '30vw',  // Use a percentage width or your custom value
      maxWidth: 'none',  // Remove default max-width constraints
      position: {
        right: '0px',  // Position the dialog to the right
      },
    }).afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Handle the result if needed
    });
  }
  

  opendetails(): void {
    const dialogRef = this.dialog.open(DetailsComponent);
  }

  ngOnInit(): void {
    // Initialization logic
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null); // Pass null or any other value
    this._unsubscribeAll.complete();
  }

  
  table = {
    budgetDetails: {
      columns: ['client', 'organisme', 'dateCreation', 'dateEffet', 'gamme', 'statut', 'actions'],
      rows: [
        { Client: 'Pierce Ronald', Organisme: 'As Solutions', DateCreation: '10/07/2024', DateEffet: '2024-08-17 ', Gamme: 'PERENNITE SANTE TNS', Statut: 'A Approuver', Actions: 'Détail, Changer statut, échéanciers, Déclaration, Ajouter fichier, Envoyer Email' },
        { Client: 'Martin Shawn', Organisme: 'As Solutions', DateCreation: '10/07/2024', DateEffet: '2024-07-17 ', Gamme: 'AS sante Assistance', Statut: 'Auto-Approuve', Actions: 'Détail, Changer statut, échéanciers, Déclaration, Ajouter fichier, Envoyer Email' },
        { Client: 'Miller Patricia', Organisme: 'As Solutions', DateCreation: '10/07/2024', DateEffet: '2024-07-17 ', Gamme: 'AS-Sante PJ', Statut: 'Auto-Approuve', Actions: 'Détail, Changer statut, échéanciers, Déclaration, Ajouter fichier, Envoyer Email' },
        { Client: 'Miller Patricia', Organisme: 'As Solutions', DateCreation: '10/07/2024', DateEffet: '2024-07-17 ', Gamme: 'FULL SANTE', Statut: 'Auto-Approuve', Actions: 'Détail, Changer statut, échéanciers, Déclaration, Ajouter fichier, Envoyer Email' },
        { Client: 'Freeman Julie', Organisme: 'As Solutions', DateCreation: '10/07/2024', DateEffet: '2024-07-17 ', Gamme: 'AS Sante Assistance', Statut: 'Auto-Approuve', Actions: 'Détail, Changer statut, échéanciers, Déclaration, Ajouter fichier, Envoyer Email' },
        { Client: 'Torres Kenneth', Organisme: 'As Solutions', DateCreation: '10/07/2024', DateEffet: '2024-07-17 ', Gamme: 'AS-Sante PJ', Statut: 'Auto-Approuve', Actions: 'Détail, Changer statut, échéanciers, Déclaration, Ajouter fichier, Envoyer Email' },
        { Client: 'Moses Eric', Organisme: 'As Solutions', DateCreation: '10/07/2024', DateEffet: '2024-07-17 ', Gamme: 'FULL SANTE', Statut: 'Auto-Approuve', Actions: 'Détail, Changer statut, échéanciers, Déclaration, Ajouter fichier, Envoyer Email' },
        { Client: 'Moses Eric', Organisme: 'As Solutions', DateCreation: '10/07/2024', DateEffet: '2024-07-17 ', Gamme: 'AS sante Assistance', Statut: 'Auto-Approuve', Actions: 'Détail, Changer statut, échéanciers, Déclaration, Ajouter fichier, Envoyer Email' },
        { Client: 'test test', Organisme: 'As Solutions', DateCreation: '10/07/2024', DateEffet: '2024-07-17 ', Gamme: 'AS-Sante PJ', Statut: 'Auto-Approuve', Actions: 'Détail, Changer statut, échéanciers, Déclaration, Ajouter fichier, Envoyer Email' },
        { Client: 'test test', Organisme: 'As Solutions', DateCreation: '10/07/2024', DateEffet: '2024-07-17', Gamme: 'FULL SANTE', Statut: 'Auto-Approuve', Actions: 'Détail, Changer statut, échéanciers, Déclaration, Ajouter fichier, Envoyer Email' }
      ]
    }
  };
  
}
