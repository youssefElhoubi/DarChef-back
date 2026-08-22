export class CustomerResponseDto {
    id!: string;
    userId!: string;
    savedAddresses!: {
        type: 'Point';
        coordinates: [number, number];
    }[];
    dietaryPreferences!: string[];
}