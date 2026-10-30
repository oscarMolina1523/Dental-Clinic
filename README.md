#  Backend API - Clínica Odontológica "Dra. López"

API RESTful completa para la gestión integral médica y administrativa de la clínica odontológica **Odontología Integral Dra. López**. 

El sistema ha sido diseñado siguiendo los principios de **Domain-Driven Design (DDD)**, arquitectura limpia (Clean Architecture), **Inyección de Dependencias (IoC)** y almacenamiento relacional distribuido con **Turso SQL (LibSQL)**.

---

##  Stack Tecnológico

* **Entorno de Ejecución:** Node.js (`v18+`)
* **Lenguaje:** TypeScript (Tipado estricto)
* **Framework Web:** Express.js
* **Base de Datos:** Turso SQL (`@libsql/client` - SQLite distribuido)
* **Inyección de Dependencias:** `tsyringe`
* **Autenticación & Seguridad:** JSON Web Tokens (`jsonwebtoken`), `bcryptjs`
* **Documentación:** Swagger UI (`swagger-ui-express`)
* **Despliegue:** Vercel (Serverless Functions)

---

##  Estructura del Proyecto (Domain-Driven Design)

El código se encuentra organizado según capas bien definidas para maximizar el desacoplamiento y facilitar el mantenimiento:

```text
src/
├── Domain/                 # Capa de Dominio (Entidades, Interfaces de Repositorio y Tipos)
│   ├── entities/           # Entidades puras del negocio
│   ├── repositories/       # Contratos/Interfaces de persistencia
│   └── types/              # Enums y definiciones globales
│
├── Application/            # Capa de Aplicación (Casos de Uso)
│   ├── dtos/               # Data Transfer Objects (DTOs)
│   ├── interfaces/         # Contratos de servicios de aplicación
│   ├── services/           # Lógica de negocio y casos de uso
│   └── workflows/          # Orquestadores entre múltiples dominios
│
├── Infrastructure/         # Capa de Infraestructura
│   ├── builders/           # Gen-SQL Dinámicos (Select, Insert, Update, Delete)
│   ├── database/           # Cliente Singleton para conexión a Turso
│   ├── repositories/       # Implementaciones concretas de Repositorios SQL
│   └── services/           # Integraciones (Password hashing, JWT, etc.)
│
├── WebApi/                 # Capa de Presentación (HTTP)
│   ├── container/          # Registro de dependencias (TSyringe)
│   ├── controllers/        # Controladores HTTP Express
│   ├── docs/               # Especificación OpenAPI/Swagger
│   ├── middlewares/        # Middlewares de seguridad y validación
│   └── routes/             # Endpoints Express divididos por módulos
│
├── shared/                 # Generadores de UUID y utilidades comunes
├── main.ts                 # Configuración de Express y middlewares globales
└── server.ts               # Servidor de desarrollo local
```

---

## Submódulos Funcionales

* **Seguridad y Usuarios:** Autenticación JWT, gestión de roles, control de acceso y hashing de contraseñas.
* **Gestión de Pacientes:** Expediente clínico, antecedentes médicos, archivos adjuntos e historial de contacto.
* **Agendamiento y Citas:** Reservación, asignación doctor-paciente, estados de la consulta y canalizaciones.
* **Odontograma y Expediente Médico:** Mapeo interactivo de piezas dentales, registro de evolución y emisión de recetas.
* **Tratamientos y Servicios:** Catálogo de procedimientos odontológicos, presupuestos y control de ejecución.
* **Facturación y Pagos:** Gestión de cuotas, generación de facturas, control de mora y saldos pendientes.
* **Inventario e Insumos:** Control de stock por lotes de caducidad, movimientos de entrada/salida y proveedores.

---

##  Instalación y Configuración Local

### 1. Requisitos Previos
* Node.js v18 o superior
* npm v9 o superior
* Cuenta y base de datos activa en [Turso SQL](https://turso.tech)

### 2. Pasos de Instalación

```bash
# Clonar el repositorio
git clone https://github.com/oscarMolina1523/Dental-Clinic.git

# Navegar a la carpeta del backend
cd Dental-Clinic

# Instalar dependencias
npm install
```

### 3. Variables de Entorno

Crea un archivo `.env` en la raíz del directorio con la siguiente estructura:

```env
PORT=3000
JWT_SECRET=tu_clave_secreta_jwt_aqui

# Configuración de Turso SQL
TURSO_DB_URL=libsql://tu-base-de-datos.turso.io
TURSO_DB_AUTH_TOKEN=tu_token_de_autenticacion_turso
```

### 4. Ejecución en Entorno de Desarrollo

```bash
npm run dev
```

El servidor iniciará automáticamente en `http://localhost:3000`.

---

## 📄 Documentación interactiva de la API

Una vez iniciado el servidor, puedes explorar todos los endpoints expuestos mediante Swagger UI en:

📌 **`http://localhost:3000/api-docs`**

---

## 🚀 Despliegue en Vercel

El proyecto cuenta con compatibilidad directa para desplegarse como **Serverless Functions** en Vercel:

1. Asegúrate de que el archivo `vercel.json` esté configurado apuntando a `api/index.ts`.
2. Vincula el repositorio con Vercel.
3. Agrega las variables de entorno (`TURSO_DB_URL`, `TURSO_DB_AUTH_TOKEN`, `JWT_SECRET`) desde la consola de Vercel en la sección **Project Settings > Environment Variables**.