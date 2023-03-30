<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Http;

use App\Models\Asesor;
use App\Models\Ciudad;


class Asesores extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

     // PUT https://crm.atlashome.hn/api/v1/User/63ff9e85e9914f644

     //linkQrAsesor imagenQrAsesor
    public function run()
    {
        //

        $asesores = [
            //1 = asesores tegucigalpa 
            [
                'id' => 1,
                'nombre' => 'ANA GABRIELA GAMERO ERAZO',
                'celular' => '50497821395',
                'correo' => 'agamero@bancatlan.hn',
                'fk_ciudad' => [1],
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 2,
                'nombre' => 'MARICELA FONSECA GODOY',
                'celular' => '50495898027',
                'correo' => 'mfonseca@bancatlan.hn',
                'fk_ciudad' => [1],
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 3,
                'nombre' => 'KARINA CONCEPCION CHANDIAS',
                'celular' => '50432542864',
                'correo' => 'kcchandias@bancatlan.hn',
                'fk_ciudad' => [1],
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 4,
                'nombre' => 'NELCY LAINEZ MARTINEZ',
                'celular' => '50497687565',
                'correo' => 'nlainez@bancatlan.hn',
                'fk_ciudad' => [1],
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 5,
                'nombre' => 'KORIXA MARIBEL LAINEZ CABRERA',
                'celular' => '50499043488',
                'correo' => 'klainez@bancatlan.hn',
                'fk_ciudad' => [1],
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 6,
                'nombre' => 'SAGRARIO YOLIBETH STURZER BAQUEDANO',
                'celular' => '50487746600',
                'correo' => 'ssturzer@bancatlan.hn',
                'fk_ciudad' => [1],
                'created_at' => now(),
                'updated_at' => now()
            ],
            // atiende Tegucigalpa =1 , SPS=2, Danli = 12, Choluteca=5, nacaome=16
            [
                'id' => 7,
                'nombre' => 'LENIN ALEXANDER SUAZO SEVILLA',
                'celular' => '50433799021',
                'correo' => 'lsuazo@bancatlan.hn',
                'fk_ciudad' => [1,2,12,5,16],
                'created_at' => now(),
                'updated_at' => now()
            ],
            // asesores SAN PEDRO SULA = 2 y CHOLOMA = 4 y PUERTO CORTES = 7, omoa =22 y LA LIMA = 10
            [
                'id' => 8,
                'nombre' => 'XIOMARA SALMERON MARQUEZ',
                'celular' => '50499785763',
                'correo' => 'xsalmeron@bancatlan.hn',
                'fk_ciudad' => [2,4,7,10,22],
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 9,
                'nombre' => 'HENMIER VIRGINIA MACHADO GUERRERO',
                'celular' => '50432822472',
                'correo' => 'hmachado@bancatlan.hn',
                'fk_ciudad' => [2,4,7,10,22],
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 10,
                'nombre' => 'FANNY YOLANDA BAQUEDANO AMADOR',
                'celular' => '50431551595',
                'correo' => 'fbaquedano@bancatlan.hn',
                'fk_ciudad' => [2,4,7,10,22],
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 11,
                'nombre' => 'FLOR YISETH MOTIÑO GARCÍA',
                'celular' => '50495753711',
                'correo' => 'fymotino@bancatlan.hn',
                'fk_ciudad' => [2,4,7,10,22],
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 12,
                'nombre' => 'ROBERTO ANTONIO ZAVALA PAZ',
                'celular' => '50431991206',
                'correo' => 'rzavala@bancatlan.hn',
                'fk_ciudad' => [2,4,7,10,22],
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 13,
                'nombre' => 'SUSAN TRACY MARTINEZ ROMERO',
                'celular' => '50431626892',
                'correo' => 'stmartinez@bancatlan.hn',
                'fk_ciudad' => [2,4,7,10,22],
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 14,
                'nombre' => 'CLAUDIA IRIS ESCALÓN ABREGO',
                'celular' => '50499040144',
                'correo' => 'cescalon@bancatlan.hn',
                'fk_ciudad' => [2,4,7,10,22],
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 15,
                'nombre' => 'BEVERLYN MORALES MONTOYA',
                'celular' => '50499174327',
                'correo' => 'bmmorales@bancatlan.hn',
                'fk_ciudad' => [2,4,7,10,22],
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 16,
                'nombre' => 'CRÚZ MAGDALENA PEÑA BONILLA',
                'celular' => '50498708982',
                'correo' => 'cpena@bancatlan.hn',
                'fk_ciudad' => [2,4,7,10,22],
                'created_at' => now(),
                'updated_at' => now()
            ],
            // asesores Choluteca = 5 y Nacaome = 16
            [
                'id' => 17,
                'nombre' => 'MEISY MAHELY ALVARADO VILLATORO',
                'celular' => '50499457260',
                'correo' => 'mmalvarado@bancatlan.hn',
                'fk_ciudad' => [5,16],
                'created_at' => now(),
                'updated_at' => now()
            ],
            // asesores La Ceiba = 6, Utila =3, Roatan = 8, bonito oriental = 23
            [
                'id' => 18,
                'nombre' => 'DAISY PAMELA SAUCEDA LOPEZ',
                'celular' => '50494451871',
                'correo' => 'dsauceda@bancatlan.hn',
                'fk_ciudad' => [6,3,8,23],
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 19,
                'nombre' => 'YEIMI DANIELA AGUILAR MEJIA',
                'celular' => '50499495472',
                'correo' => 'ydaguilar@bancatlan.hn',
                'fk_ciudad' => [6,3,8,23],
                'created_at' => now(),
                'updated_at' => now()
            ],
            // asesores El Progreso = 9
            [
                'id' => 20,
                'nombre' => 'KARLA LORENA BANEGAS MENDOZA',
                'celular' => '50499218339',
                'correo' => 'klbanegas@bancatlan.hn',
                'fk_ciudad' => [9],
                'created_at' => now(),
                'updated_at' => now()
            ],
            // asesores Comayagua = 11 y Siguatepeque = 13
            [
                'id' => 21,
                'nombre' => 'MARIBEL BUESO CACERES',
                'celular' => '50498881743',
                'correo' => 'mbuesoc@bancatlan.hn',
                'fk_ciudad' => [11,13]
                'created_at' => now(),
                'updated_at' => now()
            ],
            // asesores Catacamas = 14 y juticalpa = 19 y trujillo = 15
            [
                'id' => 22,
                'nombre' => 'SANDY SUYAPA LICONA REYES',
                'celular' => '50498288455',
                'correo' => 'slicona@bancatlan.hn',
                'fk_ciudad' => [14,19,15],
                'created_at' => now(),
                'updated_at' => now()
            ],
            // Asesor Centro Sur (Tegus=1,Choluteca=5,Danli=12,Nacaome=16,La Paz=17,El Paraiso=18)
            [
                'id' => 23,
                'nombre' => 'EDUARDO JOSE ROSALES CASTILLO',
                'celular' => '50494425168',
                'correo' => 'ejrosales@bancatlan.hn',
                'fk_ciudad' => [1,5,12,16,17,18],
                'created_at' => now(),
                'updated_at' => now()
            ],
            // Asesor Zona Occidente Santa Barbara=20 y Santa Rosa =21
            [
                'id' => 24,
                'nombre' => 'JUAN CARLOS AGUILAR LÓPEZ',
                'celular' => '50498862734',
                'correo' => 'jclopez@bancatlan.hn',
                'fk_ciudad' => [21,20],
                'created_at' => now(),
                'updated_at' => now()
            ],
            
            

        ];

        foreach ($asesores as $asesor) {
            $validador = Asesor::find($asesor['id']);
            if ($validador == null) {

                $idCrmAsesor = $this->crearUsuarioAsesor($asesor);

                $asesor['id_crm'] = $idCrmAsesor['id'];

                $urlQrAsesor = $this->generarQrAsesor($asesor);
                $asesor['qr_asesor'] = $urlQrAsesor;

                DB::table('asesores')->insert($asesor);
            }
        }
    }

    protected function crearUsuarioAsesor($data){

        $ciudad = "Comodin";

        if(array_key_exists('fk_ciudad', $data)){
            $ciudad = Ciudad::select('nombre')->where('id_ciudad', $data['fk_ciudad'])->first()['nombre'];
        }

        $usuario = Http::withHeaders([
            'Content-type' => 'application/json',
            'X-Api-Key' => env('CRM_API_KEY')
        ])
        ->post(env('URL_CRM')."/Asesores", [
            'firstName' => $data['nombre'],
            'emailAddress' => $data['correo'],
            'phoneNumber' => $data['celular'],
            'addressCity' => $ciudad,
        ]);

        $dataJson = $usuario->json();

        return $dataJson;
    }

    protected function generarQrAsesor($data){

        $url = "https://creditos.atlashome.hn/Origen?Nombre=".rawurlencode($data['nombre'])."&IdAsesor=".$data['id_crm'];
        $urlNormal = "https://creditos.atlashome.hn/Origen?Nombre=".$data['nombre']."&IdAsesor=".$data['id_crm'];

        $qrBase64 = base64_encode(\QrCode::format('png')->size(200)->margin(4)->generate($url));

        $attachment = $this->createAttachmentCRM($qrBase64);

        $payload = [
            'linkQrAsesor' => $urlNormal,
            'imgQrAsesorIds' => [ $attachment['id'] ]
        ];

        $this->updateUsuarioAsesorCRM($data['id_crm'], $payload);

        return $urlNormal;

    }

    protected function createAttachmentCRM($base64File){

        $nameAttachmentFile = Str::random(8).".png";

        $fileBase64 = "data:image/png;base64,{$base64File}";

        $payload = [
            'name' => $nameAttachmentFile,
            'type' => 'image/png',
            'role' => 'Attachment',
            'parentType' => 'Asesores',
            'field' => 'imgQrAsesor',
            'file' => $fileBase64
        ];


        $response = Http::withHeaders([
            'Content-type' => 'application/json',
            'X-Api-Key' => env('CRM_API_KEY')
        ])
        ->post( env('URL_CRM')."/Attachment", $payload);

        $jsonData = $response->json();
        return $jsonData;
    }

    protected function updateUsuarioAsesorCRM($id,$payload){

        $usuario = Http::withHeaders([
            'Content-type' => 'application/json',
            'X-Api-Key' => env('CRM_API_KEY')
        ])
        ->put( env('URL_CRM')."/Asesores/".$id, $payload);

        $dataJson = $usuario->json();

        return $dataJson;

    }
}