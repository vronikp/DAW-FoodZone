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
    public class HorarioController : Controller
    {
        private FoodZoneEntities db = new FoodZoneEntities();

        // GET: /Horario/
        public ActionResult Index()
        {
            var horarios = db.Horarios.Include(h => h.Local).Include(h => h.Usuario);
            return View(horarios.ToList());
        }

        // GET: /Horario/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Horario horario = db.Horarios.Find(id);
            if (horario == null)
            {
                return HttpNotFound();
            }
            return View(horario);
        }

        // GET: /Horario/Create
        public ActionResult Create()
        {
            ViewBag.Local_Codigo = new SelectList(db.Locals, "Local_Codigo", "Local_Nombre");
            ViewBag.Usuari_Codigo = new SelectList(db.Usuarios, "Usuari_Codigo", "Usuari_NombreCompleto");
            return View();
        }

        // POST: /Horario/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include="Horari_Codigo,Horari_Fecha,Horari_HoraDesde,Horari_HoraHasta,Horari_Grupo,Local_Codigo,Usuari_Codigo")] Horario horario)
        {
            if (ModelState.IsValid)
            {
                db.Horarios.Add(horario);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.Local_Codigo = new SelectList(db.Locals, "Local_Codigo", "Local_Nombre", horario.Local_Codigo);
            ViewBag.Usuari_Codigo = new SelectList(db.Usuarios, "Usuari_Codigo", "Usuari_NombreCompleto", horario.Usuari_Codigo);
            return View(horario);
        }

        // GET: /Horario/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Horario horario = db.Horarios.Find(id);
            if (horario == null)
            {
                return HttpNotFound();
            }
            ViewBag.Local_Codigo = new SelectList(db.Locals, "Local_Codigo", "Local_Nombre", horario.Local_Codigo);
            ViewBag.Usuari_Codigo = new SelectList(db.Usuarios, "Usuari_Codigo", "Usuari_NombreCompleto", horario.Usuari_Codigo);
            return View(horario);
        }

        // POST: /Horario/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include="Horari_Codigo,Horari_Fecha,Horari_HoraDesde,Horari_HoraHasta,Horari_Grupo,Local_Codigo,Usuari_Codigo")] Horario horario)
        {
            if (ModelState.IsValid)
            {
                db.Entry(horario).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.Local_Codigo = new SelectList(db.Locals, "Local_Codigo", "Local_Nombre", horario.Local_Codigo);
            ViewBag.Usuari_Codigo = new SelectList(db.Usuarios, "Usuari_Codigo", "Usuari_NombreCompleto", horario.Usuari_Codigo);
            return View(horario);
        }

        // GET: /Horario/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Horario horario = db.Horarios.Find(id);
            if (horario == null)
            {
                return HttpNotFound();
            }
            return View(horario);
        }

        // POST: /Horario/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Horario horario = db.Horarios.Find(id);
            db.Horarios.Remove(horario);
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
