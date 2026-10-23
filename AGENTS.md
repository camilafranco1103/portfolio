# Instrucciones del proyecto

## Contexto y arquitectura

- Este portfolio está desarrollado con React, TypeScript, Vite y Tailwind CSS 4.
- Antes de cambiar código, revisá la estructura y los componentes existentes para entender cómo encaja el cambio.
- Respetá la arquitectura, las convenciones y los componentes actuales. Preferí extender o reutilizar lo existente antes de crear componentes nuevos.
- Mantené React, TypeScript, Vite, Tailwind CSS y las demás tecnologías ya configuradas. No migres de framework ni reemplaces herramientas sin una necesidad concreta.

## Interfaz y experiencia

- Conservá una estética minimalista, moderna, profesional y coherente con el portfolio.
- Aplicá buenas prácticas de UI/UX: jerarquía visual clara, contenido legible, interacciones previsibles y estados comprensibles.
- Asegurá que las vistas y los componentes funcionen en distintos tamaños de pantalla.
- Tené en cuenta la accesibilidad: HTML semántico, navegación por teclado, foco visible, contraste suficiente y alternativas textuales para imágenes cuando corresponda.
- Respetá las preferencias de movimiento reducido del sistema cuando agregues animaciones.

## Iconografía

- No uses emojis Unicode, emoticonos ni caracteres de texto como sustitutos de iconos en la interfaz.
- Usá exclusivamente la librería de iconos vectoriales aprobada para el proyecto. No agregues ni cambies librerías de iconos sin aprobación.
- Mantené coherencia en trazo, tamaño y alineación. Marcá los iconos decorativos con `aria-hidden="true"` y asegurá un nombre accesible para los controles que dependan de un icono.

## Dependencias y seguridad de cambios

- Evitá duplicar componentes, estilos o lógica. Reutilizá las soluciones existentes cuando sea razonable.
- No agregues dependencias si las herramientas o capacidades ya disponibles resuelven la necesidad.
- No modifiques archivos de variables de entorno ni expongas secretos.
- Evitá cambios destructivos. No borres ni reemplaces contenido ajeno a la tarea solicitada.
- No sobrescribas cambios locales existentes sin revisarlos primero.

## Forma de trabajo

- Antes de implementar cada tarea, analizá brevemente el contexto y proponé un plan conciso.
- Si el pedido es ambiguo o puede afectar varias partes del proyecto, consultá antes de tomar decisiones importantes.
- Implementá únicamente los cambios necesarios para cumplir el pedido.
- Al terminar, verificá los cambios con las herramientas disponibles y resumí qué modificaste y qué verificaciones realizaste.
- Si una verificación no puede ejecutarse, indicá el motivo y no afirmes que pasó correctamente.
