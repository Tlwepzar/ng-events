import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'upvote',
    styleUrls:['./upvote.component.css'],
    template:`
        <div class="voteWidgetContainer pointable" (click)="onClick()">
            <div class="well votingWidget">
                <div class="votingButton">
                <i *ngIf="voted" class="glyphicon glyphicon-heart"></i>
                <i *ngIf="!voted" class="glyphicon glyphicon-heart-empty"></i>
            <div>
            <div class= "badge badge-inverse votingCount">
                <div>{{count}}</div>
            </div>
        </div>
    </div>    
    `
})

export class UpVoteComponent {
    @Input() count: number;
    @Input() voted: boolean;
    @Output() vote = new EventEmitter();

    onClick(){
        this.vote.emit({});
    }
} 