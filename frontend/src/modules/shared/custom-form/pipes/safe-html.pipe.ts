import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe {
  constructor(private sanitizer: DomSanitizer) { }

  transform(style: any, field?: any) {
    if (field == 'resource') {

      return this.sanitizer.bypassSecurityTrustResourceUrl(style);
    }
    return this.sanitizer.bypassSecurityTrustHtml(style);
    //return this.sanitizer.bypassSecurityTrustStyle(style);
    // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
  }
}