export default function httpResponse(res, statusCode, data) {
    const messageMap = {
        200: 'Operação realizada com sucesso',
        201: 'Registro cadastrado com sucesso',
        404: 'Registro não encontrado',
        400: 'Requisição inválida. Verifique os parametros e tente novamente',
        500: 'Ops! Ocorreu um erro inesperado no servidor.'
    }

    return res.status(statusCode).json({
        ok: false,
        message: messageMap[statusCode],
        data: data
    })
}