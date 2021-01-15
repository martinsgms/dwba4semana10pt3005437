class Table extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            componentes : [
                { id: 1, disciplina: 'Sistemas Operacionais', carga: 66.7, periodo: 'Noturno' },
                { id: 2, disciplina: 'Inglês', carga: 33.3, periodo: 'Noturno' },
                { id: 3, disciplina: 'Laboratório de Estruturas de Dados e Programação', carga: 33.3, periodo: 'Noturno' },
                { id: 4, disciplina: 'Introdução a Banco de Dados', carga: 66.7, periodo: 'Noturno' }
            ]
        }
    }

    tableHeader() {
        return Object
                .keys(this.state.componentes[0])
                .splice(1, 3)
                .map((key, index) => <th key={index}>{key.toUpperCase()}</th>)
    }

    tableData() {
        return this.state.componentes.map(c => 
            (
                <tr key={c.id}>
                    <td>{c.disciplina}</td>
                    <td>{c.carga}</td>
                    <td>{c.periodo}</td>
                </tr>
            )
        )
    }

    render() {
        return (
            <div>
                <center><h2 id='title'>Componentes curriculares</h2></center>
                <table class='table table-striped table-hover' id='componentes'>
                    <thead>
                        <tr class='table-success'>{this.tableHeader()}</tr>
                    </thead>
                    <tbody>
                        {this.tableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

ReactDOM.render(<Table />, document.getElementById('tabela'));