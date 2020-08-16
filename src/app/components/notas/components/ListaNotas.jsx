import React from 'react'

export default props =>
    <div className="col col-12" id="listaMercadorias">
        <div className="row">
            <div className="col col-xl-8 centralizar-vertical">
                <div className="row mt-5 mb-5">
                    <div className="col text-center">
                        <h3 className=" text-dark d-inline">Vendas</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 col-sm-6 d-block d-sm-block d-md-none d-lg-none d-xl-none centralizar-vertical">
                        <button className="btn btn-success float-right mb-4 col" onClick={props.changeStatusToZero}>Nova</button>
                    </div>
                    <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
                        <div className="row">
                            <div className="col-12 col-sm-12 d-block d-sm-block d-md-none d-lg-none d-xl-none text-center mb-3 mt-3">
                                <h5>Buscar por data</h5>
                            </div>
                            <div className="col">
                                <input type="date" className="form-control" id="datainicial" />
                            </div>
                            <div className="col">
                                <input type="date" className="form-control" id="datafinal" />
                            </div>
                            <div className="col-8 col-sm-8 col-md-2 col-lg-2 col-xl-2 mb-4 mt-4 mt-sm-4 mt-md-0 mt-lg-0 mt-xl-0 centralizar-vertical">
                                <button className="btn btn-primary col" onClick={props.buscaNotaData}>Buscar</button>
                            </div>
                        </div>
                    </div>
                    <div className="col d-none d-sm-none d-md-block d-lg-block d-xl-block">
                        <button className="btn btn-success mb-4" onClick={props.changeStatusToZero}>Nova</button>
                    </div>
                </div>
                <div className="col alturatabela">
                    <table className="table" id="tabela">
                        <thead>
                            <tr>
                                <th scope="col">Cliente</th>
                                <th scope="col">Data</th>
                                <th scope="col">Total</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.notas.map(nota => {
                                return (
                                    <tr>
                                        <td>{nota.cliente}</td>
                                        <td>{nota.data}</td>
                                        <td>{nota.total}</td>
                                        <td>
                                            <button className="btn btn-primary col-12 col-sm-12 col-md-5 col-lg-3 col-xl-3" idnota={nota.id} onClick={props.visualizaNota()}>Detalhes</button>
                                            <button href="/dashboard/notas" idnota={nota.id} className="btn btn-primary text-white mt-3 mt-sm-3 mt-md-0 mt-lg-0 ml-md-2 mt-xl-0 ml-xl-4 col-12 col-sm-12 col-md-5 col-lg-3 col-xl-3" onClick={props.geraPDF()}>PDF</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
        <div className="row mt-3 mb-5">
            <div className="col">
                <div className="row">
                    <div className="col-10 col-xl-2 col-lg-6 col-md-4 col-sm-10 centralizar-vertical">
                        <button className="col btn btn-primary text-white mt-3 mt-sm-3 mt-md-0 mt-lg-0 mt-xl-0" onClick={props.maisDez}>Mais 10</button>
                    </div>
                </div>
            </div>
        </div>
    </div>