import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatTreeModule, } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { ConfigService } from 'app/config.service';
interface TreeNode {
  name: string;
  checkboxes?: string[];
  children?: TreeNode[];
}

interface FlatTreeNode {
  name: string;
  level: number;
  expandable: boolean;
  checkboxes?: string[];
}

// TREE_DATA adjusted to ensure each node has a 'name'
export const TREE_DATA: TreeNode[] = [
  {
    name: 'ATRIAS',
    children: [
      {
        name: 'Enregistrement ATRIAS',
        checkboxes: ['En attente accord client', 'Contrat Approuve', 'Contrat Refuse'],
      },
      {
        name: 'Gestion ATRIAS',
        checkboxes: ['Impaye', 'Resilié', 'Sans effet'],
      },
      {
        name: 'Pre-Enregistrement ATRIAS',
        checkboxes: ['En attente de reponse', 'Annulation', 'Pieces manquantes'],
      },
    ],
  },
  {
    name: 'Reseaux de distribution',
    children: [
      {
        name: 'Creation 1',
        checkboxes: ['Rejete', 'Approuve'],
      },
      {
        name: 'Enregistrement',
        checkboxes: ['Declare', 'Approuve', 'En attente de signature', 'Declare', 'Refuse', 'Approuve', 'Paye', 'Delai de validation'],
      },
      {
        name: 'Gestion',
        children: [
          {
            name: 'Resile',
            checkboxes: ['Resile'],
          },
          {
            name: 'Resile_p',
            checkboxes: ['Resile a l\'echeance', 'Resile par impaye', 'Resile pour une autre motif'],
          },
          {
            name: 'Gestion Options',
            checkboxes: ['Encour', 'Resile', 'Impaye', 'INSTANCE'],
          },
        ],
      },
    ],
  },
  {
    name: 'Vente',
    children: [
      {
        name: 'Pre-enregistrement ATRIAS',
        checkboxes: ['En attente de reponse'],
      },
    ],
  },
  {
    name: 'Vente comercial',
    children: [
      {
        name: 'Conformit',
        checkboxes: ['Retournee en enregistrement', 'Documents obligatoires manquants', 'Documents non conformes', 'Refuse', 'Approuve'],
      },
      {
        name: 'Enregistrement',
        checkboxes: ['En attente de signature', 'En attente de paiement', 'Declare', 'A valider', 'Refuse'],
      },
      {
        name: 'Finance',
        children: [
          {
            name: 'Quittance retournee',
            checkboxes: ['Defaut de paiement'],
          },
          {
            name: 'Autres Options',
            checkboxes: ['Deces assure', 'Vehicule vende'],
          },
          {
            name: 'Resiliation',
            checkboxes: ['Resiliation a l\'echeance', 'Resiliation par la compagnie', 'Resiliation suite cxp', 'Resiliation suite vente', 'Resiliation avec ristourne'],
          },
          {
            name: 'Stage ete',
            checkboxes: ['Canceld'],
          },
        ],
      },
    ],
  },
  {
    name: 'Vente MRC',
    children: [
      {
        name: 'Creation 1',
        children: [
          {
            name: 'Mise en demeure',
            checkboxes: ['Rejetee'],
          },
          {
            name: 'PLANIFIEe',
            checkboxes: ['Dd'],
          },
          {
            name: 'Refuse',
            children: [
              {
                name: 'En attente de validation expert',
                checkboxes: ['Finisheddd', 'Finishedd'],
              },
            ],
            checkboxes: ['Annulation doublon', 'Accepte'],
          },
          {
            name: 'Rejete',
            checkboxes: ['Approuve'],
          },
          {
            name: 'Approuve',
            checkboxes: ['Approve'],
          },
          {
            name: 'Autres Options',
            checkboxes: ['Brut', 'II'],
          },
        ],
      },
      {
        name: 'Creation 2',
        checkboxes: ['A valider', 'Annulation pour test'],
      },
      {
        name: 'Enregistrement',
        checkboxes: ['En attente de signature', 'Annulation pour test', 'Annulation', 'Pieces ou informations manquantes', 'Delai de signature depasse'],
      },
      {
        name: 'Gestion new service',
        checkboxes: ['En cours', 'Resilie', 'Impaye', 'Sans effet', 'Annule pour avenant tarifaire', 'Report de date d\'effet'],
      },
      {
        name: 'New service',
        checkboxes: ['New'],
      },
      {
        name: 'SAV',
        checkboxes: ['Approuve', 'Annulation', 'Sans effet'],
      },
    ],
  },
  {
    name: 'Vente-sante',
    children: [
      {
        name: 'Enregistrement',
        checkboxes: ['Refuse', 'Annule', 'Declare', 'Refuse', 'Annule', 'En cours', 'A valider gestion as-solution'],
      },
      {
        name: 'Gestion',
        children: [
          {
            name: 'Impaye',
            checkboxes: ['Recouvrement', 'Mise en demeure', 'Recouvrement'],
          },
          {
            name: 'Autres Options',
            checkboxes: [
              'Retourne enregistrement', 'Resilie', 'Impaye', 'En attente de signature', 'En cours', 'Retourne enregistrement', 'MANQUE DOCUMENT', 'INSTANCE ADMINISTRATIF', 'Delai de signature depasse', 'Mise en suspension', 'Ichraf test nombre defini',
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'CDV prod tsur',
    children: [
      {
        name: 'SAV TEST2',
        checkboxes: ['PLANIFIEE'],
      },
    ],
  },
];


@Component({
  selector: 'app-filter-dialog',
  standalone: true,
  imports: [
    MatTreeModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [ConfigService],
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent {
  constructor(public dialogRef: MatDialogRef<FilterDialogComponent>,private configService: ConfigService) {}

  selectedOption: string ;
  selectedForm: string | null = null;
  isContentVisible = false;
  showStatutsActions = false;
  treeData: any[] = TREE_DATA;
  openSections: Set<string> = new Set();
  openForms: { [key: string]: boolean } = {};

  affairesList = ['Affaires', 'Utilisateur', 'Client', 'Blocage Qualité'];
  opportunitesList = ['Opportunités', 'Utilisateur'];

  visibleSections: { [key: string]: boolean } = {};
  sections = {
    atrias: false,
    enregistrementAtria: false,
    gestionAtria: false,
    preEnregistrementAtria: false,
    reseauxDeDistribution: false,
    creation1: false,
    enregistrementReseaux: false,
    gestionReseaux: false,
    vente: false,
    creationVente: false,
    enregistrementVente: false,
    venteCommercial: false,
    creationVenteCommercial: false,
    enregistrementVenteCommercial: false,
    venteMRC: false,
    creationVenteMRC: false,
    enregistrementVenteMRC: false,
    venteSante: false,
    creationVenteSante: false,
    enregistrementVenteSante: false,
    cdvProdTsur: false,
    creationCdvProdTsur: false,
    enregistrementCdvProdTsur: false
  };
// Updated options for Blocage Qualité
examinerInitialOptions = [
  'Vérification de la présence de tous les documents',
  'Contrôle de la validité et de la date des documents',
  'Vérification de l\'identité du client (pièce d\'identité)'
];

confirmationOptions = [
  'Correspondance des informations client',
  'Cohérence des informations fournies',
  'Vérification de l\'exactitude des données saisies'
];

processusOptions = [
  'Conformité avec les procédures des ventes internes',
  'Respect des étapes de vente',
  'Adéquation du produit/besoins'
];

clarteOptions = [
  'Clarté et précision des informations transmises',
  'Confirmation que le client a compris les termes',
  'Respect des documents importants par le client'
];

  toggleSection(section: string) {
    if (this.openSections.has(section)) {
      this.openSections.delete(section);
    } else {
      this.openSections.add(section);
    }
  }
  
  isSectionOpen(section: string): boolean {
    return this.openSections.has(section);
  }
  toggleChildren(section: string): void {
    this.visibleSections[section] = !this.visibleSections[section];
  }
  onCheckboxChange(node: TreeNode) {
    // Implement logic to handle checkbox selection/deselection
    // Update the underlying data structure (e.g., TREE_DATA)
    console.log(`Checkbox '${node.name}' changed to: ${node.checkboxes?.join(', ')}`);
  }
  private _transformer = (node: TreeNode, level: number): FlatTreeNode => ({
    name: node.name,
    level: level,
    expandable: !!node.children && node.children.length > 0,
    checkboxes: node.checkboxes,
  });

  treeControl = new FlatTreeControl<FlatTreeNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: FlatTreeNode) => node.expandable;

  ngOnInit() {
    this.configService.getListAffaires().subscribe(data => {
      console.log(data); // Add this line to verify data is being fetched
      this.options = data;
  
      // Initially display all options
      this.filteredCompanyOptions = this.options.map(option => option.Compagnie);
      this.filteredRangeOptions = this.options.map(option => option.Gammes);
      this.filteredProductOptions = this.options.map(option => option.Produits);
    });
  }


  toggleStatutsActions(): void {
    this.showStatutsActions = !this.showStatutsActions;
    if (this.showStatutsActions) {
      this.treeControl.expandAll();
    } else {
      this.treeControl.collapseAll();
    }
  }

  selectOption(option: string): void {
    this.selectedOption = option;
    this.selectedForm = null; // Reset form selection
  }

  //toggleForm(item: string): void {
    //this.openForms[item] = !this.openForms[item];
  //}
  toggleForm(item: string): void {
    if (this.selectedForm === item) {
      this.selectedForm = ''; // Comment this out to keep the form open
    } else {
      this.selectedForm = item;
    }
  }
  //toggleForm(item: string) {
    //if (this.selectedForm === item) {
     // this.selectedForm = null; // Collapse if the same item is clicked again
    //} else {
     // this.selectedForm = item; // Expand to show the form
    //}
  //}
  //isOpen(item: string): boolean {
    //return this.openForms[item];
  //}
  isOpen(item: string): boolean {
    return this.selectedForm === item;
  }
  getCurrentList() {
    return this.selectedOption === 'Opportunités' ? this.opportunitesList : this.affairesList;
  }
 
  onClose(): void {
    this.dialogRef.close();
  }


  options: any[] = [];
  filteredCompanyOptions: any[] = [];
  filteredRangeOptions: any[] = [];
  filteredProductOptions: any[] = [];

  selectedCompany: string;
  selectedRange: string;
  selectedProduct: string;


  onCompanyInput(value: string): void {
    this.filteredCompanyOptions = this.configService.filterOptions(value, this.options.map(option => option.Compagnie));
  }

  onRangeInput(value: string): void {
    this.filteredRangeOptions = this.configService.filterOptions(value, this.options.map(option => option.Gammes));
  }

  onProductInput(value: string): void {
    this.filteredProductOptions = this.configService.filterOptions(value, this.options.map(option => option.Produits));
  }
}
