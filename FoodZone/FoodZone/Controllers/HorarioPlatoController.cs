using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using FoodZone.Models;

namespace FoodZone.Controllers
{
    public class HorarioPlatoController : Controller
    {
        private FoodZoneEntities db = new FoodZoneEntities();

        // GET: /HorarioPlato/
        public ActionResult Index()
        {
            var horarioplatoes = db.HorarioPlatoes.Include(h => h.Horario).Include(h => h.Plato).Include(h => h.Usuario);
            return View(horarioplatoes.ToList());
        }

        // GET: /HorarioPlato/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            HorarioPlato horarioplato = db.HorarioPlatoes.Find(id);
            if (horarioplato == null)
            {
                return HttpNotFound();
            }
            return View(horarioplato);
        }

        // GET: /HorarioPlato/Create
        public ActionResult Create()
        {
            ViewBag.Horari_Codigo = new SelectList(db.Horarios, "Horari_Codigo", "Local_Codigo");
            ViewBag.Plato_Codigo = new SelectList(db.Platoes, "Plato_Codigo", "Plato_Nombre");
            ViewBag.Usuari_Codigo = new SelectList(db.Usuarios, "Usuari_Codigo", "Usuari_NombreCompleto");
            return View();
        }

        // POST: /HorarioPlato/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include="Horari_Codigo,Plato_Codigo,HorPla_Activo,Usuari_Codigo")] HorarioPlato horarioplato)
        {
            if (ModelState.IsValid)
            {
                db.HorarioPlatoes.Add(horarioplato);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.Horari_Codigo = new SelectList(db.Horarios, "Horari_Codigo", "Local_Codigo", horarioplato.Horari_Codigo);
            ViewBag.Plato_Codigo = new SelectList(db.Platoes, "Plato_Codigo", "Plato_Nombre", horarioplato.Plato_Codigo);
            ViewBag.Usuari_Codigo = new SelectList(db.Usuarios, "Usuari_Codigo", "Usuari_NombreCompleto", horarioplato.Usuari_Codigo);
            return View(horarioplato);
        }

        // GET: /HorarioPlato/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            HorarioPlato horarioplato = db.HorarioPlatoes.Find(id);
            if (horarioplato == null)
            {
                return HttpNotFound();
            }
            ViewBag.Horari_Codigo = new SelectList(db.Horarios, "Horari_Codigo", "Local_Codigo", horarioplato.Horari_Codigo);
            ViewBag.Plato_Codigo = new SelectList(db.Platoes, "Plato_Codigo", "Plato_Nombre", horarioplato.Plato_Codigo);
            ViewBag.Usuari_Codigo = new SelectList(db.Usuarios, "Usuari_Codigo", "Usuari_NombreCompleto", horarioplato.Usuari_Codigo);
            return View(horarioplato);
        }

        // POST: /HorarioPlato/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include="Horari_Codigo,Plato_Codigo,HorPla_Activo,Usuari_Codigo")] HorarioPlato horarioplato)
        {
            if (ModelState.IsValid)
            {
                db.Entry(horarioplato).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.Horari_Codigo = new SelectList(db.Horarios, "Horari_Codigo", "Local_Codigo", horarioplato.Horari_Codigo);
            ViewBag.Plato_Codigo = new SelectList(db.Platoes, "Plato_Codigo", "Plato_Nombre", horarioplato.Plato_Codigo);
            ViewBag.Usuari_Codigo = new SelectList(db.Usuarios, "Usuari_Codigo", "Usuari_NombreCompleto", horarioplato.Usuari_Codigo);
            return View(horarioplato);
        }

        // GET: /HorarioPlato/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            HorarioPlato horarioplato = db.HorarioPlatoes.Find(id);
            if (horarioplato == null)
            {
                return HttpNotFound();
            }
            return View(horarioplato);
        }

        // POST: /HorarioPlato/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            HorarioPlato horarioplato = db.HorarioPlatoes.Find(id);
            db.HorarioPlatoes.Remove(horarioplato);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
