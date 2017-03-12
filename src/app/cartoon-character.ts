
import { Component, OnInit } from '@angular/core';
import {CartoonCharacterService} from './cartoon-character.service';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


export class CartoonCharacter {
  PersonId: number;
  FirstName: string;
  LastName: string;
  Occupation: string;
  Gender: string;
  Picture: string;

  
  
}


