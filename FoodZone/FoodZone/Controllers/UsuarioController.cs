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
    public class UsuarioController : Controller
    {
        private FoodZoneEntities db = new FoodZoneEntities();

        // GET: /Usuario/
        public ActionResult Index()
        {
            var usuarios = db.Usuarios.Include(u => u.TipoUsuario).Include(u => u.Usuario2);
            return View(usuarios.ToList());
        }

        // GET: /Usuario/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Usuario usuario = db.Usuarios.Find(id);
            if (usuario == null)
            {
                return HttpNotFound();
            }
            return View(usuario);
        }

        // GET: /Usuario/Create
        public ActionResult Create()
        {
            ViewBag.TipoUsuario_Codigo = new SelectList(db.TipoUsuarios, "TipoUsuario_Codigo", "TipoUsuario_Descripcion");
            ViewBag.Usuari_UsuarioIngreso = new SelectList(db.Usuarios, "Usuari_Codigo", "Usuari_NombreCompleto");
            return View();
        }

        // POST: /Usuario/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include="Usuari_Codigo,Usuari_NombreCompleto,Usuari_Clave,Usuari_Email,Usuari_FechaIngreso,Usuari_UsuarioIngreso,Usuari_Activo,TipoUsuario_Codigo")] Usuario usuario)
        {
            if (ModelState.IsValid)
            {
                db.Usuarios.Add(usuario);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.TipoUsuario_Codigo = new SelectList(db.TipoUsuarios, "TipoUsuario_Codigo", "TipoUsuario_Descripcion", usuario.TipoUsuario_Codigo);
            ViewBag.Usuari_UsuarioIngreso = new SelectList(db.Usuarios, "Usuari_Codigo", "Usuari_NombreCompleto", usuario.Usuari_UsuarioIngreso);
            return View(usuario);
        }

        // GET: /Usuario/Edit/5
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Usuario usuario = db.Usuarios.Find(id);
            if (usuario == null)
            {
                return HttpNotFound();
            }
            ViewBag.TipoUsuario_Codigo = new SelectList(db.TipoUsuarios, "TipoUsuario_Codigo", "TipoUsuario_Descripcion", usuario.TipoUsuario_Codigo);
            ViewBag.Usuari_UsuarioIngreso = new SelectList(db.Usuarios, "Usuari_Codigo", "Usuari_NombreCompleto", usuario.Usuari_UsuarioIngreso);
            return View(usuario);
        }

        // POST: /Usuario/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include="Usuari_Codigo,Usuari_NombreCompleto,Usuari_Clave,Usuari_Email,Usuari_FechaIngreso,Usuari_UsuarioIngreso,Usuari_Activo,TipoUsuario_Codigo")] Usuario usuario)
        {
            if (ModelState.IsValid)
            {
                db.Entry(usuario).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.TipoUsuario_Codigo = new SelectList(db.TipoUsuarios, "TipoUsuario_Codigo", "TipoUsuario_Descripcion", usuario.TipoUsuario_Codigo);
            ViewBag.Usuari_UsuarioIngreso = new SelectList(db.Usuarios, "Usuari_Codigo", "Usuari_NombreCompleto", usuario.Usuari_UsuarioIngreso);
            return View(usuario);
        }

        // GET: /Usuario/Delete/5
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Usuario usuario = db.Usuarios.Find(id);
            if (usuario == null)
            {
                return HttpNotFound();
            }
            return View(usuario);
        }

        // POST: /Usuario/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            Usuario usuario = db.Usuarios.Find(id);
            db.Usuarios.Remove(usuario);
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
