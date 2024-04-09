import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import {RoleService} from "../zynerator/security/shared/service/Role.service";
import {AppComponent} from "../app.component";
import {AuthService} from "../zynerator/security/shared/service/Auth.service";
import {Router} from "@angular/router";
import {AppLayoutComponent} from "./app.layout.component";

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {
  model: any[];
  modelanonymous: any[];
    modelAdmin: any[];
constructor(public layoutService: LayoutService, public app: AppComponent, public appMain: AppLayoutComponent, private roleService: RoleService, private authService: AuthService, private router: Router) { }
  ngOnInit() {
    this.modelAdmin =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [
					  {
						label: 'Lotissement Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste taxe lotissement',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/lotissement/taxe-lotissement/list']
								  },
								  {
									label: 'Liste taux taxe lotissement',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/lotissement/taux-taxe-lotissement/list']
								  },
						]
					  },
					  {
						label: 'Taxe Ir Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste paiement ir detail',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/ir/paiement-ir-detail/list']
								  },
								  {
									label: 'Liste taux ir',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/ir/taux-ir/list']
								  },
								  {
									label: 'Liste paiement ir',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/ir/paiement-ir/list']
								  },
						]
					  },
					  {
						label: 'Employe Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste grade employe',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/employe/grade-employe/list']
								  },
								  {
									label: 'Liste employe salaire history',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/employe/employe-salaire-history/list']
								  },
								  {
									label: 'Liste employe',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/employe/employe/list']
								  },
						]
					  },
					  {
						label: 'Configuration Generale',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste societe',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/avancement/societe/list']
								  },
								  {
									label: 'Liste redevable',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/commun/redevable/list']
								  },
								  {
									label: 'Liste locale',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/commun/locale/list']
								  },
						]
					  },

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
        if (this.authService.authenticated) {
            if (this.authService.authenticatedUser.roleUsers) {
              this.authService.authenticatedUser.roleUsers.forEach(role => {
                  const roleName: string = this.getRole(role.role.authority);
                  this.roleService._role.next(roleName.toUpperCase());
                  eval('this.model = this.model' + this.getRole(role.role.authority));
              })
            }
        }
  }

    getRole(text){
        const [role, ...rest] = text.split('_');
        return this.upperCaseFirstLetter(rest.join(''));
    }

    upperCaseFirstLetter(word: string) {
      if (!word) { return word; }
      return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }

    onMenuClick(event) {
        this.appMain.onMenuClick(event);
    }
}
