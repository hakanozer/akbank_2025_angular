import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPageTitle]'
})
export class PageTitle {

  @Input() title!: string;
  constructor(private ref: ElementRef) { }

  ngOnInit(): void {
    this.ref.nativeElement.innerHTML = `<h2 class="text-danger">${this.title}</h2>`;
  }

  @HostListener('click')
  titleClicked() {
    alert(`You clicked on the title: ${this.title}`);
  } 

}
