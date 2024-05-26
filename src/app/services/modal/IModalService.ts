import { OverlayRef } from "@angular/cdk/overlay";

export interface IModalService {
  overlayRef: OverlayRef
  show(): void;
  hide(): void;
}
