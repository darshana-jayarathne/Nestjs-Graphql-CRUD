import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field()
  @IsNotEmpty()
  userId: string;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  name?: string;

  @Field()
  @IsNotEmpty()
  @IsOptional()
  @IsEmail()
  email?: string;
}
