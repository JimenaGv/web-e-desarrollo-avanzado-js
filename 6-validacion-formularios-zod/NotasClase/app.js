
// Zod
// Bibloteca de validación de esquemas
// https://zod.dev 📃 Documentación

// Alternativa para no usar Zod de forma local: ESM
import z from 'https://cdn.jsdelivr.net/npm/zod@3.25.11/+esm'

/* // 1. Definir o crear el esquema de validación
const nombreSchema = z.string()
const edadSchema = z.number()
const booleanSchema = z.boolean()

// 2. Pasar datos
const userName = "Arturo"
const userEdad = 24

// 3. Validar datos
const mensaje = nombreSchema.parse(userName)
const mensaje2 = edadSchema.parse(userEdad)
console.log(mensaje)
console.log(mensaje2) */


// ESQUEMA BASADO EN OBJETO

/* // 1. Crear esquema de validación
const userSchema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    email: z.string().email(),
    phone: z.number().min(1, "El número debe ser mayor a 0").int().positive("La edad debe ser un número positivo")
})

// 2. Pasar info
const userData = {
    name: "Pepe",
    email: "pepe@correo.com",
    phone: 555781728
}

// 3. Validar
//const mensaje = userSchema.parse(userData)
const mensaje = userSchema.safeParse(userData)
// safeParse permite trabajar con el success y con el o los errores 💡
//console.log(mensaje)
console.log(mensaje.error) */

/* // Otra forma:
try { 
    const mensaje = userSchema.parse(userData)
} catch (error) {
    
}
 */

//Sí se puede usar try...catch con Zod, pero solo cuando usas .parse(), que lanza errores.
//Si usas .safeParse(), no necesitas try...catch, porque devuelve un objeto de resultado seguro.
//En la práctica profesional se prefiere .safeParse() para tener más control y evitar errores no atrapados.


// ARRAYS en Zod
// Ej. de uso: chequeo de checkbox
/* 
// 1. Crear el esquema de validación
const textoArraySchema = z.array(z.string())

// 2. Pasar la info
textoArraySchema.parse(["1",2,"3"]) */


// Si se quisiera validar un array de objetos como ej. un array de usuarios:
/* 
// 1. Crear esquema
const userSchema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    email: z.string().email(),
    phone: z.number().min(1, "El número debe ser mayor a 0").int().positive("La edad debe ser un número positivo")
})

// Para validar que se pase un array:
const usersSchema = z.array(userSchema)

// 2. Pasar datos
const userData = [
    {
        nombre: "Pepe",
        email: "pepe@correo.com",
        phone: "917293"
    },
    {
        nombre: "Pepe",
        email: "pepe@correo.com",
        phone: "917293"
    }
]

// 3. Validar
const mensaje = usersSchema.safeParse(userData)
console.log(mensaje)
 */
