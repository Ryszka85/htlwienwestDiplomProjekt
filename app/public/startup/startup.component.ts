import { Component, OnInit } from '@angular/core';
import {MediaProcessorService} from "../../serviceV2/media-processor.service";

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.scss']
})
export class StartupComponent implements OnInit {

  public foo: string;
  public isMobileDevice: boolean;
  public isDesktopDeviceLg: boolean;
  public isDesktopDeviceXl: boolean;
  public isTabletDevice: boolean;
  constructor(private media: MediaProcessorService) { }

  ngOnInit(): void {
    this.media.$mediaGetter.subscribe(value => {
      console.log(value);
      value.filter(value1 => {
        if (value1.mqAlias === 'xs') {
          this.isMobileDevice = true;
          this.isDesktopDeviceLg = false;
          this.isTabletDevice = false;
          this.isDesktopDeviceXl = false;
        } else if (value1.mqAlias === 'sm') {
          this.isMobileDevice = false;
          this.isDesktopDeviceLg = false;
          this.isTabletDevice = true;
          this.isDesktopDeviceXl = false;
        } else if (value1.mqAlias === 'lg') {
          this.isMobileDevice = false;
          this.isDesktopDeviceLg = true;
          this.isTabletDevice = false;
          this.isDesktopDeviceXl = false;
        } else if(value1.mqAlias === 'xl') {
          this.isMobileDevice = false;
          this.isDesktopDeviceLg = false;
          this.isTabletDevice = false;
          this.isDesktopDeviceXl = true;
        }
      });
    });
  }

}
