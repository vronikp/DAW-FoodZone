//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace FoodZone.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Local
    {
        public Local()
        {
            this.Horarios = new HashSet<Horario>();
            this.Platoes = new HashSet<Plato>();
        }
    
        public string Local_Codigo { get; set; }
        public string Local_Nombre { get; set; }
        public string Local_Direccion { get; set; }
        public string Local_Resena { get; set; }
        public float Local_Latitud { get; set; }
        public float Local_Longitud { get; set; }
        public bool Local_Activo { get; set; }
        public int Local_ManoArriba { get; set; }
        public int Local_ManoAbajo { get; set; }
        public byte[] Local_Foto { get; set; }
        public System.DateTime Local_FechaIngreso { get; set; }
        public string Usuari_Codigo { get; set; }
        public string TipoLocal_Codigo { get; set; }
        public string Zona_Codigo { get; set; }
    
        public virtual ICollection<Horario> Horarios { get; set; }
        public virtual TipoLocal TipoLocal { get; set; }
        public virtual Usuario Usuario { get; set; }
        public virtual Zona Zona { get; set; }
        public virtual ICollection<Plato> Platoes { get; set; }
    }
}
