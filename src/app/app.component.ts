import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const url = 'http://localhost:8080/springmvc/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @Input() title : string = 'angular-web-project with @material';

  constructor(private http: HttpClient){
      
      /*http
        .get<Object[]>(url + 'produtos/listProdutosJSON')
        .subscribe( produtos => {
          console.log(produtos)
        });*/
  }
}