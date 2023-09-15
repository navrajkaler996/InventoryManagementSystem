import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DepartmentsService {
  constructor(private prisma: PrismaService) {}

  create(createDepartmentDto: CreateDepartmentDto) {
    return 'This action adds a new department';
  }

  //FETCH All DEPARTMENTS
  //////api/vi/department
  findAllDepartments() {
    return this.prisma.department.findMany();
  }

  //FETCH A SINGLE DEPARTMENT using department_code
  //////api/vi/department/:department_code
  findDepartmentByCode(department_code: string) {
    return this.prisma.department.findFirst({
      where: { department_code: department_code?.toUpperCase() },
    });
  }
}
