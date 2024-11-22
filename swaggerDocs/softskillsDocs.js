/**
 * @swagger
 * tags:
 *   name: SoftSkills
 *   description: Endpoint untuk mengambil informasi tentang soft skills, termasuk daftar nama soft skills, artikel, dan video
 */

/**
 * @swagger
 * paths:
 *   /softSkills/names:
 *     get:
 *       summary: Mendapatkan daftar nama soft skills
 *       tags: [SoftSkills]
 *       responses:
 *         200:
 *           description: Daftar nama soft skills berhasil diambil
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: string
 *                   example: "Komunikasi Efektif"
 *         404:
 *           description: Tidak ada soft skills yang ditemukan
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "No soft skills found"
 *         500:
 *           description: Terjadi kesalahan pada server
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Internal server error"
 */

/**
 * @swagger
 *   /softSkills/{id}:
 *     get:
 *       summary: Mendapatkan detail tentang soft skill berdasarkan ID
 *       tags: [SoftSkills]
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: ID dari soft skill yang ingin diambil
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *           description: Detail soft skill berhasil diambil
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   nama_ss:
 *                     type: string
 *                     example: "Komunikasi Efektif"
 *                   artikel:
 *                     type: array
 *                     items:
 *                       type: string
 *                       example: "Komunikasi efektif sangat penting dalam dunia kerja."
 *                   video:
 *                     type: object
 *                     properties:
 *                       playlistUrl:
 *                         type: string
 *                         example: "https://www.youtube.com/playlist?list=ABC123"
 *                       thumbnailUrl:
 *                         type: string
 *                         example: "https://img.youtube.com/vi/xyz123/default.jpg"
 *                       videoUrl:
 *                         type: string
 *                         example: "https://www.youtube.com/embed/xyz123"
 *         404:
 *           description: Soft skill dengan ID tersebut tidak ditemukan
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Soft skill not found"
 *         500:
 *           description: Terjadi kesalahan pada server
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Internal server error"
 */
