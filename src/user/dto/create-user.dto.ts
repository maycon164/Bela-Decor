export class CreateUserDto {
    name: string
    email: string
    password: string
    cpf: string
    cellphone: string
    address?: string
    rentals?: string
    payments?: string
    createdAt?: string
    updateAt?: string
}
