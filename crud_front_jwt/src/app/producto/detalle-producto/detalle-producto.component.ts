import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit{
  producto:Producto=null;
  constructor(private service:ProductoService,private activatedRoute:ActivatedRoute, private toastr:ToastrService,private router:Router){}

  ngOnInit(): void {
   //Acceder al id
   const id=this.activatedRoute.snapshot.params.id;
   this.service.detail(id).subscribe(
    data=>{
      this.producto=data;
    },
    err => {
      this.toastr.error(err.error.mensaje,'Fail', {
        timeOut: 3000,
        positionClass: 'toast-top-center'
      });
      this.volver();
    }
   )
  }

  volver():void{
    this.router.navigate(['/lista']);
  }


}