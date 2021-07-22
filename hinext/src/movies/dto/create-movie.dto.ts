import { IsIn, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMovieDto{
    @IsString()
    readonly title: string;
    @IsNumber()
    readonly year: number;
    @IsString( { each: true})
    @IsOptional() // 필수값이 아니게 해준다.
    readonly genres: string[];
}