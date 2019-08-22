import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `    
    <div class="well hoverwell thumbnail">
    <h2>{{event?.name}}</h2>
    <div>Date: {{event?.date}}</div>
    <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">( Early Start )</span>
        <span *ngSwitchCase="'10:00 am'">( Late Start )</span>
        <span *ngSwitchDefault>( Normal Start )</span>
    </div>
    <div>Price: \R{{event?.price}} {{event.entry}} </div>
    <div [hidden]="!event?.location?.address">
        <span> Location: {{event?.location?.address}}</span>
        <span class="pad-left"> {{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
    <div *ngIf="event?.onlineURL">
        Online URL: {{event?.onlineURL}}
    </div>
</div>
`,
styles: [`
.thumbnail { min-height: 205px; }
.well div { color: grey; }
`]
})
export class EventThumbnailComponent {
    @Input() event:any;
    getStartTimeStyle():any {
        if (this.event && this.event.time === '8:00 am')
            return { color: '#003300', 'font-weight': 'bold'}
        else if (this.event && this.event.time === '9:00 am')
            return { color: '#FF7B2E', 'font-weight': 'bold'} 
        else if (this.event && this.event.time === '10:00 am')
            return { color: '#FF0000', 'font-weight': 'bold'} 
        return{}
    }
}
