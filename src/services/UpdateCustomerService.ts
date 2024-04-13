import prismaClient from "../prisma";

interface UpdateCustomerProps {
    id: string;
    name: string;
    email: string;
}

class UpdateCustomerService {
    async execute({ id, name, email }: UpdateCustomerProps) {
        if(!id) {
            throw new Error("Solicitar o ID do cliente")
        }
        
        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id
            }
        });

        if(!findCustomer) {
            throw new Error("Cliente não encontrado")
        }

        await prismaClient.customer.update({
            where: {
                id
            },
            data: {
                name,
                email
            }
        })
    }
}

export { UpdateCustomerService }