import { FastifyReply, FastifyRequest } from "fastify";
import { UpdateCustomerService } from "../services/UpdateCustomerService";

class UpdateCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const customerService = new UpdateCustomerService();

        const { id, name, email } = request.query as { id: string, name: string, email: string };

        await customerService.execute({ id, name, email });

        reply.send({ message: 'Atualizado com sucesso' });
    }
}

export { UpdateCustomerController }