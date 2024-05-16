import React from 'react'
import './Financeiro.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useState } from 'react'
import { useContext } from 'react';
import Datainfor from '../../Contexts/DataInfor';



export  const Financeiro = () => {
  const { dataFinance, setDataFinance } = useContext(Datainfor);  
  
const [financialData, setFinancialData] = useState(
  {
    tipodedado:'',
    valor:'',
    statuspagamento:'',
    datapagamento:'',
    tipolancamento:'',
    comprovante:'',
    observacao:'',
  });
  
 

  const handleCampfinancial =(event) =>{
    setFinancialData({...financialData,[event.target.name]: event.target.value
    })
  }
const handleFormFinancial =(event) =>{
  event.preventDefault();
  setDataFinance ((dataFinance) =>[...dataFinance,financialData ])
     
      setFinancialData('');
}

  return (
    <div className='LayoutFinanceiro'>
       
        <Header />
        <div className='FinanceiroContent'>
          <div className="containerFinanceiro">
            <form onSubmit={handleFormFinancial}>
              <div className="titleAndBtn">
                <h2>Cadastro Financeiro</h2>
                <button>Salvar</button>
                
              </div>
              <label className="campForm">
                <p>Tipo de registro</p>
                <select 
                name="tipodedado" 
                id="tipodedado"
                value={financialData.tipodedado}
                onChange={handleCampfinancial}>
                  <option value=""></option>
                  <option value="receita">Receita</option>
                  <option value="despesa">Despesa</option>
                </select>
              </label>
              <label className="campForm">
                <p>Valor</p>
                <input type="number" 
                name="valor" 
                id="valor" 
                value={financialData.valor}
                onChange={handleCampfinancial}
                />
              </label>
             

              <label className="campForm">
                <p>Status</p>
                <select 
                name="statuspagamento" 
                id="statuspagamento"
                value={financialData.statuspagamento}
                onChange={handleCampfinancial}
                > 
                  <option value=""></option>
                  <option value="pago">Pago</option>
                  <option value="Nãopago">Não pago</option>
                </select>
              </label>
              <label className="campForm">
                <p>Data</p>
                <input type="date" 
                name="datapagamento" 
                id="datapagamento"
                value={financialData.datapagamento}
                onChange={handleCampfinancial}
                 
                />
              </label>
            
              <label className="campForm">
                <p>Tipo de lançamento</p>
                <select 
                name="tipolancamento" 
                id="tipolancamento"
                value={financialData.tipolancamento}
                onChange={handleCampfinancial}
                >
                  <option value=""></option>
                  <option value="agua">Água</option>
                  <option value="luz">Luz</option>
                  <option value="aluguel">Aluguel</option>
                  <option value="despesadepartamento">Despesa de departamento</option>
                  <option value="internet">Internet</option>
                </select>
              </label>
            
              
              <label className="campForm">
                <p>Comprovantes</p>
                <input type="file" 
               
                name="comprovante" 
                id="comprovante"
                value={financialData.comprovante}
                onChange={handleCampfinancial}
                 />
              </label>
              <label className="campForm">
                <p>Descrição</p>
                <textarea 
                name="descricao" 
                id="descricao" 
                cols="85" 
                rows="5"
                value={financialData.descricao}
                onChange={handleCampfinancial}
                ></textarea>
              </label>
              <label className="campForm">
                <p>Observação</p>
                <textarea 
                name="observacao" 
                id="observacao" 
                cols="30" 
                rows="10"
                value={financialData.observacao}
                onChange={handleCampfinancial}
                ></textarea>
              </label>
            </form>
            <div className="tableFinanceiro">
              <table>
                <thead>
                 
                    <tr>
                    <th></th>
                    <th className='titleTable'>Tipo de registro</th>
                    <th className='titleTable'>Valor</th>
                    <th className='titleTable'>Status</th>
                    <th className='titleTable'>Data do pagamento</th>
                    <th className='titleTable'>Tipo de lançamento</th>
                    <th className='titleTable'>Descrição</th>
                    <th className='titleTable'>Comprovantes</th>
                  </tr>
                </thead>
                <tbody>
                {dataFinance.map((data, index)=>(
                   <tr key={index}>
                    <td className='togleeMark'><input type="checkbox" name="" id="" /></td>
                   <td className='dataTable'>{data.tipodedado}</td>
                   <td className='dataTable'>{data.valor}</td>
                   <td className='dataTable'>{data.statuspagamento}</td>
                   <td className='dataTable'>{data.datapagamento}</td>
                   <td className='dataTable'>{data.tipolancamento}</td>
                   <td className='dataTable'>{data.descricao}</td>
                   <td className='dataTable'>{data.observacao}</td>
                 </tr>
                ))}
                 
                </tbody>
              </table>
            </div>
            
          </div>
          
          <Footer/>
        </div>

      
    </div>
  )
  
}
