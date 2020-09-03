import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // Inject Router
  constructor(private router: Router) { }

  ngOnInit() {
  }

  doSearch(value: string){
    console.log(`value=${value}`);
    // Route the data to "earch" route - handled by LoanListComponent
    this.router.navigateByUrl(`/search/${value}`);
  }


}
