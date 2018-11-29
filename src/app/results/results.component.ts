import { Component, OnInit } from '@angular/core';
import { StarwarsData } from '../starwars.data'
import { Result } from '../result';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit {
  
  results: Result[];

  displayResults: FormGroup

  constructor(public starwarsData: StarwarsData, public fb: FormBuilder) { }

  

  ngOnInit() {
    
    this.displayResults = this.fb.group({
      selection: new FormControl(''),
      find: new FormControl('')
    })
  }



  onSubmit(): void {
    this.starwarsData.getResults(this.displayResults.value.selection, this.displayResults.value.find).subscribe(results => this.results = results);
    
  }
}

