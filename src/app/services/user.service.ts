import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    private email;

    constructor() {}

    setValue(val) {
        this.email = val;
    }

    getValue() {
        return this.email ;
    }
}