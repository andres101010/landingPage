import { Grid, Typography } from '@mui/material'
import img from '../../assets/imagenes/doctor.jpg'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Inicio = () => {
  return (
     <Grid container>
      <Grid item md={12} xs={12} textAlign={'center'}  color={'magenta'} style={{margin:'5px'}}><Typography variant='h2'>Otorrinolaring&#243;logo en Monterrey</Typography></Grid>
      <Grid item md={12} xs={12} style={{border:'solid 2px gray', borderRadius:'5px', margin:'auto'}}> 
        <p>El <strong>Dr. Jorge Treviño Garza</strong> es un <strong>Otorrinolaring&#243;logo en Monterrey</strong> que cuenta con especialidad 
        en Cirug&#237;a Pl&#225;stica Facial, es un m&#233;dico que constantemente se actualiza con el fin de 
        mejorar sus servicios a los pacientes. 
        </p>
      </Grid>
      <Grid item md={6}  style={{border:'solid 2px gray', borderRadius:'5px',padding:'5px'}}>
         <p>Servicios del <strong>Otorrinolaring&#243;logo en Monterrey</strong></p>
         <ul>
            <li>Consulta</li>
            <li>Radiofrecuencia de Cornetes</li>
            <li>Cirugia endosc&#243;pica para sinusitis</li>
            <li>Cirugia de Tabique Nasal</li>
            <li>Endoscopia Nasal</li>
            <li>Otorrinolaring&#243;logia Pedi&#225;trica</li>
         </ul>
         <img src={img} alt="imagen" />
      </Grid>
      <Grid item md={6}  style={{border:'solid 2px gray', borderRadius:'5px',padding:'7px'}}>
        <p>
            Te mereces un alto nivel de atencion por parte de un </p> <h2 style={{color:'magenta'}}><strong>Otorrinolaring&#243;logo</strong></h2>
            <p> de vanguardia, por lo que el <strong>Dr. Jorge Treviño Garza</strong> especialista en padecimiento de los o&#237;dos.
        </p>
        <p>
            Agenda una consulta por whatsapp al numero<br />
            <WhatsAppIcon />8115448285<br />
            O mediante una llamada al<br />
            <LocalPhoneIcon />8183475220<br />
            Nuestro correo:<br />
            <EmailIcon /> jorgetrega@gmail.com<br />
            Lunes a Sabado de 9:00 a 19:00 hs 
        </p>
      </Grid>
      <Grid item md={12} color={'magenta'}>
        <h2>Direccion del consultorio</h2>
      </Grid>
      <Grid item md={12}  style={{border:'solid 2px gray', borderRadius:'5px'}}>
        <p>Visitanos para que seas atendido con la atencion que te mereces en<br />
        <LocationOnIcon />Centro 
            de Especialidades Medicas 1er piso consultorio 126 Jose Benitez N# 2704 Colonia 
            obispado Monterrey NL CP 64060
        </p>
      </Grid>
      <Grid item md={12}  style={{border:'solid 2px gray', borderRadius:'5px'}}>
        <Grid item md={12} color={'magenta'}>
        <h3>El <strong>Otorrinolaring&#243;logo en Monterrey Jorge Treviño</strong></h3>
        </Grid>
        <p>es ahora uno de los 
            medicos mas importantes en su campo gracias a su contribucion a la investigacion y la prevencion.
        </p>
        <p>Da click en el boton de WhatsApp para contactarnos y para saber mas de el <strong><u>Otorrinolaring&#243;logo en Monterrey</u></strong></p>
        <a href="https://api.whatsapp.com/send?phone=8115448285" target='_blank' rel='noreferrer'
        style={{color:'green'}}
        ><WhatsAppIcon style={{fontSize:'40px'}} /></a>
      </Grid>
     </Grid>
  )
}

export default Inicio