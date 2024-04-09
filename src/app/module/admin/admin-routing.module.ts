
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthGuard} from 'src/app/zynerator/security/guards/auth.guard';

import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';

@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [
                        {
                            path: 'login',
                            children: [
                                {
                                    path: '',
                                    component: LoginAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'avancement',
                            loadChildren: () => import('./view/avancement/avancement-admin-routing.module').then(x => x.AvancementAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'employe',
                            loadChildren: () => import('./view/employe/employe-admin-routing.module').then(x => x.EmployeAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'lotissement',
                            loadChildren: () => import('./view/lotissement/lotissement-admin-routing.module').then(x => x.LotissementAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'ir',
                            loadChildren: () => import('./view/ir/ir-admin-routing.module').then(x => x.IrAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'commun',
                            loadChildren: () => import('./view/commun/commun-admin-routing.module').then(x => x.CommunAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'security',
                            loadChildren: () => import('../security/security-routing.module').then(x => x.SecurityRoutingModule),
                            canActivate: [AuthGuard],
                        }
                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
