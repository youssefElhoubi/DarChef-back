import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Model } from 'mongoose';
import { Customer } from 'src/schemas/customers.schema';
import { ResurceExists } from 'src/exeptions/ResurceExists';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private readonly customerModel: Model<Customer>
  ) {}
  async create(createCustomerDto: CreateCustomerDto) {
    const existingCustomer = await this.customerModel.findOne({ user_ID: createCustomerDto.user_ID });
    if (existingCustomer) {
      throw new ResurceExists(`Customer with this user_ID ${createCustomerDto.user_ID} already exists`);
    }
    const customer : Customer = await this.customerModel.create(createCustomerDto);
    return customer;
  }

  async findAll(): Promise<Customer[]> {
    return await this.customerModel.find();
  }

  async findOne(id: number): Promise<Customer | null> {
    return await this.customerModel.findById(id);
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto): Promise<Customer | null> {
    return await this.customerModel.findByIdAndUpdate(id, updateCustomerDto, { new: true });
  }

  async remove(id: number): Promise<Customer | null> {
    return await this.customerModel.findById(id).deleteOne();
  }
}
