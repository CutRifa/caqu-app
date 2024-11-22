/**
 * @swagger
 * tags:
 *   name: Login
 *   description: Endpoint untuk masuk ke akun pengguna
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Masuk ke akun pengguna
 *     tags: [Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 description: Username pengguna
 *                 example: johndoe
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Kata sandi pengguna
 *                 example: password123
 *     responses:
 *       200:
 *         description: Berhasil login akun
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Login berhasil
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 accessToken:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *                 refreshToken:
 *                   type: string
 *                   example: "d5f1b2c5d8a3b2..."
 *       400:
 *         description: Username atau password salah
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Username atau password salah.
 *       500:
 *         description: Terjadi kesalahan pada server
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Terjadi kesalahan pada server.
 */
