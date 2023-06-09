import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-progress-bar",
  template: `
    <div
      class="progress-bar-container"
      [style.backgroundColor]="backgroundColor"
    >
      <div
        class="progress"
        [style]="{
          backgroundColor: progressColor,
          width: progress + '%'
        }"
      ></div>
    </div>
  `,
  styles: [
    `
      .progress-bar-container,
      .progress {
        height: 20px;
      }

      .progress-bar-container {
        width: 100%;
      }
    `
  ]
})
export class ProgressBarComponent implements OnInit /*, OnChanges */ {
  @Input() backgroundColor: string | undefined;
  @Input() progressColor: string | undefined;
  private $progress = 0;
  @Input()
  get progress(): number {
    return this.$progress;
  }
  set progress(value: number) {
    if (typeof value !== "number") {
      const progress = Number(value);
      if (Number.isNaN(progress)) {
        this.$progress = 0;
      } else {
        this.$progress = progress;
      }
    } else {
      this.$progress = value;
    }
  }

  constructor() {}



  ngOnInit() {}
}
