import React from 'react';

export default props =>
    <div className="col col-12">
        <div className="row">
            <div className="col col-12" id="formMercadoria">
                <div className="col col-xl-4 col-lg-6 col-md-9 col-sm-10 centralizar-vertical">
                    <h3 className="text-dark text-center mt-5 mb-2">Nova Nota</h3>
                    <div className="row">
                        <div className="col">
                            <h5 className="text-center mt-4">Cliente</h5>
                        </div>
                    </div>
                    <div className="row mt-3 mb-4">
                        <div className="col col-lg-10 col-xl-10 col-md-10 col-sm-10 centralizar-vertical">
                            <input type="text" className="form-control" placeholder="Nome do cliente" id="cliente" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h5 className="text-center mt-2">Adicionar mercadoria</h5>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 col-xl-9 col-lg-9 col-md-9 col-sm-9">
                            <input type="text" className="form-control " placeholder="Digite o nome da mercadoria" id="buscaMercadoria" onKeyUp={props.buscaMercadoria()} />
                        </div>
                        <div className="col mt-3 mt-sm-3 mt-lg-0 mt-md-0 mt-xl-0">
                            <input type="text" className="form-control" placeholder="Quantidade" id="quantidade" onKeyUp={props.multiplicaValor} />
                            <input type="hidden" id="idMercadoria" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-4">
                            <div className="row">
                                <div className="col-6 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                    <input type="text" className="form-control" placeholder="Preço" id="precoVenda" disabled />
                                </div>
                                <div className="col-6 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                    <input type="text" className="form-control" placeholder="Desconto" id="desconto" onBlur={props.colocaDesconto}/>
                                </div>
                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mt-3 mt-sm-3 mt-md-0 mt-lg-0 mt-xl-0">
                                    <input type="text" className="form-control" placeholder="Total" id="total" disabled />
                                </div>
                            </div>
                        </div>
                        <div className="col d-none position-absolute col-xl-12 col-lg-10 col-md-12 col-sm-12 bg-light listaMercadoria alturalista" id="listaMercadoria">
                            {props.listaMercadorias()}
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col col-xl-4 col-lg-4 col-md-6 col-sm-12 centralizar-vertical">
                            <button className="btn btn-success col" onClick={props.adicionaAoCarrinho}>Adicionar</button>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center centralizar-vertical">
                            <span className="col text-danger d-none" id="erroMessage">Preencha todos os campos</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col col-xl-9 col-lg-10 col-md-10 col-sm-12 centralizar-vertical alturatabela">
                <h3 className="text-center text-dark mt-5">Mercadorias na nota</h3>
                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Preço</th>
                            <th scope="col">Quant</th>
                            <th scope="col">Desconto</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.mercadoriasCarrinho.map(item => {
                            return (
                                <tr>
                                    <td>{item.nome}</td>
                                    <td>{item.precoVenda}</td>
                                    <td>{item.quant}</td>
                                    <td>{item.desconto}</td>
                                    <td>{item.total}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        <div className="col col-xl-9 col-lg-10 col-md-10 col-sm-12 centralizar-vertical text-right">
            <span className="mt-4 bold">Subtotal: {props.subtotal}</span>
        </div>
        <div className="row mt-4">
            <div className="col-12 col-xl-9 col-lg-10 col-md-10 col-sm-12 centralizar-vertical">
                <button className="btn btn-success float-right col-lg-2 col-xl-2 col-sm-4" onClick={props.finalizaNota}>Salvar nota</button>
                <button className="btn btn-danger float-right mt-4 mt-sm-4 mt-md-0 mt-lg-0 mt-xl-0 mr-0 mr-sm-0 mr-md-4 mr-lg-5 mr-xl-5" onClick={props.changeStatusToOne}>Cancelar Nota</button>
            </div>
        </div>
    </div>