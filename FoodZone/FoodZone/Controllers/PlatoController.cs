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
    public class PlatoController : Controller
    {
        private FoodZoneEntities db = new FoodZoneEntities();

        // GET: /Plato/
        public ActionResult Index()
        {
            var platoes = db.Platoes.Include(p => p.Local).Include(p => p.Usuario);
            return View(platoes.ToList());
        }

        // GET: /Plato/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Plato plato = db.Platoes.Find(id);
            if (plato == null)
            {
                return HttpNotFound();
            }
            return View(plato);
        }

        // GET: /Plato/Create
        public ActionResult Create()
        {
            ViewBag.Local_Codigo = new SelectList(db.Locals, "Local_Codigo", "Local_Nombre");
            ViewBag.Usuari_Codigo = new SelectList(db.Usuarios, "Usuari_Codigo", "Usuari_NombreCompleto");
            return View();
        }

        // POST: /Plato/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include="Plato_Codigo,Plato_Nombre,Plato_Descripcion,Plato_ManoArriba,Plato_ManoAbajo,Plato_Foto,Local_Codigo,Plato_FechaIngreso,Usuari_Codigo")] Plato plato)
        {
            if (ModelState.IsValid)
            {
                db.Platoes.Add(plato);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.Local_Codigo = new SelectList(db.Locals, "Local_Codigo", "Local_Nombre", plato.Local_Codigo);
            ViewBag.Usuari_Codigo = new SelectList(db.Usuarios, "Usuari_Codigo", "Usuari_NombreCompleto", plato.Usuari_Codigo);
            return View(plato);
        }

        // GET: /Plato/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Plato plato = db.Platoes.Find(id);
            if (plato == null)
            {
                return HttpNotFound();
            }
            ViewBag.Local_Codigo = new SelectList(db.Locals, "Local_Codigo", "Local_Nombre", plato.Local_Codigo);
            ViewBag.Usuari_Codigo = new SelectList(db.Usuarios, "Usuari_Codigo", "Usuari_NombreCompleto", plato.Usuari_Codigo);
            return View(plato);
        }

        // POST: /Plato/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include="Plato_Codigo,Plato_Nombre,Plato_Descripcion,Plato_ManoArriba,Plato_ManoAbajo,Plato_Foto,Local_Codigo,Plato_FechaIngreso,Usuari_Codigo")] Plato plato)
        {
            if (ModelState.IsValid)
            {
                db.Entry(plato).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.Local_Codigo = new SelectList(db.Locals, "Local_Codigo", "Local_Nombre", plato.Local_Codigo);
            ViewBag.Usuari_Codigo = new SelectList(db.Usuarios, "Usuari_Codigo", "Usuari_NombreCompleto", plato.Usuari_Codigo);
            return View(plato);
        }

        // GET: /Plato/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Plato plato = db.Platoes.Find(id);
            if (plato == null)
            {
                return HttpNotFound();
            }
            return View(plato);
        }

        // POST: /Plato/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Plato plato = db.Platoes.Find(id);
            db.Platoes.Remove(plato);
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
