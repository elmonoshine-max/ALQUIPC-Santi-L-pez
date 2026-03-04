# ALQUIPC - Sistema de Facturación

## Descripción

Este proyecto es un sistema de facturación desarrollado en HTML, CSS y JavaScript para la empresa ALQUIPC, la cual alquila equipos portátiles por días y hace que tu vida sea un poco más fluyente y puedas viajar a todos lados con un pc a tu lado para mayor flexibilidad y facilmente hacer todo lo que necesites.

El sistema permite calcular el valor total del alquiler teniendo en cuenta el valor base, recargos y descuentos.

## Funciones

- Calcular valor base ($35.000 por equipo por día)
- Aplicar recargo del 5% fuera de la ciudad
- Aplicar descuento del 5% dentro del establecimiento
- Aplicar descuento por días adicionales
- Generar ID automático
- Mostrar factura en pantalla

## Tecnologías usadas

- HTML
- CSS
- JavaScript


## Operaciones

1️// Dentro de la ciudad

2 × 1 × 35.000 = 70.000


2// Fuera de la ciudad (+5%)

2 × 1 × 35.000 = 70.000

70.000 × 0.05 = 3.500

70.000 + 3.500 = 73.500


3// Dentro del establecimiento (-5%)

2 × 1 × 35.000 = 70.000

70.000 × 0.05 = 3.500

70.000 - 3.500 = 66.500


(Con dias adicionales)

1//  Dentro de la ciudad

2 × 1 × 35.000 = 70.000

2 × 1 × 35.000 = 70.000

70.000 × 0.02 = 1.400

70.000 - 1.400 = 68.600

70.000 + 68.600 = 138.600


2// Fuera de la ciudad (+5%)

2 × 1 × 35.000 = 70.000

70.000 × 0.05 = 3.500

70.000 + 3.500 = 73.500

70.000

70.000 × 0.02 = 1.400

70.000 - 1.400 = 68.600

73.500 + 68.600 = 142.100

3// Dentro del establecimiento (-5%)

70.000 × 0.05 = 3.500

70.000 - 3.500 = 66.500

70.000 - 1.400 = 68.600

66.500 + 68.600 = 135.100



(Si quiero aumentar los dias extras, siempre se sube un 2% = 0,02)

## Cómo usar

1. Abrir el archivo index.html
2. Ingresar los datos solicitados
3. Presionar el botón FACTURAR
4. Ver el resultado


## Autor

Santiago López
2026