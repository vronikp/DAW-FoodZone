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
    public class TipoLocalController : Controller
    {
        private FoodZoneEntities db = new FoodZoneEntities();

        // GET: /TipoLocal/
        public ActionResult Index()
        {
            return View(db.TipoLocals.ToList());
        }

        // GET: /TipoLocal/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TipoLocal tipolocal = db.TipoLocals.Find(id);
            if (tipolocal == null)
            {
                return HttpNotFound();
            }
            return View(tipolocal);
        }

        // GET: /TipoLocal/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: /TipoLocal/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include="TipoLocal_Codigo,TipoLocal_Descripcion,TipoLocal_Activo")] TipoLocal tipolocal)
        {
            if (ModelState.IsValid)
            {
                db.TipoLocals.Add(tipolocal);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(tipolocal);
        }

        // GET: /TipoLocal/Edit/5
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TipoLocal tipolocal = db.TipoLocals.Find(id);
            if (tipolocal == null)
            {
                return HttpNotFound();
            }
            return View(tipolocal);
        }

        // POST: /TipoLocal/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include="TipoLocal_Codigo,TipoLocal_Descripcion,TipoLocal_Activo")] TipoLocal tipolocal)
        {
            if (ModelState.IsValid)
            {
                db.Entry(tipolocal).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(tipolocal);
        }

        // GET: /TipoLocal/Delete/5
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TipoLocal tipolocal = db.TipoLocals.Find(id);
            if (tipolocal == null)
            {
                return HttpNotFound();
            }
            return View(tipolocal);
        }

        // POST: /TipoLocal/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            TipoLocal tipolocal = db.TipoLocals.Find(id);
            db.TipoLocals.Remove(tipolocal);
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
