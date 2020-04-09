import { IsUrl } from 'class-validator'

export class ReadDto {

    @IsUrl()
    url : String;
    
}