using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Dominio.ObjetoDeValor
{
    class FormaPagamento:Entidades.Entidade
    {
        public string Nome { get; set; }
        public string Descricao { get; set; }

        public bool EhBoleto {
            get { return Id == (int)TipoFormaPagamentoEnum.Boleto; }
        }
        public bool EhCartao
        {
            get { return Id == (int)TipoFormaPagamentoEnum.CartaoCredito; }
        }
        public bool EhDeposito
        {
            get { return Id == (int)TipoFormaPagamentoEnum.Deposito; }
        }
        public bool NaoFoiDefinido
        {
            get { return Id == (int)TipoFormaPagamentoEnum.NaoDefinido; }
        }
    }
}
