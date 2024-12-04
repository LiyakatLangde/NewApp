import { Routes } from '@angular/router';
// import { AdminComponent } from './components/main/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/main/home/home.component';
import { VideoMasterComponent } from './components/main/video-master/video-master.component';
import { GetApiComponent } from './components/main/get-api/get-api.component';
import { AddNewUserComponent } from './components/main/add-new-user/add-new-user.component';

export const routes: Routes = [

    {
        path:'',
        redirectTo:"login",
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
            {
                path:'main-layout',
                component:MainComponent,
                children:[
                    {
                        path:'home-page',
                        component:HomeComponent
                    },
                    // {
                    //     path:'admin-page',
                    //     component:AdminComponent
                    // },
                    {
                        path:"video-master",
                        component:VideoMasterComponent
                    },
                    {
                        path:"getApi",
                        component:GetApiComponent
                    },
                    {
                        path:"addNewUser",
                        component:AddNewUserComponent
                    }
    
                
                ]
            }
];
