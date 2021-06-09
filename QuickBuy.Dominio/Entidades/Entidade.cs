using System.Collections.Generic;
using System.Linq;

namespace QuickBuy.Dominio.Entidades
{
    public abstract class Entidade
    {
        public int Id { get; set; }
        private List<string> _mensagensValidacao { get; set;  }
        public List<string> MensagensValidacao
        {
            get { return _mensagensValidacao ?? (_mensagensValidacao = new List<string>());  }
        }

        protected void LimpaMensagensValidacao()
        {
            MensagensValidacao.Clear();
        }

        protected void AdicionarCritica(string Mensagem)
        {
            MensagensValidacao.Add(Mensagem);
        }
        public abstract void Validate();

        protected bool EhValido
        {
            get { return MensagensValidacao.Any(); }
        }
    }
}
