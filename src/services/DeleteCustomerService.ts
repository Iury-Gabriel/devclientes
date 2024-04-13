import prismaClient from "../prisma";

interface DeleteCustomerProps {
    id: string
}

class DeleteCustomerService {
    async execute({ id }: DeleteCustomerProps) {
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

        await prismaClient.customer.delete({
            where: {
                id
            }
        })
    }
}

export { DeleteCustomerService }