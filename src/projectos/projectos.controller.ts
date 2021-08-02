import { Body, Controller, Get, HttpService, NotFoundException, Param, Post, UploadedFiles, UseInterceptors, Put } from '@nestjs/common';
import { CreateProjectosDto } from './dto/projectos.dto';
import { ProjectosService } from './projectos.service';

@Controller('projectos')
export class ProjectosController {
    constructor(private readonly projectoService: ProjectosService){}
    @Get('/historicos')
    getManyHistoricos(){
        return this.projectoService.getProjectosHistoricos()
    }
    @Get('/')
    getMany(){
        return this.projectoService.getProjectos()
    }
    @Get('/projectos/aprobados')
    getAprobados(){
        return this.projectoService.getAprobados()
    }
    @Post('/')
    async createOne(@Body() dto:CreateProjectosDto){
        console.log(dto)
        return this.projectoService.createProjecto(dto)
    }

  
    @Get('id/:id')
    getOne(@Param('id') id:string) {
        const projecto = this.projectoService.getOneProjecto(id)
        if(!projecto) throw new NotFoundException('No se encontro el proyecto');
        return projecto;
    }
    @Get('/:nombre')
    getSearch(@Param('nombre') nombreProyecto :string) {
        console.log(nombreProyecto)
        const projecto = this.projectoService.getSearch(nombreProyecto )
        if(!projecto) throw new NotFoundException('No se encontro el proyecto');
        return projecto;
    }

    @Get('/projectos/inscritos')
    getProjectoInsc(){
        return this.projectoService.getProjectosInscritos()
    }

   
    async actualizarProyectoInscrito(id:string){
        return await this.projectoService.updateProjectoInscrito(id)
    }

    async eliminarProyectoInscrito(id:string){
        return await this.projectoService.deleteProjectoInscrito(id)
    }

    @Put(':id/desactivar')
    desactivarProyectoinscrito(@Param('id') id:string){
        return this.projectoService.desactivarProyecto(id)
    }



    @Post('/correo/aceptar/:id')
    async EmailAceptar(@Body() Body, @Param('id') id:string){
        
        require('dotenv').config();
        const nodemailer = require('nodemailer');

            let transporter = nodemailer.createTransport({
                service:'gmail',
                auth:{
                    user:process.env.EMAIL,
                    pass:process.env.PASSWORD
                }
            });

            let mailOptions = {
                from:process.env.EMAIL,
                to:Body.Email,
                subject:'CONFIRMACIÓN DE PARTICIPACIÓN EN EL CONCURSO DE PROYECTOS',
                text:'Su proyecto fue aceptado e inscrito al concurso de proyectos presente, en el siguiente enlace:https://www.facebook.com/tutoria.epis.upt podrá revisar, una vez concluido el plazo de inscripción, cuando se publique el orden de presentación y otros datos adicionales a tomar en cuenta durante su participación. Saludos Cordiales.'
            };

          transporter.sendMail(mailOptions, async(err, data) => {
                if(err){
                    console.log('Error Occurs', err);
                }else{
                    console.log('Email sent!!!');
                   
              await this.projectoService.updateProjectoInscrito(id);
                  
                }
            });
      
    }

    @Post('/correo/rechazar/:id')
    async EmailRechazar(@Body() Body, @Param('id') id:string ){
        
        require('dotenv').config();
        const nodemailer = require('nodemailer');

            let transporter = nodemailer.createTransport({
                service:'gmail',
                auth:{
                    user:process.env.EMAIL,
                    pass:process.env.PASSWORD
                }
            });

            let mailOptions = {
                from:process.env.EMAIL,
                to:Body.Email,
                subject:Body.Subject,
                text:Body.Text,
            };

            transporter.sendMail(mailOptions, async(err, data) =>{
                if(err){
                    console.log('Error Occurs', err);
                }else{
                    console.log('Email sent!!!');

                    await this.projectoService.deleteProjectoInscrito(id);
                }
            });
      
    }

  
}
