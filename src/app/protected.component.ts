// protected.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-secure',
  template: "This is protected compoennt "
})
export class ProtectedComponent {
  constructor() { console.log('Protected endpont!'); }
}
