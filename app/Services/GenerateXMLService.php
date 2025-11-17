<?php


namespace App\Services;

use FluidXml\FluidXml;


class GenerateXMLService {

    /**
     * Генерация XML файла
     * @param string $name
     * @param array $values
     * @param FluidXml $xml
     * @return FluidXml
     */
    public static function Generate(string $name, array $values, FluidXml $xml): FluidXml {
        $tempArray = [];
        foreach ($values as $value) {
            // $xml->add([
            //     $name => [
            //         "id" => $value['id'],
            //         "content" => $value
            //     ]
            //     ]);

            array_push($tempArray, [
                "id" => $value['id'],
                "content" => $value
            ]);
        }

        $xml->add([
            $name => $tempArray
        ]);

        return $xml;
    }
}
