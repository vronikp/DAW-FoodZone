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
    
    public partial class Plato
    {
        public Plato()
        {
            this.HorarioPlatoes = new HashSet<HorarioPlato>();
        }
    
        public int Plato_Codigo { get; set; }
        public string Plato_Nombre { get; set; }
        public string Plato_Descripcion { get; set; }
        public Nullable<int> Plato_ManoArriba { get; set; }
        public Nullable<int> Plato_ManoAbajo { get; set; }
        public byte[] Plato_Foto { get; set; }
        public string Local_Codigo { get; set; }
        public Nullable<System.DateTime> Plato_FechaIngreso { get; set; }
        public string Usuari_Codigo { get; set; }
    
        public virtual ICollection<HorarioPlato> HorarioPlatoes { get; set; }
        public virtual Local Local { get; set; }
        public virtual Usuario Usuario { get; set; }
    }
}