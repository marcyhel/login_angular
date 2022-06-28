import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface IdCredenciais{
  login: string;
  senha: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credenciais:IdCredenciais={login: '', senha: ''};
  falha_login:string = '';
  constructor(private router: Router,) {
    
   }

  ngOnInit(): void {
  }
  validarEmail( email:string){
    var emailReg =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(!emailReg.test(email) ){
     
      return false;			
    }
    return true;
  } 
  
  logar(){
    if(this.credenciais.login!='' && this.credenciais.senha!=''){
      if(this.validarEmail(this.credenciais.login)){
        console.log('logado')
        this.validado_next_page();
      }else{
        this.falha_login = 'E-mail não é valido';
      }
    }
    else{
      console.log(this.credenciais.login);
      this.falha_login = 'Preencha todos os campos';
    }
  } 
  validado_next_page() {
    this.router.navigate(['/page2']);
}

}

