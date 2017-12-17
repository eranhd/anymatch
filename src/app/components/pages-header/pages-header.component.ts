import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { HeaderCard } from "../../models";
@Component({
  selector: 'app-pages-header',
  templateUrl: './pages-header.component.html',
  styleUrls: ['./pages-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PagesHeaderComponent implements OnInit {

  @Input() items: HeaderCard[];
  constructor() { }

  ngOnInit() {
  }

}
