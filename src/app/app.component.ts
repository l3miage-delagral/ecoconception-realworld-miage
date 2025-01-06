import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  @HostListener("document:mousemove", ["$event"])
  onMouseMove(event: MouseEvent) {
    const cursor = document.getElementById("animated-cursor");
    if (cursor) {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    }
  }
}
