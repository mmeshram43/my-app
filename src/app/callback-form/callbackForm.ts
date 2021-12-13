import { ArrayType } from "@angular/compiler";

export interface UserForm {
    Name : string ;
    Email : string;
    Phone : string ;
    emailCheck : boolean ;
    FundType : string ;
    extra ? : string;
}