import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-depart-list',
  template: `
    <p>
      depart-list works!
    </p>
    <ul class="items">
    <li (click) ="onSelect(dep)"  [class.selected]=isSelected(dep) *ngFor="let dep of departList">
      <span class="badge">{{dep.id}} </span>  {{dep.name}}
    </li>
    </ul>
  `,
  styles: [
  ]
})
export class DepartListComponent implements OnInit {
   public selectedId;
  public departList =[
    {"id":1,name:"Angular"},
    {"id":2,name:"SprintBoot"},
    {"id":3,name:"VisualStudio"},
    {"id":4,name:"MongoDB"},
    {"id":5,name:"Bootstrap"}
  ];
  constructor(private router:Router,private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRouter.paramMap.subscribe((params:ParamMap)=>{
      this.selectedId = parseInt(params.get("id"));
    });
  }
   
  onSelect(depar){
    //this.router.navigate(['department',depar.id]);
    this.router.navigate([depar.id],{relativeTo:this.activateRouter});
  }

  isSelected(dep){
   return this.selectedId===dep.id;
  }
}
