import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/articulos/articulos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  urlImg = '/assets/img/servicios/iconos';
  servicios = [
    {img: `${ this.urlImg }/cabeza cerebro.png`, desc: 'Psicología: Orientación psicológica y conferencias.'},
    {img: `${ this.urlImg }/academico.png`, desc: 'Cursos: Académicos y de Desarrollo Humano.'},
    {img: `${ this.urlImg }/servicios.png`, desc: 'Evaluaciones y peritajes psicológicos.'},
    {img: `${ this.urlImg }/persona.png`, desc: 'Reclutamiento y selección de talento humano.'},
    {img: `${ this.urlImg }/blog.png`, desc: 'Publicidad estratégica de su organización en nuestro blog, revista y redes sociales.'},
  ];
  fundadora = [
    {titulo: 'Licenciada en Psicología egresada a los 20 años, con honores, de la UADY (Cédula:5157846).'},
    {titulo: 'Primer Lugar Nacional en México en el EGEL-PSI, con especialidad en Clínica.'},
    {titulo: 'Maestra en Psicología y Orientación Vocacional, ENSY (Cédula: 09887047).'},
    {titulo: 'Perito en Psicología certificada por el Poder Judicial, con registro: RP249/2018.'},
    {titulo: 'Certificada por la norma CONOCER/SEP desde el 2013, en impartición de cursos deformación del' +
    ' capital humano por competencias (Registro no. 138335).'},
    {titulo: 'Certificada por la Secretaría de Trabajo y Previsión Social STPS desde el 2009, como '
    + 'instructora externa independiente (Registro: AAVD-830901-R84-0005).'},
    {titulo: 'Doctorado en Ciencias de la Educación, Universidad Anáhuac Mayab (en curso).'},
    {titulo: 'Licenciatura en Derecho, UNAM (en curso).'},
    {titulo: 'Estudiante de la Maestría Interinstitucional en Derecho Político y Procesos Electorales '
    + '(Universidad de Tlaxcala / IEPAC).'},
    {titulo: 'Conferencista Internacional, categoría Gold en la Red Mundial de Conferencistas RMC '
    + 'con sede en Alemania.', url: 'https://conferencistas.eu/deya/'},
    {titulo: 'Ha brindado conferencias, cursos y talleres en múltiples organizaciones como COPARMEX, '
    + 'CMIC, CANACINTRA, CFE, Grupo Lala, BEPENSA, INE, Plataformas Petroleras PEMEX/DEMAR.'},
  ];
  ckeConfig: any;
  mycontent: string;
  log  = '';
  constructor( public artService: ArticulosService) { this.mycontent = `<p>My html content</p>`; }

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: false,
      forcePasteAsPlainText: true,
      toolbarCanCollapse: true,
      contentsLanguage: 'es',
      entities_latin: true,
      defaultLanguage: 'es',
      entities: false,
      toolbarGroups: [
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
    // { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
    { name: 'links' },
    '/',
    // { name: 'styles' },
    { name: 'tools' },
    { name: 'others' },
      ],
      uiColor: '#AADC6E',
      width: '50%'
    };
  }

  onChange($event: any): void {
    // this.log += new Date() + "<br />";
    // console.log(this.mycontent);
  }
  imprime(f) {

  }
  crearBlog(titulo) {
    console.log(titulo);
    console.log(this.mycontent);
    this.artService.crearArticulo({
      titulo,
      contenido: this.mycontent
    }).subscribe();
  }

}
