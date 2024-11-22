/**
 * @swagger
 * tags:
 *   name: Regist
 *   description: Endpoint untuk registrasi akun
 */

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Daftar akun
 *     tags: [Regist]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: johndoe
 *               email:
 *                 type: string
 *                 example: johndoe@example.com
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       201:
 *         description: Berhasil membuat akun
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Registrasi berhasil!
 *       400:
 *         description: Kesalahan input pengguna
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Semua field harus diisi. | Kata sandi harus memiliki minimal 8 karakter. | Username sudah digunakan, coba yang lain. | Email sudah terdaftar.
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Terjadi kesalahan pada server.
 */
