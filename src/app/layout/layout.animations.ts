import { animate, state, style, transition, trigger } from "@angular/animations";


export const onSidenavChange = trigger('onSidenavChange', [
  state('close',
    style({
      'min-width': '74px',
      'width': '74px',
      'max-width': '74px'
    })
  ),
  state('open',
    style({
      'min-width': 'auto'
    })
  ),
  transition('close <=> open', animate('220ms ease-in'))
]);
