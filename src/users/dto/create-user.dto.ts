import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
    @ApiProperty({
        example: 'Chaiwat',
        required: true
    })
    @IsNotEmpty()
    fname: string;

    @ApiProperty({
    example: 'Ngernkao',
    required: true
    })
    @IsNotEmpty()
    lname: string;

    @ApiProperty({
        example: '0986667777',
        required: true
    })
    @IsNotEmpty()
    tel: string;

    @ApiProperty({
        example: 'test@gmail.com',
        required: true
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        example: '123456',
        required: true
    })
    @IsNotEmpty()
    password: string;
}