import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dynamic-slug',
  templateUrl: './dynamic-slug.component.html',
  styleUrl: './dynamic-slug.component.scss'
})
export class DynamicSlugComponent {
  protected slug$?: Observable<string>;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.slug$ = this.route.paramMap.pipe(
      map((params: ParamMap) =>
        params.get('slug')!)
    );
  }
}
