import { Component, OnInit, HostListener } from "@angular/core";
import { DataService } from "./services/data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataService.getData("endpoint1").subscribe((data) => {
      console.log("Data from endpoint1:", data);
    });

    this.dataService.getData("endpoint2").subscribe((data) => {
      console.log("Data from endpoint2:", data);
    });

    this.dataService.getData("endpoint3").subscribe((data) => {
      console.log("Data from endpoint3:", data);
    });

    this.dataService
      .postData("endpoint4", { key: "value" })
      .subscribe((data) => {
        console.log("Data from endpoint4:", data);
      });

    this.dataService
      .putData("endpoint5", { key: "value" })
      .subscribe((data) => {
        console.log("Data from endpoint5:", data);
      });

    this.dataService.deleteData("endpoint6").subscribe((data) => {
      console.log("Data from endpoint6:", data);
    });

    this.dataService
      .patchData("endpoint7", { key: "value" })
      .subscribe((data) => {
        console.log("Data from endpoint7:", data);
      });

    this.dataService
      .getDataWithParams("endpoint8", { param1: "value1" })
      .subscribe((data) => {
        console.log("Data from endpoint8:", data);
      });

    this.dataService
      .postDataWithHeaders(
        "endpoint9",
        { key: "value" },
        { "Custom-Header": "value" }
      )
      .subscribe((data) => {
        console.log("Data from endpoint9:", data);
      });

    this.dataService
      .getDataWithAuth("endpoint10", "your-token")
      .subscribe((data) => {
        console.log("Data from endpoint10:", data);
      });

    this.dataService.getDataWithRetry("endpoint11", 3).subscribe((data) => {
      console.log("Data from endpoint11:", data);
    });

    this.dataService
      .getDataWithTimeout("endpoint12", 5000)
      .subscribe((data) => {
        console.log("Data from endpoint12:", data);
      });

    this.dataService.getDataWithCatchError("endpoint13").subscribe((data) => {
      console.log("Data from endpoint13:", data);
    });
  }

  @HostListener("document:mousemove", ["$event"])
  onMouseMove(event: MouseEvent) {
    const cursor = document.getElementById("animated-cursor");
    if (cursor) {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    }
  }
}
