"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
// Statics
//import 'rxjs/add/observable/throw';
//// Operators
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/distinctUntilChanged';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/switchMap';
require('rxjs/add/operator/toPromise');
var TournamentService = (function () {
    function TournamentService(http) {
        this.http = http;
    }
    TournamentService.prototype.getActiveTournaments = function () {
        return this.http.get('api/teams')
            .map(this.extractData)
            .catch(this.handleError);
        //let result = this.http.get('api/teams').forEach(v => console.log(v.json()));
        //return result;
    };
    TournamentService.prototype.asdf = function () {
        return this.http.get('api/teams')
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
        //let result = this.http.get('api/teams').forEach(v => console.log(v.json()));
        //return result;
    };
    TournamentService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    TournamentService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Rx_1.Observable.throw(errMsg);
    };
    TournamentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TournamentService);
    return TournamentService;
}());
exports.TournamentService = TournamentService;
//# sourceMappingURL=app.service.tournament.js.map