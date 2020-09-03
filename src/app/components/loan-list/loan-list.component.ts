import { Component, OnInit } from '@angular/core';
import { LoanService } from '../../service/loan.service';
import { Loan } from '../../common/loan';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {

  loans: Loan[];
  searchMode: boolean;
  
  // inject service dependency
  constructor(private loanService: LoanService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.listLoans();
  }
listLoans(){
  this.searchMode = this.route.snapshot.paramMap.has('id');

  if(this.searchMode){
    this.handlSearchLoans();
  }
  else{
    this.handleListLoans();
  }
  this.handleListLoans();
}
handlSearchLoans(){
  const theId: string = this.route.snapshot.paramMap.get('id');

  // search with the entered id
  return this.loanService.searchLoans(theId).subscribe(
    data => {
      this.loans = data;
    }
  )
}
handleListLoans(){
  this.loanService.getLoanList().subscribe(
    data => {
      this.loans = data;
    }
  )
}
}
