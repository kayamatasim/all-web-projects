import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  tools:{}={
    "html":"teaching html and html5 from last  3 years and had 2 certificates of it.HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables.",
      "css":"CSS stands for Cascading Style Sheet. CSS can format the document content(written in HTML or other markup language): layout.",
      "javascript":"CSS stands for Cascading Style Sheet. CSS can format the document content(written in HTML or other markup language): layout.",
      "github":"CSS stands for Cascading Style Sheet. CSS can format the document content(written in HTML or other markup language): layout.",
      "angular":"CSS stands for Cascading Style Sheet. CSS can format the document content(written in HTML or other markup language): layout.",
      "express":"CSS stands for Cascading Style Sheet. CSS can format the document content(written in HTML or other markup language): layout.",


  };
  images:{}={
    "html":"https://www.sololearn.com/Certificate/1014-15903096/jpg/",
    "css":"https://www.sololearn.com/Certificate/1023-15903096/jpg/"
  }
  constructor() { }

  ngOnInit(): void {
  }

  
}
