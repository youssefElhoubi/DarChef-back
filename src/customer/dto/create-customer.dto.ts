import { IsNotEmpty } from "class-validator";

export class CreateCustomerDto {
    @IsNotEmpty()
    savedAddresses!: {
        type: 'Point';
        coordinates: [number, number];
    }[];
    @IsNotEmpty()
    user_ID!: string;
}
