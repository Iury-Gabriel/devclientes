import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteCustomerService } from "../services/DeleteCustomerService";

class DeleteCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const customerService = new DeleteCustomerService();

        const { id } = request.query as { id: string };

        await customerService.execute({ id });

        reply.send({ message: 'Deletado com sucesso' });
    }
}

export { DeleteCustomerController }