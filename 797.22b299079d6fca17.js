"use strict";(self.webpackChunkMueveteSevilla=self.webpackChunkMueveteSevilla||[]).push([[797],{5797:(Z,s,a)=>{a.r(s),a.d(s,{ListarComentariosModule:()=>v});var c=a(6019),l=a(2979),g=a(273),t=a(3556),i=a(4522),p=a(875);let m=(()=>{class o{constructor(e){this.http=e}obtenerComentarios(){let e=p.N.baseURL+"comentario";const r=(new i.WM).set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(e,{headers:r})}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(i.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var u=a(2501);function d(o,n){if(1&o&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.qZA()),2&o){const e=n.$implicit;t.xp6(2),t.Oqu(e.email),t.xp6(2),t.Oqu(e.telefono),t.xp6(2),t.Oqu(e.contenidocomentario)}}const h=[{path:"",component:(()=>{class o{constructor(e){this.servicioComentario=e,this.comentarios=[],this.opcionesDataTables={},this.triggerDatatables=new g.x}ngOnInit(){this.obtenerComentarios(),this.opcionesDataTables={pagingType:"full_numbers",pageLength:10,language:{url:"http://cdn.datatables.net/plug-ins/1.11.5/i18n/es-ES.json"}}}obtenerComentarios(){this.servicioComentario.obtenerComentarios().subscribe({next:e=>{this.comentarios=e,this.triggerDatatables.next(null)}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-listacomentarios"]],decls:12,vars:3,consts:[[1,"table-responsive"],["datatable","",1,"table",3,"dtOptions","dtTrigger"],[4,"ngFor","ngForOf"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"table",1),t.TgZ(2,"thead"),t.TgZ(3,"tr"),t.TgZ(4,"th"),t._uU(5,"Email"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Telefono"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Contenido del comentario"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"tbody"),t.YNc(11,d,7,3,"tr",2),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("dtOptions",r.opcionesDataTables)("dtTrigger",r.triggerDatatables),t.xp6(10),t.Q6J("ngForOf",r.comentarios))},directives:[u.G,c.sg],encapsulation:2}),o})()}];let C=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.Bz.forChild(h)],l.Bz]}),o})(),v=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[m],imports:[[c.ez,i.JF,u.T,C]]}),o})()}}]);