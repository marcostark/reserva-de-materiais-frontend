import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './user-profile.service';
import { UsuarioModel } from 'app/dashboard/model/usuario.model';
import { StorageService } from 'app/services/storage.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel

  constructor(
    private service: UserProfileService,
    private storage: StorageService
  ) { }

  ngOnInit() {
    let localUser = this.storage.getLocalUser()
    if (localUser && localUser.email) {
      this.buscaUsuarioPoremail(localUser.email);
    }else{
      //Acesso não autorizado! Redirecionar para a pagina de login
      console.log("Redirecionando para a pagina de login")
    }  
  }
  
  buscaUsuarioPoremail(email: string){   
    this.service.buscaUsuarioPorEmail(email).subscribe(
      usuario => {
        this.usuario = usuario
        // console.log(this.usuario)
      },
      error => {
        if (error.status == 403){
          //Acesso não autorizado! Redirecionar para a pagina de login
          console.log("Redirecionando para a pagina de login")
        }
      }
    )
  }
}
