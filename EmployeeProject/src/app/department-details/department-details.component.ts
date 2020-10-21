import { AppRoutingModule } from './../app-routing.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    <p>
      department-details works! You are in the Department with id {{depId}}
    </p>
    <p>
     <Button (click) ="goDepartmentOverview()">Overview</Button>
     <Button (click) ="goDepartmentContact()">Contact</Button>
    </p>
    <br>
    <p>
    <Button (click) ="goPrevious()">Previous</Button> 
    <Button (click)= "goNext()">Next</Button>
    </p>
    <br>
    <Button (click)="goBack()">Back</Button>
  `,
  styles: [
  ]
})
export class DepartmentDetailsComponent implements OnInit {
  public depId;
  constructor(private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {

    //View value is not updated with latest value 
    // let id = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
    // this.depId =id;
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      let id =parseInt(params.get('id'));
      this.depId =id;
    });
  }
  goPrevious(){
  this.router.navigate(['/department',this.depId-1]);
  }
  goNext(){
    this.router.navigate(['/department',this.depId+1]);
    }

  goBack(){
    //this.router.navigate(['department',{"id":this.depId,"testValue":"value"}]);
    this.router.navigate(['../',{"id":this.depId}],{relativeTo:this.activatedRoute});
  }

  goDepartmentOverview(){
    this.router.navigate(['overview'],{relativeTo:this.activatedRoute});
  }
  goDepartmentContact(){
    this.router.navigate(['contact'],{relativeTo:this.activatedRoute});
  }
    
}
