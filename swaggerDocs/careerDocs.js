/**
 * @swagger
 * tags:
 *   name: Career
 *   description: Endpoint untuk mengambil informasi karir dan video terkait
 */

/**
 * @swagger
 * paths:
 *   /career/{id}:
 *     get:
 *       summary: Mendapatkan detail informasi karir berdasarkan ID
 *       tags: [Career]
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: ID karir yang ingin diambil
 *           schema:
 *             type: string
 *       responses:
 *         200:
 *           description: Berhasil mendapatkan data karir
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   namaKarir:
 *                     type: string
 *                     example: "Software Engineer"
 *                   skill:
 *                     type: array
 *                     items:
 *                       type: string
 *                     example: ["JavaScript", "Node.js", "React"]
 *                   pendidikan:
 *                     type: array
 *                     items:
 *                       type: string
 *                     example: ["S1 Informatika"]
 *                   insight:
 *                     type: array
 *                     items:
 *                       type: string
 *                     example: ["Tuntutan pekerjaan di bidang teknologi terus berkembang."]
 *                   video:
 *                     type: object
 *                     properties:
 *                       playlistUrl:
 *                         type: string
 *                         example: "https://www.youtube.com/playlist?list=xyz"
 *                       thumbnailUrl:
 *                         type: string
 *                         example: "https://img.youtube.com/vi/xyz/default.jpg"
 *                       videoUrl:
 *                         type: string
 *                         example: "https://www.youtube.com/embed/xyz"
 *         404:
 *           description: Karir tidak ditemukan
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     example: "Karir tidak ditemukan"
 *         500:
 *           description: Terjadi kesalahan pada server
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     example: "Internal server error"
 */
