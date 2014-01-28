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
    public class LocalController : Controller
    {
        private FoodZoneEntities db = new FoodZoneEntities();

        // GET: /Local/
        public ActionResult Index()
        {
            var locals = db.Locals.Include(l => l.TipoLocal).Include(l => l.Usuario).Include(l => l.Zona);
            return View(locals.ToList());
        }

        // GET: /Local/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Local local = db.Locals.Find(id);
            if (local == null)
            {
                return HttpNotFound();
            }
            return View(local);
        }

        // GET: /Local/Create
        public ActionResult Create()
        {
            ViewBag.TipoLocal_Codigo = new SelectList(db.TipoLocals, "TipoLocal_Codigo", "TipoLocal_Descripcion");
            ViewBag.Usuari_Codigo = new SelectList(db.Usuarios, "Usuari_Codigo", "Usuari_NombreCompleto");
            ViewBag.Zona_Codigo = new SelectList(db.Zonas, "Zona_Codigo", "Zona_Descripcion");
            return View();
        }

        // POST: /Local/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include="Local_Codigo,Local_Nombre,Local_Direccion,Local_Resena,Local_Latitud,Local_Longitud,Local_Activo,Local_ManoArriba,Local_ManoAbajo,Local_Foto,Local_FechaIngreso,Usuari_Codigo,TipoLocal_Codigo,Zona_Codigo")] Local local)
        {
            if (ModelState.IsValid)
            {
                db.Locals.Add(local);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.TipoLocal_Codigo = new SelectList(db.TipoLocals, "TipoLocal_Codigo", "TipoLocal_Descripcion", local.TipoLocal_Codigo);
            ViewBag.Usuari_Codigo = new SelectList(db.Usuarios, "Usuari_Codigo", "Usuari_NombreCompleto", local.Usuari_Codigo);
            ViewBag.Zona_Codigo = new SelectList(db.Zonas, "Zona_Codigo", "Zona_Descripcion", local.Zona_Codigo);
            return View(local);
        }

        // GET: /Local/Edit/5
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Local local = db.Locals.Find(id);
            if (local == null)
            {
                return HttpNotFound();
            }
            ViewBag.TipoLocal_Codigo = new SelectList(db.TipoLocals, "TipoLocal_Codigo", "TipoLocal_Descripcion", local.TipoLocal_Codigo);
            ViewBag.Usuari_Codigo = new SelectList(db.Usuarios, "Usuari_Codigo", "Usuari_NombreCompleto", local.Usuari_Codigo);
            ViewBag.Zona_Codigo = new SelectList(db.Zonas, "Zona_Codigo", "Zona_Descripcion", local.Zona_Codigo);
            return View(local);
        }

        // POST: /Local/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include="Local_Codigo,Local_Nombre,Local_Direccion,Local_Resena,Local_Latitud,Local_Longitud,Local_Activo,Local_ManoArriba,Local_ManoAbajo,Local_Foto,Local_FechaIngreso,Usuari_Codigo,TipoLocal_Codigo,Zona_Codigo")] Local local)
        {
            if (ModelState.IsValid)
            {
                db.Entry(local).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.TipoLocal_Codigo = new SelectList(db.TipoLocals, "TipoLocal_Codigo", "TipoLocal_Descripcion", local.TipoLocal_Codigo);
            ViewBag.Usuari_Codigo = new SelectList(db.Usuarios, "Usuari_Codigo", "Usuari_NombreCompleto", local.Usuari_Codigo);
            ViewBag.Zona_Codigo = new SelectList(db.Zonas, "Zona_Codigo", "Zona_Descripcion", local.Zona_Codigo);
            return View(local);
        }

        // GET: /Local/Delete/5
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Local local = db.Locals.Find(id);
            if (local == null)
            {
                return HttpNotFound();
            }
            return View(local);
        }

        // POST: /Local/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            Local local = db.Locals.Find(id);
            db.Locals.Remove(local);
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
