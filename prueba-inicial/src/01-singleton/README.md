¿Qué problema intenta resolver Singleton?
Garantizar que una clase tenga una sola instancia en todo el programa y ofrecer un punto de acceso global a ella.

¿Por qué suele utilizarse un constructor 'private'?
Para evitar que se cree el objeto desde fuera de la clase usando 'new'.

¿Cómo se obtiene una instancia de la clase?
Llamando a un método estático público (como 'getInstance()''), que la crea la primera vez y después devuelve siempre la misma.

¿Qué ocurriría si pudiéramos utilizar 'new' libremente?
Se crearían múltiples objetos independientes, lo que provocaría fallos de sincronización de datos y duplicación inútil de recursos.

Ejemplo real de uso:
Un Gestor de Configuración o la Conexión a la Base de Datos, donde todos los componentes deben leer los mismos datos compartidos sin abrir conexiones duplicadas.

¿Qué inconveniente puede tener abusar de Singleton?
